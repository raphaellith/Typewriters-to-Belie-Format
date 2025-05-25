---
layout: post
title:  "This Post Has Too Many Tags"
date:   2026-04-01 12:30:00 +0000
description: "April Fool's Day 2026."
tags: april-fools games
---

<span id="article-content">Use left and right arrow keys to control the paddle. Longer tags are worth more points. Cookies are used to store your high score.</span>

<span id="ball"></span>

<span id="paddle"></span>

<div id="overlay">
    <div id="overlay-text">
        <div id="game-over-ending">
            <span id="game-over" style="font-size: 35px;"><b>GAME OVER</b></span><br>
            <div style="font-size: 20px; font-style: italic;">
                <span>Your final score is </span>
                <span id="final-score"></span><span>.</span><br>
                <span id="hscore-message"></span><br>
                <span>Refresh the page to play again.</span>
            </div>
        </div>
        <!--  -->
        <div id="win-ending">
            <span id="you-win" style="font-size: 35px;"><b>YOU WIN!</b></span><br>
            <div style="font-size: 20px; font-style: italic;">
                <span>You've removed all tags and achieved the highest possible score of</span>
                <span id="max-score"></span><span>.</span><br>
                <span id="hscore-message"></span><br>
                <span>Refresh the page to play again.</span>
            </div>
        </div>
    </div>
</div>

<link rel="stylesheet" href="{{ site.baseurl }}/assets/2026-04-01/style.css">
<script src="{{ site.baseurl }}/assets/2026-04-01/aux.js"></script>
<script src="{{ site.baseurl }}/assets/2026-04-01/index.js"></script>