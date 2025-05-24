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

function addExtraTags() {
    let tagListDiv = document.getElementById("tag-list");
    for (let i = 0; i < extraTags.length; i++) {
        let tagText = extraTags[i];
        tagListDiv.innerHTML += "\n<span class='tag'>" + tagText + "</span>";
    }
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function lerp(a, b, t) {
    return a + t * (b-a);
}