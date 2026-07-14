---
layout: post
title: "How to Scrape 14,493 Scrabble Games and Accidentally Uncover a Minor Web Design Loophole"
date: 2026-07-19
description: "Scrabblese, the Appendix."
tags:
  - programming
  - maths
  - wordplay
published: false
---

The last two posts (see [Part 1]({{ site.baseurl }}/To-Compete-in-Scrabble-You-Must-Learn-a-New-Language)
and [Part 2]({{ site.baseurl }}/Scrabblese-The-Big-Picture)) saw an investigation into the playing styles of competitive
Scrabble, the words they use most commonly, and the rules and patterns that govern them. We motivated this by
envisioning a fictional language called Scrabblese, where word frequencies are not influenced by grammar and semantics,
but by scoring rules and game mechanics. Our exposition ended with a logarithmic scatter plot of Scrabble play count
against collapsed relative ngram probabilities, which contained over fifty-two thousand data points, each representing a
word recorded from one of ten thousand different games from [cross-tables.com](https://www.cross-tables.com/). As we
bring this two-part expedition to a close, this post will look at a few technical details behind this project: how I
collected data from over ten thousand Scrabble games, how I organised them and why cross-tables.com isn’t a particularly
well-designed website.

View the project source code on [GitHub](https://github.com/raphaellith/Scrabblese).

### Data collection

Web scraping is when you use a script or program to automatically extract data from a web page. For this project, I
wanted to scrape every single play or move from the ten thousand most recent games from cross-tables.com. This would
normally be quite a straightforward task, but the way cross-tables.com stores its games presented a few additional
hindrances in regard to scraping. Fortunately, many of these obstacles have workarounds that are either well-documented
or easily implementable:

- Specifying custom user agents to bypass Cloudflare’s web scraping prevention features
- Ensuring that requested URLs are correctly formatted in accordance with the website’s pagination design

Amongst these hurdles, there is one that stood out to me for its not-too-technical and almost puzzlelike nature.
Interactions between databases and web services typically employ standardised formats like JSON, XML and CSV. I fully
expected cross-tables.com to follow this long-standing convention, so imagine my surprise when I found out that there
is a special file format and encoding syntax dedicated solely to describing Scrabble games.

This is the .GCG file format, and I was amazed by how little documentation there is about this bespoke encoding. It was
barely mentioned in the Wikipedia article for Scrabble, except for one line in the External Links section which
references a fairly barebones HTML documentation page. (See the addendum at the end of this article for a list of the
very few sources I could dig up about GCG.) Deciphering and assimilating this piece of documentation was a really
delightful challenge, and using it to write a robust GCG parser was even more fun.

The collapsed relative ngrams match count of each word is determined using the Google Books Ngram Dataset v3, as
obtained through the publicly available [Ngrams REST API](https://ngrams.dev/).

### Data storage and analysis

I realised early on that scraping ten thousand games from a website is not going to be a speedy process. To avoid having
to leave my laptop on overnight, I wanted to break down the scraping phase into multiple manageable sessions, each
lasting no more than a few hours. This requires maintaining a database of words and games that have already been
scraped, thus saving each session's progress and ensuring that future sessions don’t have to start again from scratch.

This project employs a SQLite database and uses the Peewee object-relational mapper to handle SQL interactions. The
model layer consists of three entities:

- `ScrabbleWordEntity`, which contains a unique word and its ngrams probability (i.e. collapsed relative match count);
- `ScrabbleGameEntity`, which contains the contents and metadata of a GCG file scraped from cross-tables.com; and
- `ScrabbleGameWordEntity`, which represents a Scrabble move by containing a foreign key to a `ScrabbleWordEntity` and a
  foreign key to a `ScrabbleGameEntity`.

Using a database also made filtering and aggregating data points much easier, as many common operations can be distilled
succinctly into a simple SQL command.

Bar and scatter plots were created with Matplotlib in my Python-based development environment. They were then adapted to
use the Plotly graphing library for dynamic in-browser rendering via JavaScript. This adaptation was aided by the
addition of JSON export functionalities, as JSON acted as a lingua franca between Python and JavaScript.

### How not to assign ID numbers

Every YouTube video is assigned an eleven-character video ID: a random jumble of letters, numbers and symbols that
appear at the end of the video’s URL. One reason why video IDs are randomly generated rather than sequentially numbered
is to prevent users from iterating through every possible ID and discovering unlisted videos that they’re not supposed
to see. Sequentially numbered IDs are an example of insecure direct object references (IDOR), where users are allowed to
access database objects through predictable ID numbers without sufficient access control.

In other words, if you’re designing a website where user-uploaded content can be either listed or unlisted, it’s
probably not the best idea to give them easily enumerable sequential identifiers.

…which is precisely what cross-tables.com did.

When a user uploads a game of theirs to cross-tables.com, they may optionally tick a checkbox and prevent that game from
“appearing in all lists of uploaded games”. In its defence, the checkbox _does_ succeed in doing what it says on the
tin. Games uploaded with this checkbox ticked will not appear in the website’s list of Recent Annotated Games, or indeed
in any other one of its lists. Nonetheless, calling something unlisted has the perhaps misleading connotation of making
it confidential and private, and that has certainly not been achieved. After all, if I see Games #123, #124 and #126
being listed, what’s stopping me from examining the contents of Game #125?

My discovery of this loophole was not the result of an active security audit but rather that of a debugging session.
During a test run, my scraper produced such logs as

```
Scraping game #893…
Scraping game #894…
Scraping game #895…
Scraping game #897…
```

which naturally piqued my interest and led me to investigate.

Ascertaining this loophole — or a security vulnerability to some — allowed me to scrape 4493 more games than I initially
planned to, bringing the grand total to 14493.

| Category | Number of scraped games |
|:--------:|:-----------------------:|
|  Listed  |          10000          |
| Unlisted |          4493           |
|  Total   |          14493          |

As this loophole is evidently not something that I myself as a user could patch, I turned my attention to more
data-driven questions. Given the last two posts on Scrabblese worked with data from just the ten thousand listed games,
could removing the four and half thousand unlisted ones have biassed the dataset one way or another? Would it affect the
conclusions established previously?

I don’t believe so. Below are two variations on the final chart from [_Scrabblese, the Big Picture_]({{ site.baseurl
}}/Scrabblese-The-Big-Picture). The first reproduction is derived only from the 4493 unlisted games, whereas the second
takes into account all 14493 listed and unlisted games. While I failed to spot any significant differences between these
versions, I again invite you to unearth any peculiarities that I might have overlooked.

<div class="scatter-plot-comparison vspace"></div>

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

<div class="scatter-controls vspace">
  <label class="checkbox-label checkbox-label--left">
    <input type="checkbox" id="dataset-listed-checkbox" checked>
    Include listed games
  </label>
  <label class="checkbox-label checkbox-label--left">
    <input type="checkbox" id="dataset-unlisted-checkbox" checked>
    Include unlisted games
  </label>
</div>


In addition to the source code, the project’s GitHub repository includes two exported datasets for listed and unlisted
games respectively. Each data point contains a word, its ngrams probability, and the number of times it is played. Note
that the scraped contents of GCG files are not published.

<div class="asterisk">*</div>

> **Addendum: References regarding the GCG file format**
>
> [This page](https://www.poslfit.com/scrabble/gcg/) documents the syntax for GCG files, as conceived in August 2000 by
> Canadian full-stack developer and Scrabble consultant John J. Chew. Linked at the very end of the Wikipedia article for
> Scrabble, this webpage is hosted by Toronto-based board game event management
> consultancy [Poslfit](https://www.poslfit.com/), of which Chew is a founding copresident. Chew has a
> personalised [home page](https://www.poslarchive.com/math/), a couple of dedicated NASPA Wiki pages as both
> a [player](https://www.scrabbleplayers.org/cgi-bin/player.pl?pid=747) and
> a [committee member](https://www.scrabbleplayers.org/wiki/index.php?title=John_Chew), and a profile on LinkedIn.
>
> GCG is the primary file format used by [Quackle](https://people.csail.mit.edu/jasonkb/quackle/), a popular Scrabble
> analysis tool. In fact, the first online reference to the GCG format I could find is from
> a [NASPA Bulletin](https://www.scrabbleplayers.org/bulletin/201106) published in June 2011, which briefly mentions it
> alongside Quackle.



<link rel="stylesheet" href="{{ site.baseurl }}/assets/2026-07-19/style.css">

<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>
<script src="{{ site.baseurl }}/assets/2026-07-19/plot-utils.js"></script>
<script src="{{ site.baseurl }}/assets/2026-07-19/index.js"></script>