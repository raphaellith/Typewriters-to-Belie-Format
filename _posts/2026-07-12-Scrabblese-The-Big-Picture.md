---
layout: post
title: "Scrabblese, The Big Picture"
date: 2026-07-12
description: "Scrabblese, Part 2."
tags:
  - programming
  - maths
  - wordplay
published: false
---

In 2015, New Zealand Scrabble player Nigel Richards was crowned the winner of the annual French World Scrabble
Championships, which saw players going head-to-head in a francophone version of the classic word game. What made this
otherwise dull [headline](https://www.theguardian.com/lifeandstyle/2015/jul/21/new-french-scrabble-champion-nigel-richards-doesnt-speak-french)
unusually gripping is the fact that Richards, unlike the hundreds of contenders he beat, didn’t speak French. Instead,
he had apparently spent nine weeks learning the full French Scrabble Dictionary. “He’s a fighting machine,” commented
championship organiser Yves Brenez. “To him, _words are just combinations of letters_.”

Three years later in 2018, Richards won the French World Scrabble Championships for a second time. In 2024, he attained
the equally remarkable accomplishment of [winning](https://www.theguardian.com/world/2024/dec/10/scrabble-star-nigel-richards-wins-spanish-world-title-despite-not-speaking-spanish)
the Spanish World Scrabble Championships, despite not being fluent in Spanish.

<div class="asterisk">*</div>

_Words are just combinations of letters._ It is to this central doctrine that many popular word games, including the New
York Times’ Spelling Bee and Wordle, seem to boil down. Other linguistic aspects like semantics and pragmatics are all
thrown out the window, and this defenestration can often lead to interesting patterns in how frequently different words 
are used. The previous part of this series motivated this premise with the hypothetical language of Scrabblese, but
analyses were limited to top one hundred most prevalently used words. In this second part, we will consider the big
picture by visualising over 52697 extracted words at the same time.

We will start by revisiting a previous graph. The bar chart below displays the ten most frequently played words across
ten thousand games listed on cross-tables.com.

<div class="top-words-chart-vertical vspace"></div>


What happens when we extend this graph, including not just the top ten words but also every other word played across
these ten thousand games?

<div class="all-words-chart-vertical vspace"></div>


Here is the same graph with the y-axis drawn logarithmically:

<div class="all-words-chart-vertical-log vspace"></div>


The L shape exhibited by these curves is good news to us: It tells us that we don’t need to memorise all the words in
our dataset in order to convincingly replicate the overall playing style adopted across these ten thousand competitive
games; just a small subset is enough. In more quantitative terms, we find that

- 85.62% of plays result from 20% of words (_w_ = 10539);
- 78.24% of plays result from 10% of words (_w_ = 5269);
- 70.41% of plays result from 5% of words (_w_ = 2634); and
- Half of the plays result from 0.86% of words (_w_ = 453)

where w refers to the number of words contributing to the percentage of plays in question.  The last statement here is
especially astonishing: you only need to learn 450-odd words to emulate half of what is seen in competitive play. Of
course, some of these words will already be in our daily vernacular, so the true number might be slightly smaller.

How much smaller exactly? To gauge this, I hooked up the Scrabble database with Google Books Ngram Viewer. This Ngram
Viewer dataset allows us to retrieve a word’s collapsed relative match count — the number of times it has appeared in
books and printed publications over the years, normalised with respect to all other words in the English language. This
gives us the following scatter plot.

<div class="scatter-plot vspace"></div>


On the x-axis is each word’s collapsed relative match count; on the y-axis is the number of times each word has been
played across ten thousand games. Both axes are logarithmic, so steps are multiplicative rather than additive. (This
logarithmic nature gives rise to the artefact at the lower end of the graph, where the scattered data points appear to
form a pattern of horizontal lines. Closer inspection reveals that the bottommost line corresponds to words played only
once, the second line to words played twice; and so on.)

This scatter plot may be roughly partitioned into four quarters.

The bottom right contains words that are familiar to most people, but aren’t particularly useful in Scrabble:

<div class="centered vspace">
  <div>REVIEW</div>
  <div>PERIOD</div>
  <div>COST</div>
</div>


Words in the top right are similarly familiar, but are useful in Scrabble:

<div class="centered vspace">
  <div>AN</div>
  <div>EGO</div>
  <div>ION</div>
</div>


Words in the bottom left are neither familiar nor useful:

<div class="centered vspace">
  <div>ZERKS</div>
  <div>XENIC</div>
  <div>AALII</div>
</div>


The main area of focus is the top left, which features unfamiliar words that surface in disproportionate abundance in
Scrabble. Most of these words tend to be short and sweet, enabling players to score highly with just a few letters:

<div class="centered vspace">
  <div>DJIN</div>
  <div>QUAG</div>
  <div>TIZ</div>
</div>

though “vowel dumps” --- words that come in handy when consonants are nowhere to be seen on your rack --- are not
uncommon either:

<div class="centered vspace">
  <div>EUOI</div>
  <div>AWEE</div>
  <div>OHIA</div>
</div>

In addition, shorter words are more likely to show up more in competitive play than longer ones.

|   Word   | Number of recorded plays |
|:--------:|:------------------------:|
|    TO    |           2044           |
|   WELT   |            17            |
|  HUNGER  |            6             |
| VINEYARD |            2             |


As the line between common and uncommon words varies inevitably between person to person, the only way to truly understand this scatter graph is through personal exploration. To aid this exploration, I’ve included a slider which, when enabled, only shows words of a given length in the graph. Have a look around, uncover patterns and see where your line between familiarity and obscurity lies in this Big Picture of Scrabblese.


<div class="scatter-plot-filtered vspace"></div>

<div class="scatter-controls vspace">
  <div class="controls-row">
    <span class="slider-title">
      <b>Word length:</b>
      <span id="word-length-display">2</span>
    </span>
    <label class="checkbox-label">
      <input type="checkbox" id="word-length-checkbox" checked>
      Apply filter
    </label>
  </div>
  <label class="slider-label">
    <input type="range" id="word-length-slider" min="2" max="12" value="2" step="1" class="slider">
  </label>
</div>

<link rel="stylesheet" href="{{ site.baseurl }}/assets/2026-07-12/style.css">

<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>
<script src="{{ site.baseurl }}/assets/2026-07-12/plot-utils.js"></script>
<script src="{{ site.baseurl }}/assets/2026-07-12/index.js"></script>