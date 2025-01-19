const connectionPuzzles = [
    {
        clues: [
            "Clearly defined",
            "Stones in Go",
            "Types of sesame seeds",
            "Television before the 1960s"
        ],
        answer: "Black and white"
    },

    {
        clues: [
            "KitKat",
            "Print Gallery<br> (M.C. Escher)",
            "Matryoshka",
            "Fractal"
        ],
        answer: "They recursively contain themselves"
    },

    {
        clues: [
            "Butterfly",
            "Snowball",
            "Ripple",
            "Domino"
        ],
        answer: "Chain reaction “effects”"
    },

    {
        clues: [
            "Peter",
            "Shrek",
            "The Little Red Riding Hood",
            "The Three Little Pigs"
        ],
        answer: "Encountered the Big Bad Wolf"
    },

    {
        clues: [
            "Integers:<br> NEGATIVE SEVEN",
            "Countries:<br> UNITED ARAB EMIRATES",
            "Chemical elements:<br> ALUMINUM (but not ALUMINIUM)",
            "English words:<br> HONORIFICABILI-TUDINITATIBUS"
        ],
        answer: "Longest words with alternating consonants and vowels"
    },

    {
        clues: [
            "Before 2020, all Summer Olympic Games were held in leap years",
            "All metallic elements have names that end in consonants",
            "All letters of the alphabet appear in “The quick brown fox jumped over the lazy dog”",
            "All national flags are rectangular"
        ],
        answer: "There is one exception"
    },
];


let mainFontSize = "18px";


function main() {
    let connectionPuzzlesDivs = document.getElementById("connectionPuzzles");  // Main div for all puzzles

    // Default font and font size for all puzzles
    connectionPuzzlesDivs.style.fontFamily = "FF Din";
    connectionPuzzlesDivs.style.fontSize = mainFontSize;

    for (let i = 0; i < connectionPuzzles.length; i++) {
        // Div for each puzzle
        let connectionPuzzleDiv = document.createElement("div");
        connectionPuzzleDiv.classList.add("connectionPuzzle");

        // Add spacing before and after each puzzle
        connectionPuzzleDiv.style.marginTop = "60px";
        connectionPuzzleDiv.style.marginBottom = "60px";

        let questionDiv = document.createElement("div");
        connectionPuzzleDiv.appendChild(questionDiv);
        
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
            clueTextDiv.innerHTML = connectionPuzzles[i]["clues"][clueNum];

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
        answerDiv.innerHTML = connectionPuzzles[i]["answer"];
        answerDiv.style.opacity = "0";
        answerDiv.style.transition = "all ease 0.3s";
        
        connectionPuzzleDiv.appendChild(answerDiv);

        connectionPuzzlesDivs.appendChild(connectionPuzzleDiv);
        connectionPuzzlesDivs.appendChild(document.createElement("hr"));

        // Add functionality to the buttons
        function next() {
            let i = 0;
            let clues = connectionPuzzleDiv.querySelectorAll("button");
            for (i = 0; i < 4; i++) {
                if (clues[i].style.opacity === "0") {
                    clues[i].style.opacity = "1";
                    break;
                }
            }

            if (i === 4) {
                answerDiv.style.opacity = "1";
            }
        }

        let clues = connectionPuzzleDiv.querySelectorAll("button");
        for (let i = 0; i < 4; i++) {
            clues[i].addEventListener("click", next);
        }
    }
}


document.addEventListener("DOMContentLoaded", main);