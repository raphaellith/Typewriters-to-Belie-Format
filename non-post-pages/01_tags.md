---
layout: page
title: Tags
permalink: /tags/
appear-in-top-right: true
---

Each blog post comes with one or more tags indicating the subject or topic to which it pertains.

Click on a tag to see a list of all posts that feature it.

<hr>

{% assign sitetags = site.tags | sort -%}

<div id="tag-list">
  {%- for sitetag in sitetags -%}
    {%- assign tag_name = sitetag[0] -%}
    <span class="clickable-tag" data-tag-name="{{ tag_name }}">
      {% include custom/tag.html tag=tag_name with_link=false %}
    </span>
  {%- endfor -%}
</div>

<div id="tag-posts"></div>

<script src="{{ '/assets/non-post-pages/tags/index.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/assets/non-post-pages/tags/style.css' | relative_url }}">