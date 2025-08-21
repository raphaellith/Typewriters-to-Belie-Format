---
layout: post
title:  "The Periodic Table of Two-Letter Scrabble Words"
date:   2025-07-26 10:00:00 +0800
description: "Periodically promoting parallel plays."
tags:
- programming
- wordplay
- website
---

Two-letter words are incredibly powerful in Scrabble. Consider, for example, a game where your opponent opens with the word VOMIT, scoring 16 points. It's now your turn, and on your rack are the tiles C, E, I, L, N, O and X.

![Your opponent plays VOMIT, and your rack has the tiles C, E, I, L, N, O and X.]({{ site.baseurl }}/assets/2025-07-19/Picture1.png){: width="45%" style="display:block; margin-left:auto; margin-right:auto"}

The letter X in particular brings to mind such possibilities as MIX or VIXEN:

<div class="side-by-side-container" style="margin-top: 1em; margin-bottom: 1em;">
    <img src="{{ site.baseurl }}/assets/2025-07-19/Picture2.png" alt="Playing MIX.">
    <img src="{{ site.baseurl }}/assets/2025-07-19/Picture3.png" alt="Playing VIXEN.">
</div>

but you also notice that these tiles can be arranged to form the seven-letter word LEXICON. This is an extremely valuable observation as Scrabble rules dictate that completely emptying your rack in one go scores you [an additional 50 points](https://en.wikipedia.org/wiki/Bingo_(Scrabble)). The question is thus: Where would you play this word?

A solid option is to place it vertically at I3, extending VOMIT to the more semantically specific [VOMITO](https://www.dictionary.com/browse/vomito).

![Playing LEXICON and VOMITO.]({{ site.baseurl }}/assets/2025-07-19/Picture4.png){: width="45%" style="display:block; margin-left:auto; margin-right:auto"}

This is worth 82 points, but there is an even better option lurking in plain sight. If we play LEXICON horizontally at 7E, this would simultaneously form the bigrams [LO](https://www.dictionary.com/browse/lo), [EM](https://www.dictionary.com/browse/em), [XI](https://www.dictionary.com/browse/xi) and [IT](https://www.dictionary.com/browse/it), amassing a whopping 102 points.

![Playing LEXICON, LO, EM, XI and IT.]({{ site.baseurl }}/assets/2025-07-19/Picture5.png){: width="45%" style="display:block; margin-left:auto; margin-right:auto"}

The NASPA Word List, the official word reference employed in North American and Canadian tournament play, includes 107 two-letter words that are immensely useful for stacking words adjacently. To aid memorisation and active recall, I've designed [The Periodic Table of Two-Letter Scrabble Words](https://raphaellith.github.io/Periodic-Table-of-Two-Letter-Scrabble-Words/), a website that classifies all of these words by meaning and visualises them in a handy table.

Several notes, some more technical than others:
- Some loose decisions were made when categorising words for the sake of simplicity and aesthetics. The word OI could have been classified as "double vowels" rather than "interjections and slang"; AB and BI could have been treated as "abbreviations"; the list goes on.
- The definitions are sourced and adapted from various dictionaries, mostly official ones associated with Scrabble.
- The table does not include the 20 words that are recorded in the Collins Scrabble Words (CSW) list but not in the NASPA Word List (NWL). These words are, in alphabetical order: CH, DI, EA, EE, FY, GU, IO, JA, KO, KY, NY, OB, OO, OU, ST, UG, UR, YU, ZE and ZO. For more information on how these two word lists differ, see [this article from NASPA](https://www.scrabbleplayers.org/w/How_Collins_differs).
- This is the first time I've used TypeScript alongside JavaScript to code a website, and it's quite the revelation.
- The third-person masculine pronoun HE is located at the top right corner of the table, which is exactly where it would be placed if this was the actual periodic table of chemical elements!

View the site here:

<div id="link-button-container">
    <a href="https://raphaellith.github.io/Periodic-Table-of-Two-Letter-Scrabble-Words/" target="_blank" id="link-button">The Periodic Table of Two-Letter Scrabble Words</a>
</div>

As always, the code for the website is accessible on <a href="https://github.com/raphaellith/Periodic-Table-of-Two-Letter-Scrabble-Words" target="_blank">GitHub</a>.

The images in this post are created using the open-source program [Quackle](https://github.com/quackle/quackle).

<link rel="stylesheet" href="{{ site.baseurl }}/assets/2025-07-19/style.css">