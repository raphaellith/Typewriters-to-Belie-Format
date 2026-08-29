---
layout: post
title: "“Rulette”, but it’s Google Slides"
date: 2026-08-02
description: "The rule game where the rule changes every game."
tags:
  - game
  - programming
---

<div class="highlight-block">
<b>This article contains minimal spoilers.</b><br>
This article describes “Rulette”, an episode from Season 7 of <i>Game Changer</i>.
It includes a summary of its game mechanics, but contains little to no spoilers.
</div>

I'm pretty sure _Game Changer_ is one of the most innovative game shows out there. While almost all other game shows
adhere to a strict structure and format, _Game Changer_ prides itself on being "the only game show where the game
changes every show". Every episode sees a trio of comedians compete in an entirely different game. Unaware of the game's
premise, contestants must improvise their way through a series of ridiculous challenges, unexpected game mechanics and
surprise plot twists.

Its seventh season featured the episode ["Rulette"](https://www.youtube.com/watch?v=97sV8JN5NWs), in which players must
follow the rules they spin from a giant wheel, à la The Price is Right. Players will lose points for violating rules,
but will earn points for catching violators.

<div class="rule-box">
  <div class="card-contents">
    <div class="card-name">NO CURSING</div>
    <div class="card-description">You must not swear.</div>
  </div>
</div>

<div class="rule-box">
  <div class="card-contents">
    <div class="card-name">IN A SING-SONG VOICE</div>
    <div class="card-description">You must speak in a sing-song voice.</div>
  </div>
</div>

<div class="rule-box">
  <div class="card-contents">
    <div class="card-name">ALLERGIC TO JOKES</div>
    <div class="card-description">You must sneeze every time someone says something funny.</div>
  </div>
</div>

The Rulette wheel also features numerous "prompts", where players must accomplish challenges without breaching their
rules; and "modifiers", whereupon rules may be cloned, flipped or swapped between players. An absolute tour de force,
the episode begins with an elegant premise, slowly snowballs into comedic chaos as contestants catch each other out, and
ends with an extraordinary plot twist that subverts and surpasses all expectations you could possibly have as a viewer.

As I was watching (and rewatching) this masterpiece of an episode, I couldn't help but appreciate how straightforward
the game design is. Its game mechanics never require more than two lines of explanation, giving it a lot of potential as
a play-at-home board game.

While I have neither the time nor budget to adapt this into a personalised tabletop game complete with bespoke card
decks and scoreboards, I _do_ have the ability to make a cheap homemade digital version. There are many game engines and
software frameworks that support this: Unity, Godot and Pygame, to name but three. However, I wanted the end result to
look as polished as possible, so naturally I opted for the classic game engine of Google Slides.

<img src="{{ '/assets/2026-09-06/RuleBoard.png' | relative_url }}" alt="The BINGO logo." id="bingo-logo">
<img src="{{ '/assets/2026-09-06/Scoreboard.png' | relative_url }}" alt="The BINGO logo." id="bingo-logo">

Did you know Google has a cloud-based coding platform that lets you extend its apps' functionalities? It’s called Apps
Script, and it lets you automate tasks across various Google Workspace applications using JavaScript. Here, I used it to
implement a number of game mechanics and assets from Rulette, all accessible from a custom UI menu in the Google Slides
toolbar.

Rather than duping the original episode verbatim, I wanted to put my own creative spin on it (if you would pardon the
pun). To do this, I came up with over fifty original rules, alongside new modifiers and prompts. My favourites include:

<div class="rule-box">
  <div class="card-contents">
    <div class="card-name">POINTS TO SELF WHEN NAMED</div>
    <div class="card-description">You must point to yourself every time someone says your name.</div>
  </div>
</div>

<div class="rule-box">
  <div class="card-contents">
    <div class="card-name">STARTING WITH “LADIES AND GENTLEMEN”</div>
    <div class="card-description">You must start every sentence with “ladies and gentlemen”.</div>
  </div>
</div>

<div class="rule-box">
  <div class="card-contents">
    <div class="card-name">DRUNKENLY</div>
    <div class="card-description">You must behave as if you are drunk.</div>
  </div>
</div>

<div class="modifier-box">
  <div class="card-contents">
    <div class="card-name">GIFT</div>
    <div class="card-description">Gift a rule you currently have to another player.</div>
  </div>
</div>

<div class="modifier-box">
  <div class="card-contents">
    <div class="card-name">FLIP ALL</div>
    <div class="card-description">Flip every rule you currently have.</div>
  </div>
</div>

<div class="prompt-box">
  <div class="card-contents">
    <div class="card-name">Analyse your screen time this week</div>
  </div>
</div>

<div class="prompt-box">
  <div class="card-contents">
    <div class="card-name">Explain the food pyramid</div>
  </div>
</div>

<div class="prompt-box">
  <div class="card-contents">
    <div class="card-name">Describe what you would like for Christmas</div>
  </div>
</div>


Whereas most board games encourage in-person play, this version of Rulette exists entirely online and can easily be
played over a video call. I playtested it with a couple of friends over Discord, and never has a Google Slides
presentation elicited so many belly laughs from me. I genuinely had so much fun, and we even managed to recreate the
plot twist in the _Game Changer_ original.

If you want to host a game of Rulette for your friends, you can use the Google Slides template linked
[here](https://docs.google.com/presentation/d/1wDJyPUtWH2tsUDqhrcGP3jKrra8LRjFuNdtibAFmhxs/edit?usp=sharing), or view
its source code on [GitHub](https://github.com/raphaellith/Rulette). There, you can see all sixty-one rules used for my 
three-player Discord game, along with accompanying prompts and modifiers. Of course, these cards have been written
specially for my friend group, so you might want to adjust them based on your players' overall comfort level. After all,
the game is always changing.

<link rel="stylesheet" href="{{ '/assets/2026-09-06/style.css' | relative_url }}">