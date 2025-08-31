---
layout: post
title:  "Cryptic Crosswords and How to Solve Them"
date:   2025-06-14
description: "Wordplay-ish sentence? (6)"
tags: puzzles wordplay
---

### Vanilla crosswords, and where they fall short

As you may already know, a crossword is a puzzle where solvers are tasked with filling in a grid using words and phrases that intersect one another. Answers are written either vertically or horizontally, otherwise known as "down" and "across". An example of this is displayed below --- click on the grid to reveal or hide all answers!

<div class="grid-and-clue" style="margin-top: 50px; margin-bottom: 50px;">
    <div class="crossword-grid" clickable=1>
    RISKS
    ONION
    WAZOO
    DWELT
    YES..
    </div>
    <!--  -->
    <div class="clue-list" style="overflow-y: scroll;">
        <p style>
            <b>Across</b><br>
            <ol>
                <li value=1>Endangers (5)</li>
                <li value=6>&#8220;Bloomin&#8217;&#8221; item at Outback Steakhouse (5)</li>
                <li value=7>Plentifully: up the ________ (5)</li>
                <li value=8>Resided (5)</li>
                <li value=9>You wanted to see me because...? (3)</li>
            </ol>
        </p>
        <p>
            <b>Down</b><br>
            <ol>
                <li value=1>Rambunctious (5)</li>
                <li value=2>Totally blown away (2,3)</li>
                <li value=3>S, M and L (5)</li>
                <li value=4>________-Aid Man, mascot known for smashing through walls and yelling "Oh, yeah!" (4)</li>
                <li value=5>Pesky little twerp (4)</li>
            </ol>
        </p>
        <aside style="width: 50%; float: right; text-align: right;">(adapted from the New York Times' <a href="https://www.nytimes.com/crosswords/game/mini/2025/05/26" target="_blank"><i>Mini Crossword</i></a> published on May 26, 2025)</aside>
    </div>
</div>

In a typical crossword such as this, each answer is clued using a definition or synonym thereof. For instance, the clue at 8 Across

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        Resided (5)
    </div>
</div>

tells us to look for a five-letter synonym of "resided". The clue and the answer must grammatically "agree": if the clue is written in past tense, say, so must the answer. This means that the solution for 8 Across might be something like LIVED or BIDED, but cannot be STAYS, ABIDE or LODGE. Likewise, it is possible for the clue at 1 Across

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        Endangers (5)
    </div>
</div>

to have the answer HARMS, but not PERIL.

Answers may consist of multiple words. For example, the 2 Down clue

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        Totally blown away (2,3)
    </div>
</div>

asks us for a phrase meaning "totally blown away". The bracketed quantities, separated by commas, denote the length of each word, so we want to come up with a two-word phrase where the first word has two letters and the second one has three. Hyphenated answers are notated similarly --- for instance, _The Kew Gardens Book of Crossword Puzzles_ clues the answers TRADE-IN and SON-IN-LAW as follows.

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        Item given to partly pay for a new one (5-2)
    </div>
    <div class="newspaper-cutout-row">
        Husband of one's daughter (3-2-3)
    </div>
</div>

Plain crosswords like this (also known as "straight" or "vanilla" crosswords) are incredibly fun to solve, but they fall short in terms of the uniqueness of each clue's answer. For example, to solve the clue for 1 Down,

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        Rambunctious (5)
    </div>
</div>

we must identify a five-letter synonym for "rambunctious". While this information may seem specific at first glance, it may not be enough for us to confidently pinpoint a single word as our answer. In fact, this leaves dozens of options like NOISY and ROUGH (neither of which is the right answer) on the table, with no further info to help narrow things down.



### Introduction to cryptic crosswords

Unlike vanilla crosswords, where each clue may correspond to a whole host of possible answers, _cryptic crosswords_ eliminate this issue by having each clue provide not just one but two ways of deducing the answer word or phrase.

<div class="highlight-block">
    <p><b>The structure of a cryptic crossword clue</b></p>
    <p>
        Alongside a definition, a cryptic crossword clue also has an additional element of wordplay as an alternative means of inferring the answer. To illustrate this, let us consider the clues
        <div class="newspaper-cutout">
            <div class="newspaper-cutout-row"> Try selection of chocolate sticks (4) </div>
            <div class="newspaper-cutout-row"> Disrupted rebel action for feast (11) </div>
        </div>
        which correspond to the answers TEST and CELEBRATION respectively.
    </p>
    <p>
        Each cryptic crossword clue comprises two parts that point to the same answer: the <i>definition</i> and the <i>wordplay</i>. The definition, which works the same way as it does in a plain vanilla crossword, always appears at the very start or the very end of the clue. The definition may consist of multiple words.
        <!--  -->
        <div class="newspaper-cutout">
            <div class="newspaper-cutout-row">
                <span class="def">Try</span>
                <span class="wp">selection of chocolate sticks</span> (4)
            </div>
            <div class="newspaper-cutout-row">
                <span class="wp">Disrupted rebel action</span>
                for <span class="def">feast</span> (11)
            </div>
            <div class="newspaper-cutout-row" style="margin-top: 10px; text-align: right;">
                <span class="dot def-color"></span> Definition<br>
                <span class="dot wp-color"></span> Wordplay
            </div>
        </div>
        <!--  -->
        As exemplified by the second clue, the definition and wordplay may be optionally connected with a <i>linking word</i>, usually in the form of a verb or preposition that references how the wordplay "leads to", "produces", "comes from" or "is found in" the definition (or vice versa). Here are a couple more examples:
        <!--  -->
        <div class="newspaper-cutout">
            <div class="newspaper-cutout-row">
                <span class="def">Kind</span> of
                <span class="wp">awful desecration</span> (11)
            </div>
            <div class="newspaper-cutout-row">
                <span class="def">Republic</span> is
                <span class="wp">part of crusade</span> (3)
            </div>
            <div class="newspaper-cutout-row">
                <span class="wp">Anticipate lecture</span> producing
                <span class="def">spit</span> (11)
            </div>
            <div class="newspaper-cutout-row">
                <span class="wp">We hear Monday and Sunday</span> cause
                <span class="def">confusion</span> (4)
            </div>
            <div class="newspaper-cutout-row">
                <span class="def">Grass</span>
                <span class="wp">study announced</span> (4)
            </div>
            <div class="newspaper-cutout-row">
                <span class="wp">Chatter about</span> 
                <span class="def">tool</span> (7)
            </div>
            <div class="newspaper-cutout-row" style="margin-top: 10px; text-align: right;">
                <span class="dot def-color"></span> Definition<br>
                <span class="dot wp-color"></span> Wordplay
            </div>
        </div>
        <!--  -->
        Excluding linking words, each word in a cryptic crossword clue must either belong to the definition or part of the wordplay. Every word must serve a purpose, with not a single one wasted.
    </p>
    <p>
        (The answers to the six clues above, by the way, are CONSIDERATE, USA, EXPECTORATE, DAZE, REED and RATCHET. All clues in this section are extracted from The Guardian's <a href="https://www.theguardian.com/crosswords/quick-cryptic/1" target="_blank">first ever Quick Cryptic crossword</a>.)
    </p>
</div>

At this point, you might be wondering how exactly the wordplay is tied to the answer. After all, how in the world could the phrase "awful desecration" possibly be related to any synonym of "kind"? We'll cover this in detail in the coming sections, but for now just remember that part of the enjoyment in solving cryptic crosswords lies in discerning between the definition and the wordplay. Identifying where the definition is can be tricky owing to misleading "surface readings", i.e. what the clue appears to mean when read as a normal ordinary sentence. For example, consider the following clue from [one of The Guardian's Everyman crosswords](https://www.theguardian.com/crosswords/everyman/3588):

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="wp">Fight back, restricting opening of secret</span> 
        <span class="def">files</span> (5)
    </div>
    <div class="newspaper-cutout-row" style="margin-top: 10px; text-align: right;">
        <span class="dot def-color"></span> Definition<br>
        <span class="dot wp-color"></span> Wordplay
    </div>
</div>

Here, the definition is "files". Since the clue apparently alludes to cyberattacks and digital file protection, we might be inclined to think of "documents" or "data" as potential synonyms. Nonetheless, this turns out to be deliberate misdirection set up by the clue writer. The correct answer for this particular clue is RASPS, which _is_ an entirely valid synonym for "files", just not in the sense we might initially expect.



### How the wordplay works

Wordplay is the single most remarkable feature of cryptic crosswords. The wordplay portion of a clue tells you how to play around with certain words and letters in order to stitch together and form the final answer. This can be done in a variety of ways:

- Double definitions
- Anagrams
- Abbreviations and charades
- Reversals
- Containers
- Hidden words
- Extractions and deletions
- Homophones, voices and Spoonerisms
- &Lit and cryptic definitions

Here, we'll briefly go through each of these clue types, explaining how they work and how they can be spotted. This is by no means a comprehensive guide, but should be enough for those just starting out.


### Double definitions

In a double definition clue, the wordplay part of the clue gives an alternative definition of the answer word. For example, this clue from [a Quick Cryptic crossword](https://www.theguardian.com/crosswords/quick-cryptic/52)

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="def">Bold undertaking</span> in
        <span class="wp">business</span> (10)
    </div>
</div>

gives the answer ENTERPRISE, which can mean either a "bold undertaking" or a "business". The same crossword also has the clue

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="def">Observe</span>
        <span class="wp">one seeking to obtain secret information</span> (3)
    </div>
</div>

which provides a pair of different definitions for SPY. Trickier examples from [this Quiptic crossword](https://www.theguardian.com/crosswords/quiptic/1301) include

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="def">Don't eat</span>
        <span class="wp">the kind of food served at McDonald's</span> (4)
    </div>
    <div class="newspaper-cutout-row">
        <span class="def">How steak may be cooked</span> that's
        <span class="wp">good for you!</span> (4,4)
    </div>
    <div class="newspaper-cutout-row">
        <span class="def">Problem for driver</span> in
        <span class="wp">boring old Phoenician city</span> (4,4)
    </div>
</div>

with the answers FAST, WELL DONE and FLAT TYRE. In the last clue, "boring" serves as a synonym for FLAT, while TYRE is the name of [a Lebanese city](https://en.wikipedia.org/wiki/Tyre,_Lebanon), one of the oldest in the world.

Setters that feeling particularly crafty may at times sneak in a triple definition clue, although this happens very rarely.



### Anagrams

A pair of words (or phrases) are said to be _anagrams_ if one can be formed by rearranging the letters in the other, e.g. LISTEN and SILENT. In an anagram clue, a set of letters are provided and must be rearranged to form the answer.

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="def">Withstand</span>
        <span class="wp">manipulation of sister</span> (6)
    </div>
</div>

In the clue above, the answer can be obtained via "manipulation of sister". Sure enough, if we manipulate (i.e. rearrange) the letters of SISTER, we get RESIST, another word for "withstand".

Here, the word "manipulation" acts as an anagram indicator (or "anagrind") which informs solvers of the clue type. Anagram indicators generally fall into one of the following categories.


| Category | Examples of anagram indicators |
|:---:|:---:|
| Change and rearrangement | arranged, upset, out, rewritten, resort (as in "re-sort") |
| Movement and motion | roaming, moving, dancing, playing, about |
| Strangeness and untruths | odd, weird, off, criminal, glitch |
| Destruction and deterioration | accident, disaster, broken, injured |
| Chaos and insanity | revolution, lunatic, messy, wild |
| Novelty and unfamiliarity | new, novel, special, different |

[This Quick Cryptic](https://www.theguardian.com/crosswords/quick-cryptic/48) includes examples like

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="wp">Pete's wrong.</span> It's
        <span class="def">too expensive</span> (5)
    </div>
    <div class="newspaper-cutout-row">
        <span class="wp">Raptor attacked</span>
        <span class="def">talkative bird</span> (6)
    </div>
</div>

where the letters in PETES and RAPTOR can be mixed up to give the answers STEEP and PARROT respectively. "Wrong" and "attacked" act as anagram indicators.

Now consider this pair of clues, one from [an Everyman](https://www.theguardian.com/crosswords/everyman/4015) and one from [a Quiptic](https://www.theguardian.com/crosswords/quiptic/1301).

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="def">Wonderful</span>,
        <span class="wp">for it told us how to dance</span> (3,2,4,5)
    </div>
    <div class="newspaper-cutout-row">
        <span class="def">Faulty hearing</span> &mdash; 
        <span class="wp">Mr Ali's troubled with it</span> (8)
    </div>
</div>

The first clue is a skilfully disguised anagram, with "to dance" acting as our anagram indicator. If the fourteen letters in FOR IT TOLD US HOW were "to dance", they may form the phrase OUT OF THIS WORLD, which means "wonderful".

In the second clue, one might quickly spot that "troubled" is an anagram indicator, instructing us to rearrange the letters in MR ALIS. However, this only gives us six letters, clearly insufficient for an eight-letter answer. Rereading the clue, we notice that MR ALIS aren't the only troubled letters --- they're troubled with IT. Jumbling up MR ALIS IT gives us the answer MISTRIAL, a synonym for the beautifully misleading definition "faulty hearing".



### Abbreviations and charades

Cryptic crossword clues utilise [an enormous number of abbreviations](https://en.wikipedia.org/wiki/Crossword_abbreviations) from such diverse disciplines as Roman numerals, chess notation, country codes, noble ranks, scientific terminology and the NATO phonetic alphabet. In a charades clue, abbreviations and/or words are merged and concatenated to form the answer. [This Quick Cryptic](https://www.theguardian.com/crosswords/quick-cryptic/61), for example, has the following clues.

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="wp">Creep regarding small</span>
        <span class="def">mythical beasts</span> (7)
    </div>
    <div class="newspaper-cutout-row">
        <span class="wp">Golfers' cries had sound of pain</span> to
        <span class="def">give a sign of things to come!</span> (10)
    </div>
    <div class="newspaper-cutout-row">
        <span class="wp">Old United shirt</span> is
        <span class="def">unfashionable</span> (3)
    </div>
</div>

In the first clue,

- The word "creep" can be replaced by the synonym DRAG.
- "Regarding" is a synonym of ON. (For instance, the title of Charles Darwin's _On the Origin of Species_ means the same thing as "Regarding the Origin of Species".)
- As a clothing size, the word "small" is commonly abbreviated as S.

Putting everything together, we get DRAG + ON + S = DRAGONS, which are mythical beasts.

Likewise, the second clue produces the word FORES ([golfers' cries](https://en.wikipedia.org/wiki/Fore_(golf))) + HAD + OW (sound of pain) = FORESHADOW, which means to give a sign of things to come.

Finally, in the last clue, each of the first three words can be abbreviated as [O](https://chambers.co.uk/search/?query=o&title=21st), [U](https://chambers.co.uk/search/?query=u&title=21st) and [T](https://chambers.co.uk/search/?query=t&title=21st) (as in a T-shirt), which spell the answer OUT, meaning "unfashionable".

A cryptic crossword clue may involve any number of wordplay techniques. For example, solving the following [clue](https://www.theguardian.com/crosswords/quiptic/862) requires both anagramming and charades.

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="def">Story</span> of
        <span class="wp">knight with unhappy love</span> (5)
    </div>
</div>

In chess notation, a "knight" is abbreviated as N. Coupled with an unhappy (i.e. broken; anagrammed) version of LOVE, we get N + OVEL = NOVEL, a type of fictional story.

As shown by "knight" in the example above, the abbreviation of a word or phrase may differ from its initials. Moreover, an abbreviation is valid only if it is permitted by the dictionary.

### Reversals

Reversals are quite straightforward (or rather, straight-backward). Reversal indicators are usually words that describe rotations, reflections and opposite directions. Some indicators may even reference the direction in which the answer is written --- for example,

- For an across clue, "westwards" and "from the east" act as reversal indicators by implying that letters should be written from right to left.
- For a down clue, "brought up" and "elevated" act as reversal indicators by implying that letters should be written from bottom to top.

Have a look at these clues from [a Quick Cryptic](https://www.theguardian.com/crosswords/quick-cryptic/58):

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="def">Lived</span> and 
        <span class="wp">observed with reflection</span> (3)
    </div>
    <div class="newspaper-cutout-row">
        <span class="def">Merrymaking</span> in
        <span class="wp">bar taken the wrong way</span> (5)
    </div>
    <div class="newspaper-cutout-row">
        <span class="def">Abused</span>
        <span class="wp">free returns</span> (7)
    </div>
</div>

with answers WAS (reversal of SAW), REVEL (reversal of LEVER) and REVILED (reversal of DELIVER).

This can once again be mixed with other clue types, as seen in this [Everyman](https://www.theguardian.com/crosswords/everyman/4015) clue:

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="wp">Numerous Dutch rejected old</span>
        <span class="def">go-getter</span> (6)
    </div>
</div>

Here, "numerous" can be substituted with MANY, while "Dutch" can be shortened to D. If the letters in MANY + D are reversed ("rejected"), we get DYNAM, which can be paired with O (abbreviation of "old", as in "good o' days") to get DYNAMO, another word for a go-getter.



### Containers

Some clues require us to place words inside other words:

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="def">Laments</span> of
        <span class="wp">the French in unruly siege</span> (7)
    </div>
    <div class="newspaper-cutout-row">
        <span class="wp">Number, day by day in urban area</span>,
        <span class="def">subdued</span> (5,4)
    </div>
    <div class="newspaper-cutout-row">
        <span class="wp">Give love, siezed by urge</span> of
        <span class="def">glory</span> (7)
    </div>
</div>

In the first clue, "the French" refers to the French translation of "the" --- LE. If we put this inside an unruly anagram of SIEGE, we get E(LE)GIES = ELEGIES, a synonym of "laments".

To tackle the second clue, we start by replacing "number" with the number ONE. Since "day" can be replaced by [D](https://en.wikipedia.org/wiki/D_(disambiguation)#Time), putting "day" by "day" would give us the digram DD. Lastly, we introduce the string ONE + DD into the urban area of TOWN to get T(ONE + DD)OWN = TONED DOWN, which means to be subdued.

In the third clue, the words "give" and "urge" are synonymous to LEND and SPUR respectively. In tennis, the term "love" is used to represent a score of zero, which looks like an "O". Hence, if LEND + O is seized by SPUR, we would have SP(LEND + O)UR = SPLENDOUR, a synonym of "glory".



### Hidden words

In a hidden word clue, the answer is concealed within the clue itself. For instance, hidden in the clues

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="def">Gum</span>
        <span class="wp">un<b style="color: brown;">paste</b>urised? Not entirely</span> (5)
    </div>
    <div class="newspaper-cutout-row">
        <span class="def">Horrified</span>, as
        <span class="wp">some windb<b style="color: brown;">ag has t</b>elephoned</span> (5,4)
    </div>
</div>

are the answers PASTE and AGHAST. Hidden word indicators are often descriptions of secrecy, disguises or partiality.

Hidden word and reversal indicators can be used together to clue words that are camouflaged in reverse. This is illustrated by [this Quick Cryptic](https://www.theguardian.com/crosswords/quick-cryptic/21) which has the clues

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="wp">Slice of upside down cak<b style="color: brown;">e I p</b>urchased</span> in
        <span class="def">dish</span> (3) <span style="color: dimgray; margin-left: 1.5em;">[down clue]</span>
    </div>
    <div class="newspaper-cutout-row">
        <span class="def">Sizeable</span>
        <span class="wp">k<b style="color: brown;">eg Ral</b>ph carries back</span> (5)
    </div>
    <div class="newspaper-cutout-row">
        <span class="wp">Rejected part of life<b style="color: brown;">time r</b>etirement</span>
        <span class="def">transfer</span> (5)
    </div>
</div>

and the backwardly concealed solutions PIE, LARGE and REMIT. Since the first clue's hidden-word indicator "upside down" references vertical reversal, it is only valid when used as a down clue.



### Extractions and deletions

Some clues require extracting letters from one or more words. Various indicators are used to specify the type of letters to be selected.

| Letters to be extracted | Examples of extraction indicators |
|:---:|:---:|
| First letter | initially, primarily, principally, at first, root, head, starter, introduction |
| Last letter | ultimately, finally, at last, ending, conclusion |
| First and last letters | extremely, sides, banks, borders, edges, case |
| Central letters | heart, core, centre, insiders |
| Every other letter | regularly, alternately, occasionally, on and off, at odds\*, oddly\*, evens out\*, evenly\* |

<p style="width: 60%; text-align: right; margin-left: 40%;">*"At odds", "oddly" and "evens out" refer to the extraction of letters at odd-numbered positions of a word; whereas "evenly" refer to the extraction of letters at even-numbered positions.</p>

Here are three extraction clues. The second one comes from [this Quiptic crossword](https://www.theguardian.com/crosswords/quiptic/1329).

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="wp">Leaders in some criminal alliance masterminding</span>
        <span class="def">trick</span> (4)
    </div>
    <div class="newspaper-cutout-row">
        <span class="wp">Defective neutral and live, both ultimately</span>
        <span class="def">having no connection</span> (9)
    </div>
    <div class="newspaper-cutout-row">
        <span class="def">Troubling</span>
        <span class="wp">rhetoric undermines talented Latino singer, essentially</span> (10)
    </div>
    <div class="newspaper-cutout-row">
        <span class="wp">Regularly wrote</span> of
        <span class="wp">great sorrow</span> (3)
    </div>
</div>

This first clue directs our attention to the "leaders" (i.e. leading letters) of the phrase "some criminal alliance masterminding", giving us SCAM, a kind of trick.

In the second clue, we're told that seven-letter word NEUTRAL is defective, implying that it should be anagrammed. To find the two remaining letters out of the nine, we take the ultimate letters of both "and" and "live", thus acquiring D and E. Consequently, if all of NEUTRAL, D and E are defective, we get the word UNRELATED, defined by the setter as "having no connection".

In the third clue, the word "essentially" indicates that we should look at the essential and central letters of the preceding words. This gives us the digrams TO, RM, EN, TI and NG, which spell out the answer TORMENTING.

For the fourth clue, we look at the letters of the word "wrote", but only on a regularly basis. Focusing only on every other letter, we get the word WOE, meaning great sorrow.

Contrary to extraction indicators, deletion indicators tell us to remove part of a given word.

| Letters to be deleted | Examples of deletion indicators |
|:---:|:---:|
| First letter | decapitated, heads off, scratching head, defaced, needing no introduction |
| Last letter | mostly, almost, unfinished, cut short, scratching bottom, endless, detailed (as in "de-tailed") |
| First and last letters | unlimited, barely, peeled, shelled, case dismissed |
| Central letters | gutted, emptied, vacated, disheartened, disembowelled |

Here are a few examples taken from _Cryptic Crosswords for Dummies_:

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="wp">Shriek, losing head</span>, to get
        <span class="def">dairy product</span> (5)
    </div>
    <div class="newspaper-cutout-row">
        <span class="wp">Drunken affair, without very loud</span>
        <span class="def">operatic song</span> (4)
    </div>
    <div class="newspaper-cutout-row">
        <span class="wp">Cut short uncontrolled slide</span> to
        <span class="def">go over snow</span> (3)
    </div>
</div>

The first clue states that "shriek" has lost its head --- replacing "shriek" with its synonym SCREAM, we can removing its heading letter S to get CREAM, a dairy product.

In the second clue, we are told that AFFAIR is drunken and should be anagrammed after the removal of "very loud", which is represented in musical notation as FF. Thus, we take out FF from AFFAIR to get AAIR, an anagram of the answer ARIA.

In the final clue, an "uncontrolled slide" can be represented by SKID. Cutting SKID short, we remove its ultimate letter to get SKI, which means to go over snow.


### Homophones, voices and Spoonerisms

Homophones are words that sound alike, e.g. ALLOWED and ALOUD. Cryptic crossword clues relying on these auditory coincidences are marked with homophone indicators, which are often related to the sense of hearing, verbal communication, or audio transmission. Examples from [this Quick Cryptic](https://www.theguardian.com/crosswords/quick-cryptic/23) include the following.

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="wp">We hear this resembles a rabbit</span>'s
        <span class="def">fur</span> (4)
    </div>
    <div class="newspaper-cutout-row">
        <span class="def">Boy</span>
        <span class="wp">star on the radio</span> (3)
    </div>
</div>

The first clue has the answer HAIR, which when heard resembles a HARE; the second clue gives the solution SON, which when broadcast on the radio may sound a bit like the SUN.

Perhaps surprisingly, even homophone indicators can be used together with other clue types. Take the clue below as an example.

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="wp">A baron puts to sea, we're told</span>,
        <span class="def">goes down by rock</span> (7)
    </div>
</div>

The word "baron" can be abbreviated as [B](https://en.wiktionary.org/wiki/B.), and prefixing this with the letter A results in AB. Since the phrase "puts to sea" is a paraphrasing of "sails", the part before the comma essentially translates to AB-SAILS, which when "told" verbally is pronounced the same as ABSEILS, defined here as "goes down by rock".

Like homophone clues, voice clues are constructed and deciphered based on the proununciation of various words and phrases. In addition to this, voice clues also reference the way different people are known to speak, as exemplified by this clue from [a Quick Cryptic](https://www.theguardian.com/crosswords/quick-cryptic/10){:target=_blank}.

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="wp">Cockney's bald</span> and
        <span class="def">stuffy</span> (7)
    </div>
</div>

In this clue, the word "bald" means the same thing as HAIRLESS, which when said with a Cockney accent --- dropping our /h/ sounds --- renders itself homophonous to AIRLESS, another word for "stuffy".

A particularly noteworthy type of voice clue is known as Spoonerisms. Named after Reverend Spooner, Spoonerisms refer to when the leading consonants of two words or syllables are accidentally swapped, resulting in a different and sometimes humorous phrase. For example, a "crushing blow" may be mispronounced as a "blushing crow", while "well-oiled bicycles" may be mistaken as "well-boiled icicles". The same pattern is leveraged in this clue from [a Guardian Cryptic](https://www.theguardian.com/crosswords/cryptic/29680):

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="wp">Spooner's important alarm</span> for
        <span class="def">apiarist</span> (9)
    </div>
</div>

where the answer BEEKEEPER may feasibly be misinterpreted by Reverend Spooner as a KEY BEEPER.







### &Lit and cryptic definitions

Near the start of this post, we stipulated that it must be possible to split any cryptic crossword clue into two halves: one with the definition and the other the wordplay. While this is true for the majority of clue types, there are two exceptions to this rule, which we will introduce below.

In cryptic crossword jargon, the term "&lit" stands for "and literally (so)". In an &lit clue, the entire clue acts simultaneously as the definition and the wordplay:

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="andlit">Primarily ostentatious soirée comprising actors' rambling speeches?</span> (6)
    </div>
</div>

As this is an &lit clue, we know that not only will the answer arise from the wordplay "primarily ostentatious soirée comprising actors' rambling speeches", but it will also semantically refer to a primarily ostentatious soirée that comprises rambling speeches delivered by actors. Indeed, if we treat "primarily" as an extraction indicator and observe the initial letters of each subsequent word, we get OSCARS --- a primarily ostentatious soirée infamous for actors' rambling speeches.

[This Guardian Cryptic](https://www.theguardian.com/crosswords/cryptic/28098){:target=_blank} features the &lit clue adapted below:

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="andlit">Ooh, I love purchasing, initially getting cash out!</span> (10)
    </div>
</div>

To parse this clue, we replace "love purchasing, intially" with the initals LP. Thus, if the letters OOH I LP receive CASH and are "out", they can be anagrammed to become SHOPAHOLIC, of which the entire clue is a fitting description.

The final clue type is called a cryptic definition. A cryptic definition clue is practically identical to a vanilla crossword clue, but with a whole load of extra trickiness, misdirection and punning thrown in. Have a look of these clues, which are oddly selected from but two [Guardian](https://www.theguardian.com/crosswords/cryptic/23980){:target=_blank} [Cryptics](https://www.theguardian.com/crosswords/cryptic/24648){:target=_blank}.

<div class="newspaper-cutout">
    <div class="newspaper-cutout-row">
        <span class="def">They're up for approval</span> (6)
    </div>
    <div class="newspaper-cutout-row">
        <span class="def">Puzzle with many twists and turns involved</span> (6,4)
    </div>
    <div class="newspaper-cutout-row">
        <span class="def">Leaves collected here for potting</span> (6)
    </div>
    <div class="newspaper-cutout-row">
        <span class="def">His work is bound to receive public attention</span> (6)
    </div>
    <div class="newspaper-cutout-row">
        <span class="def">Dramatic confidence?</span> (5,7)
    </div>
</div>

Their answers:

- THUMBS, which may be up to gesture approval;
- RUBIK'S CUBE, a puzzle that literally requires dozens of twists and turns;
- TEABAG, in which tea leaves are sealed for use in a teapot;
- AUTHOR, whose work must be [bound](https://en.wikipedia.org/wiki/Bookbinding) after being printed; and
- STAGE WHISPER, a theatrical ("dramatic") representation of someone spilling the beans ("confidence").

Both &lit and cryptic definition clues are commonly (but not necessarily) indicated with a question and/or exclamation mark.



### Conclusion

This brings us to the end of the guide! Below, I've listed a bunch of resources that I found (and still find) useful for learning how to solve cryptic crossword clues.


- **For reference...**<br> A [Cryptic Clue Guide](https://puzzling.stackexchange.com/questions/45984/cryptic-clue-guide) from Puzzling Stack Exchange: "What exactly is a cryptic crossword clue, and how do I write one?"

- **For some fun daily practice...**<br> [Minute Cryptic](https://www.minutecryptic.com), a Wordle-esque website and app that publishes new and original cryptic crossword clues every day along with explanatory YouTube videos.

- **For the real deal...**<br> Free online cryptic crosswords published by The Guardian. Crosswords are classified into several categories, namely (in increasing level of difficulty) [Quick Cryptic](https://www.theguardian.com/crosswords/series/quick-cryptic), [Everyman](https://www.theguardian.com/crosswords/series/everyman)\*, [Quiptic](https://www.theguardian.com/crosswords/series/quiptic), [Cryptic](https://www.theguardian.com/crosswords/series/cryptic), [Prize](https://www.theguardian.com/crosswords/series/prize) and [Genius](https://www.theguardian.com/crosswords/series/genius).

\*Note: The Guardian's Everyman collection includes only crosswords published [before late April 2025](https://www.theguardian.com/crosswords/crossword-blog/2025/apr/21/where-can-i-find-the-azed-everyman-and-speedy-crosswords). Newer ones are available on [The Observer's website](https://observer.co.uk/crossword).

And just for fun, I've set my own tiny cryptic crossword below, with a few parsing hints to guide you through each clue. Good luck!

Oh, and the clue shown in the description of this post has the answer <span class="spoiler">PUNISH</span>. The definition is <span class="spoiler">"sentence"</span> while the wordplay uses the <span class="spoiler">charades PUN + ISH</span>.

<hr style="margin-top: 3em; margin-bottom: 3em;">

<div class="grid-and-clue" style="margin-top: 50px; margin-bottom: 50px;">
    <div class="crossword-grid">
    GRATED
    .I.R.O
    ACTING
    SHAMES
    K.C.S.
    SMOOTH
    </div>
    <!--  -->
    <div class="clue-list" style="overflow-y: scroll;" id="hinted-clues">
        <p>
            <b>Across</b><br>
            <ol>
                <li value=1 dir=a><span class="wp">Lunatic gutted after &#8220;The Dumping</span> <span class="def">Ground&#8221;</span> (6)</li>
                <li value=5 dir=a><span class="def">Playing a role</span> in <span class="wp">proceeding</span> (6)</li>
                <li value=8 dir=a><span class="def">Humiliates</span> <span class="wp">that woman eating a medium steak initially</span> (6)</li>
                <li value=9 dir=a><span class="wp">On reflection, hard to love leading characters in &#8220;Midsummer&#8221; scene</span>: <span class="def">&#8220;The course of true love never ran like this...&#8221;</span> (6)</li>
            </ol>
        </p>
        <p>
            <b>Down</b><br>
            <ol>
                <li value=2 dir=d><span class="def">With immense fortune</span> and <span class="wp">ultimate power, one acquires copyright tied to Beethoven's Fifth</span> (4)</li>
                <li value=3 dir=d><span class="def">Use scissors</span> <span class="wp">to ruin my odds</span> (4)</li>
                <li value=4 dir=d><span class="def">Puppies'</span> <span class="wp">tails</span> (4)</li>
                <li value=5 dir=d><span class="def">Questions</span> about <span class="wp">a second occasional kiss</span> (4)</li>
                <li value=6 dir=d><span class="wp">Old feline comes back</span> for <span class="def">snack</span> (4)</li>
                <li value=7 dir=d><span class="wp">Part of someone's transformative</span> <span class="def">birdhouse</span> (4)</li>
            </ol>
        </p>
    </div>
    <div class="hint-box">
        <div class="newspaper-cutout" style="width: 80%; padding-left: 10%; padding-right: 10%">
            <div>
                <div id="stuck-message" style="text-align: center; display: block;">
                    <b>Stuck?</b><br>
                    Click on a clue for help!
                </div>
                <div id="hinted-clue" style="text-align: center; display: none;"></div>
                <div id="hint-desc" style="margin-top: 20px; display: none;"></div>
                <button id="close-hint-button" style="display: none;">Close</button>
            </div>
        </div>
    </div>
</div>




<link rel="stylesheet" href="{{ site.baseurl }}/assets/2025-06-14/style.css">
<link rel="stylesheet" href="{{ site.baseurl }}/assets/2025-06-14/cw-grid-style.css">
<script src="{{ site.baseurl }}/assets/2025-06-14/index.js"></script>