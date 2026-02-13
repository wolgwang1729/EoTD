---
permalink: /
title: Home
layout: default
---

{% assign blog_pages = site.pages | where: "blog", true | sort: "date" | reverse %}

<section class="home-hero">
    <p class="home-hero-kicker">CS & Tech Blog</p>
    <h2>Notes, proofs, and practical references for computer science.</h2>
    <p>
        This space collects theory-heavy writeups and technical references.
    </p>
</section>

<section class="home-blog-list" aria-label="Blog posts">
    {% for post in blog_pages %}
    <article class="home-post-card">
        <div class="home-post-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
            {% if post.topic %}<span class="home-meta-sep">•</span><span>{{ post.topic }}</span>{% endif %}
            {% if post.read_time %}<span class="home-meta-sep">•</span><span>{{ post.read_time }}</span>{% endif %}
        </div>

        <h3 class="home-post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>

        {% if post.summary %}
        <p class="home-post-summary">{{ post.summary }}</p>
        {% endif %}

        <p class="home-post-cta"><a href="{{ post.url | relative_url }}">Read article</a></p>
    </article>
    {% endfor %}
</section>
