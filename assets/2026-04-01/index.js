let playingArea = {};

let ball = document.getElementById("ball");
let ballPos = {};
let ballVel = {};
let ballRadius = 7;

let paddle = document.getElementById("paddle");
let paddlePos = {};
let paddleSize = {};
let paddleSpeed = 30;

let points = 0;

const speedInc = 0.025;

function startGame() {
    addExtraTags();

    updatePlayingAreaCoords();

    ballPos.x = playingArea.left + playingArea.width * 0.5;
    ballPos.y = playingArea.top + playingArea.height * 0.85;
    ballVel.x = 1 + randomFloat(-0.15, 0.15);
    ballVel.y = -1 + randomFloat(-0.15, 0.15);

    ball.style.width = ballRadius * 2 + "px";
    ball.style.height = ballRadius * 2 + "px";

    paddlePos.x = playingArea.left + playingArea.width * 0.5;
    paddlePos.y = playingArea.top + playingArea.height * 0.9;
    paddleSize.width = 200;
    paddleSize.height = ballRadius * 2;

    paddle.style.width = paddleSize.width + "px";
    paddle.style.height = paddleSize.height + "px";
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
    switch (event.code) {
        case "ArrowLeft":
            paddlePos.x -= paddleSpeed;
            break;
        case "ArrowRight":
            paddlePos.x += paddleSpeed;
            break;
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
                
                let tagLen;
                if (tagElement.classList.contains("extra-tag")) {
                    tagLen = tagElement.innerHTML.length;
                } else {
                    tagLen = tagElement.children[0].innerHTML.length
                }
                points += tagLen;

                ballVel.x += ballVel.x > 0 ? speedInc : -speedInc;
                ballVel.y += ballVel.y > 0 ? speedInc : -speedInc;
            }
        }
    }

    handleCollisionsWithRect(paddle.getBoundingClientRect());

    limitPaddlePos();

    document.getElementsByClassName("post-description")[0].innerHTML = "April's Fools Day 2026. Your current score: " + points + ".";
}

addEventListener("keydown", handleKeyPress);
startGame();
setInterval(loop, 5);