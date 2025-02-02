const sequencePuzzles = [
    {
        clues: [
            "of Fire",
            "of Azkaban",
            "of Secrets",
            "Philosopher’s Stone/ Sorcerer’s Stone"
        ],
        answer: "Last two words of Harry Potter book titles (4th to 1st)"
    },
    {
        clues: [
            "upWards",
            "leftwArds",
            "downwardS",
            "rightwarDs"
        ],
        answer: "WASD keys"
    },
    {
        clues: [
            "12th ember",
            "11th ember",
            "10th ober",
            "9th tember"
        ],
        answer: "Months minus their first three letters"
    },
    {
        clues: [
            "6:<br> V-Cube 6,<br> invented by Verdes",
            "5:<br> Professor’s Cube,<br> invented by Krell",
            "4:<br> Rubik’s Revenge,<br> invented by Sebestény",
            "3:<br> Rubik’s Cube,<br> invented by Rubik"
        ],
        answer: "Names and inventors of Rubik's cube versions"
    },
    {
        clues: [
            "Young = Straighten and position each arm 45° from your neck",
            "Men’s = Touch your head with your fingertips",
            "Christian = Extend both arms to your left",
            "Association = Bend both elbows and hold your hands together above your head",
        ],
        answer: "YMCA choreography"
    },
    {
        clues: [
            "Radiation is and is not detected by the Geiger counter",
            "The flask is and is not shattered by the hammer",
            "Poisonous hydrocyanic acid is and is not released from the flask",
            "The cat is and is not dead"
        ],
        answer: "Schrödinger’s cat"
    },
    
];


let mainFontSize = "18px";

const questionMark = "<span style='font-size: 40px;'>?</span>";


function main() {
    let sequencePuzzlesDivs = document.getElementById("sequencePuzzles");  // Main div for all puzzles

    // Default font and font size for all puzzles
    sequencePuzzlesDivs.style.fontFamily = "FF Din";
    sequencePuzzlesDivs.style.fontSize = mainFontSize;

    for (let i = 0; i < sequencePuzzles.length; i++) {
        // Div for each puzzle
        let sequencePuzzleDiv = document.createElement("div");
        sequencePuzzleDiv.classList.add("sequencePuzzle");

        // Add spacing before and after each puzzle
        sequencePuzzleDiv.style.marginTop = "60px";
        sequencePuzzleDiv.style.marginBottom = "60px";

        let questionDiv = document.createElement("div");
        sequencePuzzleDiv.appendChild(questionDiv);
        
        for (let clueNum = 0; clueNum < 4; clueNum++) {
            // Each clue consists of a clueBox div containing a clueText div

            let clueBoxButton = document.createElement("button");
            
            clueBoxButton.style.textAlign = "center";
            clueBoxButton.style.borderStyle = "solid";
            clueBoxButton.style.borderWidth = "3px";
            clueBoxButton.style.borderColor = "#007acc";
            clueBoxButton.style.borderRadius = "10px";
            clueBoxButton.style.backgroundColor = "LightBlue";
            clueBoxButton.style.margin = "3px";
            clueBoxButton.style.padding = "5px";
            clueBoxButton.style.lineHeight = "1.1";
            clueBoxButton.style.display = "inline-block";
            clueBoxButton.style.float = "left";
            clueBoxButton.style.fontFamily = "FF Din";
            clueBoxButton.style.fontSize = mainFontSize;
            clueBoxButton.style.width = `calc(25% - 6px)`;
            clueBoxButton.style.height = "120px";
            clueBoxButton.style.transition = "all ease 0.3s";
            clueBoxButton.style.opacity = (clueNum === 0) ? "1" : "0";

            let clueTextDiv = document.createElement("div");
            clueTextDiv.style.color = "#007acc";
            clueTextDiv.style.position = "relative";
            // clueTextDiv.style.top = "50%";
            // clueTextDiv.style.transform = "translateY(-50%)";
            if (clueNum != 3) {
                clueTextDiv.innerHTML = sequencePuzzles[i]["clues"][clueNum];
            } else {
                clueTextDiv.innerHTML = questionMark;
            }
            

            questionDiv.appendChild(clueBoxButton);
            clueBoxButton.appendChild(clueTextDiv);
        }
        
        // Add the answer
        let answerDiv = document.createElement("div");
        answerDiv.style.margin = "3px";
        answerDiv.style.width = `calc(100% - ${answerDiv.style.margin}*2)`;
        answerDiv.style.padding = "10px 0";
        answerDiv.style.borderRadius = "10px";
        answerDiv.style.backgroundColor = "#007acc";
        answerDiv.style.position = "relative";
        answerDiv.style.display = "inline-block";
        answerDiv.style.textAlign = "center";
        answerDiv.style.color = "white";
        answerDiv.innerHTML = sequencePuzzles[i]["answer"];
        answerDiv.style.opacity = "0";
        answerDiv.style.transition = "all ease 0.3s";
        
        sequencePuzzleDiv.appendChild(answerDiv);

        sequencePuzzlesDivs.appendChild(sequencePuzzleDiv);
        sequencePuzzlesDivs.appendChild(document.createElement("hr"));

        // Add functionality to the buttons
        function next() {
            let n = 0;
            let clues = sequencePuzzleDiv.querySelectorAll("button");
            for (n = 0; n < 4; n++) {
                if (clues[n].style.opacity === "0") {
                    clues[n].style.opacity = "1";
                    if (n == 2) {  // Reveal the "?" when the third clue is shown
                        clues[3].style.opacity = "1";
                    }
                    break;
                }
            }

            if (n === 4) {
                if (answerDiv.style.opacity === "0") {
                    clues[3].querySelector("div").innerHTML = sequencePuzzles[i]["clues"][3];
                    answerDiv.style.opacity = "1";
                } else {
                    // Reset the puzzle
                    answerDiv.style.opacity = "0";
                    clues[3].querySelector("div").innerHTML = questionMark;
                    for (let j = 1; j < 4; j++) {
                        clues[j].style.opacity = "0";
                    }
                }
            }
        }

        let clues = sequencePuzzleDiv.querySelectorAll("button");
        for (let i = 0; i < 4; i++) {
            clues[i].addEventListener("click", next);
        }
    }
}


document.addEventListener("DOMContentLoaded", main);