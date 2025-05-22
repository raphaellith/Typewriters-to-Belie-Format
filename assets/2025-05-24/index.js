// Toggles between English and Italian text for Don Giovanni

function showEnglish() {
    Array.from(document.getElementsByClassName("don-giovanni-en"), (x) => {
        x.style.display = "inline";
        x.style.height = "auto";
    });

    Array.from(document.getElementsByClassName("don-giovanni-it"), (x) => {
        x.style.display = "none";
        x.style.height = "0";
    });
}

function showItalian() {
    Array.from(document.getElementsByClassName("don-giovanni-it"), (x) => {
        x.style.display = "inline";
        x.style.height = "auto";
    });
    
    Array.from(document.getElementsByClassName("don-giovanni-en"), (x) => {
        x.style.display = "none";
        x.style.height = "0";
    });
}

let italianShowing = false;

let translationButton = document.getElementById("translation-button");
translationButton.addEventListener("click", function() {
    if (italianShowing) {
        showEnglish();
        translationButton.innerHTML = "Show Italian original";
    } else {
        showItalian();
        translationButton.innerHTML = "Show English translation";
    }
    italianShowing = !italianShowing;
});

translationButton.click();  // Start with Italian showing