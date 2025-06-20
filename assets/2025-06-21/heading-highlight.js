for (const h3 of document.getElementsByTagName('h3')) {
    const text = h3.textContent;
    const words = text.split(" ");

    if (words.map(w => w[0]).join("") != "BINGO") {
        continue;
    }

    h3.textContent = "";

    words.map(s => {
        let firstLetterSpan = document.createElement('span');
        firstLetterSpan.textContent = s[0];
        firstLetterSpan.classList.add("heading-first-letter")

        let remainingLettersSpan = document.createElement('span');
        remainingLettersSpan.textContent = s.slice(1);
        remainingLettersSpan.classList.add("heading-remaining-letters");

        h3.appendChild(firstLetterSpan);
        h3.appendChild(remainingLettersSpan);
        h3.innerHTML += ' ';
    });
}