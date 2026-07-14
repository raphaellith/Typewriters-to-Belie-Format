---
layout: post
title: "To Compete in Scrabble, You Must Learn a New Language"
date: 2026-07-19
description: "Scrabblese, Part 1."
tags:
  - programming
  - maths
  - wordplay
published: false
---

Though most competitive Scrabble tournaments are played in English, their use of intimidatingly arcane words sets
themselves apart from the amateur gameplay routinely seen in family gatherings and casual parties.
A [tournament game](https://www.cross-tables.com/annotated.php?u=55435) from last year, for example, featured the
following words, half of which one could argue would never surface in everyday discourse.

<div class="side-by-side vspace">
  <div class="column centered">
    <div>AE</div>
    <div>AG</div>
    <div>AID</div>
    <div>BA</div>
    <div>CERIMANS</div>
    <div>CODER</div>
    <div>COKE</div>
    <div>EF</div>
    <div>EL</div>
    <div>EME</div>
    <div>EN</div>
    <div>ENS</div>
    <div>FADS</div>
    <div>FIXIT</div>
    <div>GANE</div>
    <div>HEP</div>
    <div>HILI</div>
    <div>ID</div>
    <div>IT</div>
    <div>JOG</div>
    <div>NE</div>
    <div>OKE</div>
    <div>ONAGER</div>
  </div>
  <div class="column centered">
    <div>OP</div>
    <div>OUTRO</div>
    <div>PA</div>
    <div>PIANI</div>
    <div>QI</div>
    <div>QUINS</div>
    <div>QUINSY</div>
    <div>SH</div>
    <div>SHO</div>
    <div>SHOD</div>
    <div>TE</div>
    <div>TOLLAGES</div>
    <div>TRABEATED</div>
    <div>TWO</div>
    <div>UNBUILT</div>
    <div>UTA</div>
    <div>VICE</div>
    <div>VOX</div>
    <div>WINEY</div>
    <div>WO</div>
    <div>WYE</div>
    <div>XI</div>
    <div>ZORI</div>
  </div>
</div>


These words are sourced via [cross-tables.com](https://www.cross-tables.com/), a site which invites volunteers to upload
Scrabble games from past tournaments for reference and analysis.

From archaic terms to esoteric jargon, the vocabulary featured in these tournament games is so abstruse it might as well
be a different language.

And on that note, what if it is? What if this vocabulary _is_ indeed its own language with its own syntactical patterns?
What are these patterns, and how can we use these patterns to our advantage?

<div class="asterisk">*</div>

Crossword puzzles, especially those found in American newspapers, are notorious for their inclusion of similarly unusual
words, known collectively as Crosswordese. While cruciverbalists try their best to avoid these words, the New York Times
notes that “the letter patterns in some words --- especially short ones with lots of vowels --- are so useful that
they’re almost impossible to avoid completely”.

<div class="centered vspace">
  <div>ARCO</div>
  <div>OLLA</div>
  <div>TSETSE</div>
</div>

Naming this collection of jargon Crosswordese is certainly an interesting decision. The presence of the _-ese_ suffix
seems suggestive of its status as a language, or at least a sub-language within the broader and more commonly used
English language. Like legalese, journalese and many other -eses, Crosswordese has its own specialised lexicon and
linguistic patterns that, however artificial, are notably distinct from those seen in natural language. For example, in
English, words that refer to more familiar concepts tend to be used more frequently:

<div class="centered vspace">
  <div>EAT</div>
  <div>HAPPY</div>
  <div>TIME</div>
</div>

However, the same rule is unlikely to be transferable to Crosswordese, whose biases are less semantic in nature and more
geared towards higher vowel-to-consonant ratios.

<div class="centered vspace">
  <div>AIOLI</div>
  <div>ARIA</div>
  <div>PESO</div>
</div>

It would not be unreasonable, then, to imagine a similar sub-language called Scrabblese. To the extent that Crosswordese
is linguistically governed by vowel-consonant patterns, the syntax of Scrabblese would likewise be influenced by point
values and game mechanics. Understanding these influences and patterns can be crucial in uncovering secret tips and
tricks for mastering the game.

<div class="highlight-block">
  <p><b>Disclaimer: On whether Crosswordese and Scrabblese count as languages</b></p>

  <p>The above characterisation of Crosswordese and Scrabblese as “sub-languages” seeks only to motivate the quantitative analyses below and should be taken with a grain of salt. <i>Ethnologue</i>, an annual publication that documents the world’s living languages, notes the following guideline, among others, for determining whether two language varieties are to be treated as different languages or as dialects of the same language.</p>

  <p class="indent">Two related language varieties are normally considered to belong to the same individual language if speakers of each language variety have inherent understanding of the other language variety at a functional level (i.e., they can understand each other based on knowledge of their own language variety without needing to learn the other language variety). Where such mutual intelligibility does not exist, the two language varieties are generally seen to belong to different individual languages.</p>

  <p>Would a Crosswordese or Scrabblese “speaker” be able to communicate smoothly with an English speaker? What would it even mean for someone to be a fluent speaker of Crosswordese, but not of English?</p>
</div>

<div class="asterisk">*</div>

This perhaps preposterous postulation prompted me to perform some programmatic probing. Specifically, I extracted from
cross-tables.com precisely 10000 competitive Scrabble games, comprising 52697 distinct words.

Plotted below are the ten most commonly used words across the scraped games.

<div class="top-words-chart vspace" n="10"></div>

Several things are immediately obvious.

For starters, when it comes to sheer frequency, the word QI clearly dominates the competition. One episode of _QI_ (as
in _Quite Interesting_, the British panel show) [briefly explained](https://www.youtube.com/watch?v=lSSrRAcAeKI) why
QI (as in the Scrabble word in question) emerges as a winner:

> QI is the most commonly played word in Scrabble, because it’s a Q that doesn’t need a U, and you can just put it next
> to an I, and if it’s on a triple-letter you immediately score well.
> <div style="text-align: right">– Stephen Fry, on QI, on <i>QI</i> (Series I, Episode 18)</div>

The classic word game Boggle always prints the letter Q alongside a U, ensuring that the glyph is consistently
serviceable. Scrabble players, however, did not have this privilege: Cue a new Q, and you’re due to queue for U’s to
use. That is, until the fourth edition of the Official Scrabble Players Dictionary came along and added the word QI,
which scores a whopping 11 points. Its brevity and value rendered QI a literal game changer, and the word has been a
familiar sight in competitive gameplay ever since.

Apart from QI, WE is the only other word on the top ten list that features a highly scoring letter, with the W tile
being worth 4 points. The remaining words on the list all employ more common and less valuable letters like R, E, I, N
and T.

Another key insight that I skipped over is the rather surprising (or possibly unsurprising) fact that all ten words
contain only two letters. Should you find this shocking, allow me to expand this chart by revealing the top 100 most
used words.

<div class="top-words-chart vspace" n="100"></div>

In this hundred-word list, 99 words are bigrams. The sole exception here is QAT (ranked #71), a three-letter word whose
playability can be attributed to the same reasons as QI.

This may initially seem counterintuitive. In a game where points are awarded on a per-letter basis, why would one be
motivated to play words as short as two letters? The answer is “parallel play”: a Scrabble technique where a new word is
placed directly alongside an existing word, creating multiple new (and often two-letter) words simultaneously in the
perpendicular direction. This technique, on which I elucidated in The Periodic Table of Two-Letter Scrabble Words,
almost always maximises the score obtainable in a single move. The omnipresence of parallel play in competitive Scrabble
results in the overwhelming plethora of two-letter words in the above list.

This may be a good time to revisit our original question, where we sought to unveil (a) the patterns of Scrabblese and
(b) how these patterns could be capitalised on to our advantage. The first half of this question could be answered, at
least partially, by the three major patterns we noted from our bar chart thus far: the exceptional prevalence of QI, the
striking ubiquity of two-letter words, and the three-letter word QAT being a statistical outlier. We may attempt to
answer the second half by translating these patterns into more practical tactics and recommendations, such as the
following.

1. When a Q tile is drawn, aim to play QI. If QI cannot be played, consider QAT as an alternative.
2. Knowing your two-letter Scrabble words is valuable when it comes to parallel play.

Still, these so-called tactics leave a lot to be desired. To begin with, we’re only looking at the top 100 words in a
vast sea of over 50000. This accounts for less than 0.2% of the total, making this examination anticlimactically myopic
and somewhat purportless.

What is similarly purportless is the advice to “know your two-letter Scrabble words”. The average person’s vernacular
already contains numerous two-letter words --- IF, IT, IS, TO, BE, SO, to name but six. If it is to be so, it is
important to distinguish between the two-letter words that most people already know, and the ones worth learning
additionally.

In the next part, we’ll wrestle with these two issues simultaneously by investigating beyond the tip of this colossal
iceberg of vocabulary, shifting our focus to the big picture and visualising all 52697 words in a single chart.



<link rel="stylesheet" href="{{ site.baseurl }}/assets/2026-07-19/style.css">

<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>
<script src="{{ site.baseurl }}/assets/2026-07-19/plot-utils.js"></script>
<script src="{{ site.baseurl }}/assets/2026-07-19/index.js"></script>
