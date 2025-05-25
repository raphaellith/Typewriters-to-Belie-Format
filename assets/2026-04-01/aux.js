const extraTags = [
    "extra",
    "tag",
    "testing",
    "test",
    "data",
    "april",
    "joke",
    "hash",
    "atari",
    "breakout",
    "outbreak",
    "apr",
    "1st",
    "long",
    "overwhelming",
    "lexicons",
    "words",
    "texts",
    "line",
    "break",
    "tests"
].sort(() => Math.random() - 0.5);  // Shuffle


function getMaxPossibleScore() {
    let result = 0;

    let tagElements = document.getElementsByClassName("tag");
    for (let i = 0; i < tagElements.length; i++) {
        result += scoreBehindTag(tagElements[i]);
    }

    return result;
}


function addExtraTags() {
    let tagListDiv = document.getElementById("tag-list");
    for (let i = 0; i < extraTags.length; i++) {
        let tagText = extraTags[i];
        tagListDiv.innerHTML += "\n<span class='tag extra-tag'>" + tagText + "</span>";
    }
}

function scoreBehindTag(tagElement) {
    if (tagElement.classList.contains("extra-tag")) {
        return tagElement.innerHTML.length;
    } else {
        return tagElement.children[0].innerHTML.length;
    }
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function lerp(a, b, t) {
    return a + t * (b-a);
}