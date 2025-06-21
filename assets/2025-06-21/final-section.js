const finalGridLen = 3;
let bingoInFinalBoard = false;

const finalBoardCellData = [
    "You double clicked",
    "You scrolled back up to the top of the post",
    "You right clicked",
    "You clicked on a link in this post",
    "Your mouse left this tab",
    "You spent over 5 minutes reading this post",
    "Your mouse remained stationary for over 20 seconds",
    "You selected some text in this post",
    "You pointlessly clicked on one of the Bingo boards",
].map(content => [content, false]);  // List of duples, with boolean indicating whether it is marked


function initFinalSection() {
    const boardNum = 3;

    if (!window.matchMedia('(pointer: fine)').matches) {
        document.getElementById("ending-hr").hidden = true;
        document.getElementById("ending-highlight-block").hidden = true;
        return;
    }

    let bingoGrid = document.querySelector(`#board${boardNum} .bingo-grid`);

    for (let y = 0; y < finalGridLen; y++) {
        for (let x = 0; x < finalGridLen; x++) {
            let i = y * finalGridLen + x;

            let newCell = document.createElement("div");
            newCell.classList.add("bingo-cell");
            newCell.id = `board${boardNum}-cell${x}${y}`;

            let newCellContent = document.createElement("div");
            newCellContent.classList.add("bingo-cell-content");
            newCellContent.id = newCell.id + "-content";

            newCellContent.textContent = finalBoardCellData[i][0];
            
            newCell.appendChild(newCellContent);

            bingoGrid.appendChild(newCell);
        }
    }

    addEventListeners();
}

let lastScrollY = window.scrollY;
function addEventListeners() {
    // 1. DOUBLE CLICK
    addEventListener("dblclick", (event) => {
        finalBoardCellData[0][1] = true;
    })
    
    // 2. SCROLL BACK UP TO TOP OF POST
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY <= 0 && currentScrollY < lastScrollY) {  // Scroll up to top of post
            finalBoardCellData[1][1] = true;
        }

        lastScrollY = currentScrollY; // Update the last scroll position
    });

    // 3. RIGHT CLICK
    window.oncontextmenu = function() {
        finalBoardCellData[2][1] = true;
    };

    // 4. CLICK ON LINK
    function onClickLink() {
        finalBoardCellData[3][1] = true;
    }
    document.querySelectorAll('.post-content a').forEach(link => {
        link.addEventListener('click', onClickLink);
        link.addEventListener('contextmenu', onClickLink);
    });

    // 5. MOUSE LEAVES TAB
    document.addEventListener('mouseout', (event) => {
        if (event.relatedTarget === null) {  // relatedTarget = what the pointing device entered to
            finalBoardCellData[4][1] = true;
        }
    });

    // 6. MORE THAN 5 MIN SINCE PAGE LOAD
    // Skipped here as event listener not required;
    // Checked in onClickShowFinalBoard

    // 7. MOUSE STATIONARY FOR 20s
    let mouseStationaryTimer;
    const stationaryThreshold = 20 * 1000;

    document.addEventListener('mousemove', function() {
        clearTimeout(mouseStationaryTimer); // Clear previous timer on mouse movement
        mouseStationaryTimer = setTimeout(function() {
            // This code executes when the mouse is stationary for 'stationaryThreshold' milliseconds
            finalBoardCellData[6][1] = true;
        }, stationaryThreshold);
    });

    // 8. TEXT SELECTED
    function checkSelection() {
        const selection = window.getSelection();
        if (selection && !selection.isCollapsed) {
            finalBoardCellData[7][1] = true;
        }
    }

    document.addEventListener('mouseup', checkSelection);
    document.addEventListener('keyup', checkSelection);

    // 9. CLICKED ON BINGO BOARD
    Array.from(document.getElementsByClassName("bingo-board")).map(board => board.addEventListener('click', () => {
        finalBoardCellData[8][1] = true;
    }));
}

function onClickShowFinalBoard() {
    finalBoardCellData[5][1] = performance.now() > 5 * 60 * 1000;

    document.getElementById("show-final-board-button").style.display = "none";
    document.getElementById("board3").style.display = "grid";

    const cells = document.querySelectorAll("#board3 .bingo-cell");
    let delay = 0;
    const timeUnit = 800;
    for (let i = 0; i < finalGridLen * finalGridLen; i++) {
        if (finalBoardCellData[i][1]) {
            setTimeout(() => {cells[i].classList.add("marked-cell");}, timeUnit * (++delay));
        }
    }

    setTimeout(() => {
        let bingo = checkIfBingo(3, finalGridLen);

        delay = 0;
        
        if (bingo.length == finalGridLen) {
            for (let i = 0; i < finalGridLen; i++) {
                setTimeout(
                    function() {bingo[i].classList.add("bingoed-cell");},
                    timeUnit * (++delay)
                );
            }

            setTimeout(() => {
                confetti(
                    {
                        particleCount: 250,
                        spread: 90,
                        startVelocity: 50
                    }
                );
                document.getElementById("final-win").style.opacity = 1;
            }, timeUnit * (++delay));
        } else {
            document.getElementById("final-loss").style.opacity = 1;
        }

        
    }, timeUnit * (++delay));

    
}

initFinalSection();