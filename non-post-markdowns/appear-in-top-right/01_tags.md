---
layout: page
title: Tags
permalink: /tags/
appear-in-top-right: true
---

Here is a list of posts on this site, classified by tags.

<div style="margin-bottom: 1em">
{% include custom/hline.html %}
</div>

{% assign sitetags = site.tags | sort %}

{%- for sitetag in sitetags -%}

{% assign tag_name = sitetag[0] %}
{% assign posts_for_tag = sitetag[1] %}

<div style="margin-bottom: 1.75em;">

<div id="anchor-tag-{{tag_name}}"></div>
{% include custom/tag.html tag=tag_name with_link=false %}

<div style="margin-top: 0.4em">
<ul>
{%- for post in posts_for_tag -%}
<li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{%- endfor -%}
</ul>

<div style="margin-bottom: 30px;"></div>

{%- endfor -%}