let playingArea = {};

let ball = document.getElementById("ball");
let ballPos = {};
let ballVel = {};
let ballRadius = 7;

let paddle = document.getElementById("paddle");
let paddlePos = {};
let paddleSize = {};
let paddleSpeed = 30;

let overlay = document.getElementById("overlay");

const speedInc = 0.025;

let gameInProgress = false;
let score = 0;
let maxPossibleScore;

function startGame() {
    addExtraTags();

    updatePlayingAreaCoords();

    ballPos.x = playingArea.left + playingArea.width * 0.5;
    ballPos.y = playingArea.top + playingArea.height * 0.85;
    ballVel.x = (1 - Math.round(Math.random()) * 2) + randomFloat(-0.15, 0.15);
    ballVel.y = -1 + randomFloat(-0.15, 0.15);

    ball.style.width = ballRadius * 2 + "px";
    ball.style.height = ballRadius * 2 + "px";

    paddlePos.x = playingArea.left + playingArea.width * 0.5;
    paddlePos.y = playingArea.top + playingArea.height * 0.9;
    paddleSize.width = 200;
    paddleSize.height = ballRadius * 2;

    paddle.style.width = paddleSize.width + "px";
    paddle.style.height = paddleSize.height + "px";

    gameInProgress = true;

    maxPossibleScore = getMaxPossibleScore();
}

function updatePlayingAreaCoords() {
    let mainRect = document.querySelector("main").getBoundingClientRect();
    let articleRect = document.querySelector("article").getBoundingClientRect();

    playingArea.top = mainRect.top;
    playingArea.bottom = mainRect.bottom;
    playingArea.left = articleRect.left;
    playingArea.right = articleRect.right;
    playingArea.width = playingArea.right - playingArea.left;
    playingArea.height = playingArea.bottom - playingArea.top;
}

function handleCollisionsWithPlayingAreaBorder() {
    if (ballPos.x - ballRadius < playingArea.left) {
        ballPos.x = playingArea.left + ballRadius;
        ballVel.x *= -1;
    } else if (ballPos.x + ballRadius > playingArea.right) {
        ballPos.x = playingArea.right - ballRadius;
        ballVel.x *= -1;
    }

    if (ballPos.y - ballRadius < playingArea.top) {
        ballPos.y = playingArea.top + ballRadius;
        ballVel.y *= -1;
    } else if (ballPos.y + ballRadius > playingArea.bottom) {
        ballPos.y = playingArea.bottom - ballRadius;
        ballVel.y *= -1;
        endGame();
    }
}

function handleCollisionsWithRect(rect) {
    // Naive and incomplete approach, but works fine
    // Simplification of https://stackoverflow.com/a/402019

    let collisionOccurred = false;

    if (rect.top - ballRadius < ballPos.y &&
        ballPos.y < rect.bottom + ballRadius &&
        ballPos.x > rect.left &&
        ballPos.x < rect.right) {
            ballPos.y = ballPos.y > rect.y ? rect.bottom + ballRadius : rect.top - ballRadius;
            ballVel.y *= -1;
            collisionOccurred = true;
    }

    if (rect.left - ballRadius < ballPos.x &&
        ballPos.x < rect.right + ballRadius &&
        ballPos.y > rect.top &&
        ballPos.y < rect.bottom) {
            ballPos.x = ballPos.x > rect.x ? rect.right + ballRadius : rect.left - ballRadius;
            ballVel.x *= -1;
            collisionOccurred = true;
    }

    return collisionOccurred;
}

function handleKeyPress(event) {
    if (gameInProgress) {
        switch (event.code) {
            case "ArrowLeft":
                paddlePos.x -= paddleSpeed;
                break;
            case "ArrowRight":
                paddlePos.x += paddleSpeed;
                break;
        }
    }
}

function limitPaddlePos() {
    if (paddlePos.x - paddleSize.width / 2 < playingArea.left) {
        paddlePos.x = playingArea.left + paddleSize.width / 2;
    } else if (paddlePos.x + paddleSize.width / 2 > playingArea.right) {
        paddlePos.x = playingArea.right - paddleSize.width / 2;
    }
}

function loop() {
    updatePlayingAreaCoords();

    // Update ball
    ball.style.left = ballPos.x + "px";
    ball.style.top = ballPos.y + "px";

    // Update paddle
    paddle.style.left = paddlePos.x + "px";
    paddle.style.top = paddlePos.y + "px";

    // Move ball
    ballPos.x += ballVel.x;
    ballPos.y += ballVel.y;

    handleCollisionsWithPlayingAreaBorder();

    let tagElements = document.getElementsByClassName("tag");
    for (let i = 0; i < tagElements.length; i++) {
        let tagElement = tagElements[i];
        if (tagElement.style.visibility != "hidden") {
            let collisionOccurred = handleCollisionsWithRect(tagElement.getBoundingClientRect());

            if (collisionOccurred) {
                tagElement.style.visibility = "hidden";
                
                if (gameInProgress) {
                    score += scoreBehindTag(tagElement);

                    if (score == maxPossibleScore) {
                        endGame();
                    }
                }
                
                ballVel.x += ballVel.x > 0 ? speedInc : -speedInc;
                ballVel.y += ballVel.y > 0 ? speedInc : -speedInc;
            }
        }
    }

    handleCollisionsWithRect(paddle.getBoundingClientRect());

    limitPaddlePos();

    document.getElementsByClassName("post-description")[0].innerHTML = "April Fool's Day 2026. Your current score is <b>" + score + "</b>.";

    if (!gameInProgress) {  // Using top instead of display to facilitate transition
        overlay.style.top = "0";
    } else {
        overlay.style.top = "-100%";
    }
}

function getHScoreMessage() {
    let currentHighScore = -1;

    if (document.cookie.startsWith("hscore=")) {
        currentHighScore = parseInt(document.cookie.slice(7));
        if (score < currentHighScore) {
            return "Your high score was " + currentHighScore + ".";
        }
    }

    document.cookie = "hscore=" + score;
    return "This is your new high score!";
}

function endGame() {
    gameInProgress = false;
    if (score == maxPossibleScore) {
        document.getElementById("win-ending").style.display = "block";
        document.getElementById("game-over-ending").style.display = "none";
        document.getElementById("max-score").innerHTML = maxPossibleScore;
        document.getElementById("overlay").style.backgroundColor = "rgba(27, 67, 50, 0.85);";
    } else {
        document.getElementById("win-ending").style.display = "none";
        document.getElementById("game-over-ending").style.display = "block";
        document.getElementById("final-score").innerHTML = score;
        document.getElementById("hscore-message").innerHTML = getHScoreMessage();
    }
}

function hasKeyboard() {
    return typeof window !== 'undefined' && window.matchMedia("(pointer: fine)").matches;
}

function main() {
    if (hasKeyboard()) {
        // Device has keyboard
        addEventListener("keydown", handleKeyPress);
        startGame();
        loop();

        setTimeout(() => setInterval(loop, 5), 2000);
    } else {
        addExtraTags();

        document.getElementById("article-content").innerHTML = [
            "There once was a blog with a post",
            "Whose number of tags proved utmost",
            "Should you wish to read it",
            "A keyboard is needed",
            "So use another device &mdash; diagnosed!"
        ].join('<br>');
    }   
}

main();