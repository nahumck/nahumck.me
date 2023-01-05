# nahamck.me

## Creating a post

Posts go in `/posts` and need the following at the top:

`a-title.md` - the filename is ignored so you can name it whatever you want

```txt
---
title: A Title
permalink: a-title/index.html
date: 2023-01-05
layout: post
---
```

Same with standalone pages, but set the layout to `base` instead of `post`. Standalone pages don't need `date`.

Footnotes are supported as usual.

### Adding images

- Images go into `posts/images` and can be referenced in posts as `/images/filename.png`.
- Captions are supported with markdown like so: `![](filename.png "this is a caption")`
- Any general images (like logos and such) pop those in `posts/images/site` and reference them `posts/images/site/filename.png`
