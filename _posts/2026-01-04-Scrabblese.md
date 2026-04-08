---
layout: post
title: "Scrabblese"
date: 2026-01-04
description: "Scatter plots of Scrabble play frequency versus language-model probability."
tags:
  - word-games
  - data-visualisation
  - programming
---

This page compares listed and unlisted game words using interactive scatter plots.

<div id="listed-games-chart" class="scrabblese-chart"></div>

<link rel="stylesheet" href="{{ site.baseurl }}/assets/2026-01-04/style.css">

<script>
  window.scrabbleseAssetBase = "{{ site.baseurl }}/assets/2026-01-04";
</script>
<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>
<script src="{{ site.baseurl }}/assets/2026-01-04/index.js"></script>
