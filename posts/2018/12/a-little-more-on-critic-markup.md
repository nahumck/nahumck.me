---
title: "A Little More on Critic Markup"
date: "2018-12-14"
categories: 
  - "apps"
tags: 
  - "drafts"
  - "ios_ipados"
  - "review"
permalink: "a-little-more-on-critic-markup/index.html"
layout: "post"
---

After the release of [Drafts 5.5]("https://www.nahumck.me/drafts-5-5-the-markdown-update/"), I’ve been using Critic Markup even more for the writing I’m doing.[1]("#fn:1" ""see") I hadn’t really used it before now, so leave it to [Drafts]("https://itunes.apple.com/us/app/drafts-5-capture-act/id1236254471?mt=8&uo=4&at=1001l4VZ") to provide me some tools to improve the way in which I write.

In that post about the improvements in Drafts 5.5, I had shared updates to my actions for standard and linked posts. These have been super useful for me. But there are others out there that need to use plain Markdown for their posts. I had a follower pose [this request]("https://twitter.com/urbanbike/status/1072463547999899654") on Twitter, and I decided it would be a small challenge to tackle and share.

Unlike my preview action for my site, I needed to keep the raw Markdown, rather than convert it to HTML. This isn’t something I can do natively using the script objects. So I needed a different way to make this all happen. I first needed to identify the Critic Markup elements:

{++add++}
{>>comment<<}
{--delete--}
{==highlight==}
{~~sub~>substitution~~}

Looking at what I needed to do, it was apparent that I needed to first remove the comment and delete elements completely, then keep the text within the add and highlight elements. The substitution element is a bit more tricky, where I need to delete the first word and keep the second word, while deleting the surround elements. With a little help of RegEx, I came up with the pattern:

`\{>>.*<<\}|\{--.*--\}|\{==|==\}|\{\+\+|\+\+\}|\{~~.*~>|~~\}`

The pipe characters are essentially the “or”, and the rest is to separate the elements. Combining this with elements of JavaScript and the [Drafts Script Reference]("http://reference.getdrafts.com/"), I created an action to [accept critic markup]("https://actions.getdrafts.com/a/1RY") in a new draft, and preserve the existing draft. I did this to show the main RegEx, but it could be used in other ways: this could be a simple script to create a variable for posting; it could be used in conjunction with a step in Shortcuts; or it could even be used when saving out copies of long-form writing.

As the [Drafts community]("https://forums.getdrafts.com") and others create new actions that result in tools for writing, it helps to make Drafts more accessible and adaptable to each user. Writing in it may not be for everyone, but you should try it out to be sure. You might be delighted with what you find.

* * *

1. Yes, it‘s been a while. Yes, I’ve been working on things here and there. More to come later. [ ↩]("#fnref:1" ""return")
