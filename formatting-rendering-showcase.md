---
title: "Blog Writing Reference"
toc: true
attribution: site author
permalink: /:basename/
date: 2026-01-20
blog: true
topic: Writing & Tooling
read_time: 6 min read
summary: "A practical markdown reference for writing technical blog posts with consistent formatting."
---

Use this page as a copy/paste reference when writing posts.

## Quick post template

```markdown
---
title: "Your post title"
toc: true
attribution: your name
permalink: /:basename/
---

One-sentence intro.

## Section heading

Main content here.
```

## Headings and inline styles

```markdown
# Page title (usually from front matter)
## Main section
### Subsection

Use **bold**, *italic*, and ***bold italic***.
Use inline code like `gpio_set_output(pin)`.
Link to internal pages: [Home](/).
Link to external pages: [GitHub](https://github.com/).
```

## Lists

```markdown
- First item
- Second item
  - Nested item
- Third item

1. First step
2. Second step
3. Third step
```

## Code blocks

Use a language tag after the opening backticks for syntax highlighting.

```markdown
```c
#include "gpio.h"

void blink(int pin) {
    gpio_set_output(pin);
}
```

```bash
make clean && make
mytools/mango-run blink.bin
```
```

## Callout boxes

Use this pattern:

```markdown
> **Title:** Callout content.
{: .callout-info}
```

Available callout classes on this site:

- `.callout-info`
- `.callout-primary`
- `.callout-success`
- `.callout-warning`
- `.callout-danger`
- `.callout-question`

Examples:

> **Info:** Helpful context or background.
{: .callout-info}

> **Warning:** Highlight pitfalls or gotchas.
{: .callout-warning}

> **Question:** Prompt discussion or reflection.
{: .callout-question}

## Blockquotes

```markdown
> Bare-metal programming means you are in full control of the machine.
```

> Bare-metal programming means you are in full control of the machine.

## Tables

```markdown
| Item | Example | Notes |
|---|---|---|
| Inline code | `` `printf` `` | Monospace text |
| Link | `[Labs](/labs/)` | Internal link |
| Bold | `**important**` | Emphasis |
```

| Item | Example | Notes |
|---|---|---|
| Inline code | `` `printf` `` | Monospace text |
| Link | `[Home](/)` | Internal link |
| Bold | `**important**` | Emphasis |

## Images

```markdown
![Short alt text](/_assets/img/cats.jpg)
```

![Short alt text](/_assets/img/cats.jpg)

## Horizontal rule

```markdown
---
```

---

## Math

```markdown
Inline math: $2^8 = 256$.

Display math:
$$
\sum_{i=0}^{n-1} 2^i = 2^n - 1
$$
```

Inline math: $2^8 = 256$.

Display math:

$$
\sum_{i=0}^{n-1} 2^i = 2^n - 1
$$

## Footnotes

```markdown
Footnotes are supported for references.[^note]

[^note]: This is the footnote text.
```

Footnotes are supported for references.[^note]

[^note]: This is the footnote text.

## Writing checklist

- Use a clear title and short intro.
- Keep section headings descriptive.
- Prefer short paragraphs and lists.
- Add alt text for every image.
- Use callouts only for important highlights.
- Check all links before publishing.

