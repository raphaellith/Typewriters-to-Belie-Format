let currentHintShown = "";

function main() {
    let grids = document.getElementsByClassName("crossword-grid");

    for (let gridElement of grids) {
        formatGrid(gridElement);
        addClickableIfNeeded(gridElement);
    }

    addHintFunctionality();
}

function formatGrid(gridElement) {
    let rows = gridElement.innerHTML.split("\n").map((line) => line.trim()).filter((line) => line.length != 0);

    gridElement.innerHTML = "";  // Clear innerHTML

    let width = rows[0].length;
    let height = rows.length;

    gridElement.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    
    let nextNumToUse = 1;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let gridCell = document.createElement("div");
            gridCell.classList.add("crossword-grid-cell");
            
            let cellIsEmpty = rows[y][x] == '.';

            if (cellIsEmpty) {
                gridCell.classList.add("crossword-grid-black-cell");
            } else {
                gridCell.classList.add("crossword-grid-white-cell");
            }

            let numbering = document.createElement("div");
            numbering.classList.add("crossword-numbering");
            if (numberingRequired(rows, x, y)) {
                numbering.innerHTML = nextNumToUse.toString();
                nextNumToUse++;
            }
            gridCell.appendChild(numbering);
            
            let solutionLetter = document.createElement("div");
            solutionLetter.classList.add("crossword-solution-letter");
            solutionLetter.innerHTML = cellIsEmpty ? "" : rows[y][x];
            
            gridCell.appendChild(solutionLetter);
            
            gridElement.appendChild(gridCell);
        }
    }
}

function numberingRequired(rows, x, y) {
    if (rows[y][x] == '.') {
        return false;
    }

    // Check if cell is start of an across word
    if (x != rows[0].length - 1) {
        if (rows[y][x+1] != '.') {
            // There is a letter to the right
            if (x == 0 || rows[y][x-1] == '.') {
                return true;
            }
        }
    }

    // Check if cell is start of a down word
    if (y != rows.length - 1) {
        if (rows[y+1][x] != '.') {
            // There is a letter below
            if (y == 0 || rows[y-1][x] == '.') {
                return true;
            }
        }
    }

    return false;
}

function addClickableIfNeeded(gridElement) {
    let clickableAttr = gridElement.attributes.getNamedItem("clickable");
    if (clickableAttr != null && clickableAttr.value == "1") {
        gridElement.onclick = function() {
            for (let solutionLetter of gridElement.getElementsByClassName("crossword-solution-letter")) {
                if (solutionLetter.style.opacity == 1) {
                    solutionLetter.style.opacity = 0;
                } else {
                    solutionLetter.style.opacity = 1;
                }
            }
        }
    }
}

function getHintMap() {
    const hintMap = new Map();

    hintMap.set("1a", [
        'This clue uses a combination of deletions and anagrams. The definition is "ground".',
        '"Gutted" is a deletion indicator. It tells us to remove all central letters of one or more words.',
        '"Lunatic" is an anagram indicator instructing us to mix up a collection of letters.',
        'Using the deletion indicator, can you identify a set of letters that can be anagrammed to form a six-letter synonym of "ground"? Note that just because "ground" is used as a noun in the clue\'s surface reading, this does not necessarily imply that the answer is also a noun.'
    ]);

    hintMap.set("5a", [
        'This clue is a double definition.',
        'We want to find a word that can be defined as either "playing a role" or "proceeding".'
    ]);

    hintMap.set("8a", [
        'This clue uses a combination of abbreviations, extractions and containers. The definition is "humiliates".',
        '"Medium", when used as a clothing size, can be abbreviated as M.',
        '"Initially" is an extraction indicator telling us to focus on the first letter of a certain word.',
        '"That woman" can be shortened to a simple pronoun.',
        '"Eating" is a container indicator. We want to put some string of letters inside some other string of letters.'
    ]);

    hintMap.set("9a", [
        'This clue uses a combination of abbreviations, extractions, charades and reversals. The definition is "The course of true love never ran like this...", which may or may not be a Shakespeare reference.',
        'Remember H and HB pencils? H is a commonly used abbreviation for "hard".',
        'In tennis, a score of zero is referred to as "love". Since the digit zero looks a bit like an O, cryptic crossword clues often use the term "love" as a stand-in for the letter O.',
        '"Leading characters" is an extraction indicator. We want to pay attention to the leading letters (i.e. characters) in a certain set of words.',
        '"On reflection" is a reversal indicator instructing us to "reflect" a sequence of letters.'
    ]);

    hintMap.set("2d", [
        'This clue uses a combination of extractions, abbreviations and charades. The definition is "with immense fortune".',
        '"Ultimate" is an extraction indicator. We want to look at the very last (i.e. ultimate) letter of some word.',
        'Both "one" and "copyright" can each be abbreviated to a single letter. Think numerals and symbols.',
        'The phrase "Beethoven\'s Fifth" can be used to clue a certain letter via extraction. I\'ll let you figure this one out.',
    ]);

    hintMap.set("3d", [
        'This is an extraction clue. The definition is "use scissors".',
        'As an extraction indicator, "odds" tell us to focus on the letters in odd-numbered positions in a certain phrase.'
    ]);

    hintMap.set("4d", [
        'This clue is a double definition.',
        'We want to find a six-letter word that can be defined as either "puppies" or "tails".',
        'As a bonus hint, "tail" is sometimes used as a verb.'
    ]);

    hintMap.set("5d", [
        'This clue uses a combination of abbreviations, extractions and charades. The definition is "questions".',
        '"Second", when used as a unit of time, can be abbreviated to S.',
        'As an extraction indicator, "occasional" tells us to look at every other letter in a word or phrase.'
    ]);

    hintMap.set("6d", [
        'This clue uses a combination of abbreviations, charades and reversals. The definition is "snack".',
        '"Old" is sometimes shortened to O, as in "good <b>o\'</b> days."',
        '"Feline" can be replaced by a shorter, slightly more common word.',
        '"Comes back" is a reversal indicator.'
    ]);

    hintMap.set("7d", [
        'This is a hidden word clue. The definition is "birdhouse".',
        '"Part of" is a hidden word indicator. This means that the answer is hidden somewhere in the subsequent word(s).'
    ]);

    return hintMap;
}

function resetHintBox() {
    let stuckMessage = document.getElementById("stuck-message");
    let hintedClue = document.getElementById("hinted-clue");
    let hintDesc = document.getElementById("hint-desc");
    let closeHintButton = document.getElementById("close-hint-button");

    stuckMessage.style.display = "block";
    hintedClue.style.display = "none";
    hintDesc.style.display = "none";
    closeHintButton.style.display = "none";

    currentHintShown = "";
}

function addHintFunctionality() {
    let hintedClueList = document.getElementById("hinted-clues");

    let stuckMessage = document.getElementById("stuck-message");
    let hintedClue = document.getElementById("hinted-clue");
    let hintDesc = document.getElementById("hint-desc");
    let closeHintButton = document.getElementById("close-hint-button");

    const hintMap = getHintMap();

    for (let clue of hintedClueList.getElementsByTagName("li")) {
        clue.onclick = function() {
            // isCollapsed returns true when nothing selected
            if (!window.getSelection().isCollapsed) {return;}

            let clueID = clue.getAttribute("value") + clue.getAttribute("dir");  // e.g. "4a"

            stuckMessage.style.display = "none";
            
            hintedClue.style.display = "block";
            hintedClue.innerHTML = clue.innerHTML;
            toggleClueHintsIn(hintedClue);
            
            hintDesc.style.display = "block";
            hintDesc.innerHTML = hintMap
                .get(clueID)
                .map(p => "<p>" + p + "</p>")
                .join("");
            
            closeHintButton.style.display = "block";

            currentHintShown = clueID;
        }
    }

    closeHintButton.onclick = resetHintBox;
}

function toggleClueHintsIn(hintedClueList) {
    for (let span of hintedClueList.getElementsByTagName("span")) {
        let replacementDone = span.classList.replace("def", "def0") || span.classList.replace("wp", "wp0");

        if (replacementDone) {
            continue;
        }

        span.classList.replace("def0", "def");
        span.classList.replace("wp0", "wp");
    }
}

main();
toggleClueHintsIn(document.getElementById("hinted-clues"));