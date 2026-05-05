---
layout: post
title: "To Win Competitive Scrabble, You Must Learn a New Language"
date: 2026-01-04
description: "Scrabblese, Part 1."
tags:
  - programming
  - maths
  - wordplay
---

Though most competitive Scrabble tournaments are played in English, their use of intimidatingly arcane words sets
themselves apart from the amateur gameplay routinely seen in family gatherings and casual parties.
A [tournament game](https://www.cross-tables.com/annotated.php?u=55435)
from last year, for example, featured the following words, half of which one could argue would never surface in everyday
discourse.

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

<p class="asterisk">*</p>

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

<p class="asterisk">*</p>

This perhaps preposterous postulation prompted me to perform some programmatic probing. Specifically, I extracted from cross-tables.com precisely 10000 competitive Scrabble games, comprising 52697 distinct words.

Plotted below are the ten most commonly used words across the scraped games.









<div id="top-words-bar-chart"></div>

<link rel="stylesheet" href="{{ site.baseurl }}/assets/2026-01-04/style.css">

<script>
  window.scrabbleseAssetBase = "{{ site.baseurl }}/assets/2026-01-04";
</script>
<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>
<script src="{{ site.baseurl }}/assets/2026-01-04/barPlotUtils.js"></script>
<script src="{{ site.baseurl }}/assets/2026-01-04/scatterPlotUtils.js"></script>
<script src="{{ site.baseurl }}/assets/2026-01-04/index.js"></script>
