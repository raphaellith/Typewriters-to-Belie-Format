const gridLen = 5;
const numOfGridCells = gridLen * gridLen;
let waitTime = 300;  // 300ms between coloring each bingoed cell yellow

let buzzwords = shuffled([
    "Selfies",
    "Dances",
    "Tells bad joke",
    "Receives phone call",
    "Claps",
    "Initiates party game",
    "Screams",
    "Drops snack",
    "Introduces friend",
    "Baffled",
    "Uses word with over 12 letters",
    "Misuses slang",
    "Swears",
    "Runs",
    "Uses stationery",
    "Claps",
    "\"Whoa\"",
    "Jumps",
    "Consults ChatGPT",
    "\"Huh?\"",
    "Facepalms",
    "Laughs for over 5 seconds",
    "Roasts someone",
    "Films video",
    "Grosses everyone out"
]);

let hasAchievedBingo = new Map();

function shuffled(list) {
    /* Returns a shuffled version of the list */
    return list.sort(() => Math.random() - 0.5);
}

function randomElement(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function simulatePress(cell) {
    let boardNum = parseInt(cell.id[5]);
    if (hasAchievedBingo.get(boardNum)) {
        return;
    }

    // Toggle between marked & unmarked
    cell.classList.toggle("marked-cell");

    // Check if bingo has been achieved
    let bingo = checkIfBingo(boardNum);
    
    if (bingo.length == gridLen) {
        hasAchievedBingo.set(boardNum, true);

        for (let i = 0; i < gridLen; i++) {
            setTimeout(
                function() {bingo[i].classList.add("bingoed-cell");},
                waitTime * (i+1)
            );
        }
    }
}

function initBoard(boardNum, bingoCellContent) {
    /*
    Initialises the site using the given bingo cell data (from URL/ from local storage/ by default).
    */

    let bingoGrid = document.querySelector(`#board${boardNum} .bingo-grid`);

    for (let y = 0; y < gridLen; y++) {
        for (let x = 0; x < gridLen; x++) {
            let i = y * gridLen + x;

            let newCell = document.createElement("div");
            newCell.classList.add("bingo-cell");
            newCell.id = `board${boardNum}-cell${x}${y}`;

            let newCellContent = document.createElement("div");
            newCellContent.classList.add("bingo-cell-content");
            newCellContent.id = newCell.id + "-content";

            newCellContent.textContent = bingoCellContent[i];
            
            newCell.appendChild(newCellContent);
            // newCell.onclick = function() {cellPressed(newCell);}

            bingoGrid.appendChild(newCell);
        }
    }

    for (let boardNum = 1; boardNum <= 2; boardNum++) {
        hasAchievedBingo.set(boardNum, false);
    }
}


function allCellsMarked(cells) {
    /*
    Given a list of cell elements, returns whether all of them have been marked.
    */
    return cells.every((c) => c.classList.contains("marked-cell"));
}


function checkIfBingo(boardNum, bingoGridLen=gridLen) {
    /*
    Checks if bingo has been achieved.
    If it has, the bingoed cells are returned.
    If not, an empty list is returned.
    */

    // Check rows
    for (let y = 0; y < bingoGridLen; y++) {
        let row = [];
        for (let x = 0; x < bingoGridLen; x++) {
            let cell = document.getElementById(`board${boardNum}-cell${x}${y}`);
            row.push(cell);
        }
        if (allCellsMarked(row)) {
            return row;
        }
    }

    // Check columns
    for (let x = 0; x < bingoGridLen; x++) {
        let col = [];
        for (let y = 0; y < bingoGridLen; y++) {
            let cell = document.getElementById(`board${boardNum}-cell${x}${y}`);
            col.push(cell);
        }
        if (allCellsMarked(col)) {
            return col;
        }
    }

    // Check diagonals
    let diagSE = [];
    let diagSW = [];
    for (let i = 0; i < bingoGridLen; i++) {
        diagSE.push(document.getElementById(`board${boardNum}-cell${i}${i}`));
        diagSW.push(document.getElementById(`board${boardNum}-cell${bingoGridLen - 1 - i}${i}`));
    }
    if (allCellsMarked(diagSE)) {
        return diagSE;
    }
    if (allCellsMarked(diagSW)) {
        return diagSW;
    }

    return [];
}

function unmarkAllCells(boardNum) {
    Array.from(document.querySelectorAll(`#board${boardNum} .bingo-cell`))
    .map(cell => {
        cell.classList.remove("marked-cell")
        cell.classList.remove("bingoed-cell");
    });
}

function main() {
    let bingoCellContent = new Set();

    while (bingoCellContent.size < 25) {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        bingoCellContent.add(randomNum);
    }

    bingoCellContent = Array.from(bingoCellContent);

    initBoard(1, bingoCellContent);
    initBoard(2, buzzwords);

    for (let boardNum = 1; boardNum <= 2; boardNum++) {
        setInterval(() => {
            if (!hasAchievedBingo.get(boardNum)) {
                unmarkedBingoCells = Array.from(document.querySelectorAll(`#board${boardNum} .bingo-cell`))
                .filter(cell => !cell.classList.contains("marked-cell"));
                simulatePress(randomElement(unmarkedBingoCells));
                if (hasAchievedBingo.get(boardNum)) {
                    setTimeout(
                        () => {
                            unmarkAllCells(boardNum);
                            hasAchievedBingo.set(boardNum, false)
                        },
                        waitTime * gridLen + 5000
                    );
                }
            }
        }, 2000);
    }
}

main();