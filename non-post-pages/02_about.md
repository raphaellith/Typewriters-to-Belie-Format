---
layout: page
title: About
permalink: /about/
appear-in-top-right: true
---

<div class="note" id="note-introduction">
  Hi!<br>
  I’m Raphael Li.
</div>

<div class="note" id="note-schools">
  <ul>
    <li>UCL Computer Science 2027</li>
    <li>SJC 2024</li>
  </ul>
</div>

<div class="note" id="note-description">
  This absolute miscellany of a blog is where I rave about random projects and topics in occasionally superfluous detail.
</div>

<div class="note" id="note-topics">
  Topics like:<br>
  <ul>
    <li>programming</li>
    <li>wordplay</li>
    <li>maths</li>
  </ul>
</div>

<div class="note" id="note-tags">
  Each post comes with one or more tags.
  <div style="width: 100%; text-align: center; line-height: 2rem; margin: 1rem auto;">
    {% include custom/tag.html tag="puzzle" with_link=true %}<br>
    {% include custom/tag.html tag="wordplay" with_link=true %}<br>
    {% include custom/tag.html tag="game" with_link=true %}
  </div>
  These tags indicate the subject or topic to which a post pertains.
  Click on a tag to see a list of all posts that feature it.
</div>

<div class="note note-centered" id="note-num-of-posts">
  <b>Number of posts published so far:</b><br>
  {{site.posts.size}}, most of them coherent
</div>

<div class="note note-centered" id="note-num-of-tags">
  <b>Number of tags created:</b><br>
  {{site.tags.size}}
</div>

<div class="note note-centered" id="note-new-posts">
  <b>New posts out every:</b><br>
  <span>Now and then</span>
</div>


<link rel="stylesheet" href="{{ '/assets/non-post-pages/about/style.css' | relative_url }}">
<script src="{{ '/assets/non-post-pages/about/index.js' | relative_url }}"></script>

