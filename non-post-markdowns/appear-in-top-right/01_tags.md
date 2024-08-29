---
layout: page
title: Tags
permalink: /tags/
appear-in-top-right: true
---


> ***This website is still in construction --- more stuff coming soon!***

Here is a list of posts on this site, classified by tags.

<div style="margin-bottom: 1em">
{% include custom/hline.html %}
</div>

{%- for sitetag in site.tags -%}

{% assign tag_name = sitetag[0] %}
{% assign posts_for_tag = sitetag[1] %}

<div style="margin-bottom: 1.75em;">

{% include custom/tag.html tag=tag_name %}

<div style="margin-top: 0.4em">
<ul>
{%- for post in posts_for_tag -%}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{%- endfor -%}
</ul>
</div>

</div>

{%- endfor -%}