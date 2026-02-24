# EoTD (Explorings of The Deep)

A Jekyll-powered technical blog by wolgwang.

- Site title: **EoTD**
- Description: **wolgwang's Explorings of The Deep**
- Production URL: <https://eotd-wolgwang.vercel.app>

## What this repository contains

This repo contains the full source for the blog:

- Long-form posts/pages in Markdown in `blogs`
- Jekyll layouts/includes in `_layouts/` and `_includes/`
- Theme/style sources in `_sass/`, `_assets/style/`, and `_assets/js/`
- Build output in `_site/` (generated)

## Tech stack

- **Jekyll** (static site generator)
- **Kramdown + Rouge** (Markdown parsing + syntax highlighting)
- **Bundler/RubyGems** for dependency management
- Jekyll plugins configured in `_config.yml` and `Gemfile`

## Project structure

```text
.
├── _config.yml              # Site and plugin configuration
├── _layouts/                # Page templates
├── _includes/               # Reusable partials (header, footer, logo)
├── _sass/                   # Sass sources and Bootstrap-based style layers
├── _assets/                 # Fonts, images, JS, and CSS assets
├── _site/                   # Generated static site output
├── website/home.md          # Home page source
└── *.md or subfolders*      # Blog pages/posts in Markdown (e.g. `theory-of-computation/`)
```

## Local development

### 1) Prerequisites

Install Ruby and build tools (Ubuntu/Debian):

```bash
sudo apt update
sudo apt install -y ruby-full build-essential zlib1g-dev
gem install bundler
```

### 2) Install dependencies

From the repository root:

```bash
bundle install
```

### 3) Run the blog locally

```bash
bundle exec jekyll serve
```

Default local URLs:

- <http://127.0.0.1:4000>
- <http://localhost:4000>

Useful variants:

```bash
# Enable live reload
bundle exec jekyll serve --livereload

# Use a custom port
bundle exec jekyll serve --port 8080
```

### 4) Build static output

```bash
bundle exec jekyll build
```

Generated files are written to `_site/`.

## Writing and editing content

- Add or edit Markdown files in the repository root or relevant content folders (posts can be grouped in topic folders).
- Use front matter at the top of each Markdown file to control layout/metadata.
- Default page layout is configured in `_config.yml` (`layout: default` for pages).
- Update shared UI elements through `_includes/` and page wrappers in `_layouts/`.

## Notes

- `README.md` is excluded from published site output via `_config.yml`.
- `theme: null` is used, with `remote_theme` and local Sass/custom assets for styling.
- `webrick` is included for local Ruby 3/Jekyll serving compatibility.
- This site is inspired by the Stanford course websites for **CS231**, **CS103**, and **CS107**.
