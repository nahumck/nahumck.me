---
title: Vibe Coding My Way Out of Markdown Tedium
permalink: vibe-coding-my-way-out-of-markdown-tedium/index.html
date: "2026-01-29"
layout: post
tags: 
  - "Drafts"
---
Life as a parent gets busy. Your focus shifts, your free time changes, and your priorities are no longer yours to decide. The things you want to do get quickly replaced by all the things you have to do on top of the things you had to do already. It's normal and completely fine. It just means that sometimes you're late to the party on things… 

Most that know me understand that I have a watch band ~~problem~~ collection. I have a Markdown-formatted table in [Drafts](https://itunes.apple.com/us/app/drafts-capture-act/id1236254471?mt=8&uo=4&at=1001l4VZ) that I use to keep this up-to-date for my site. When I've added a band or five, I have to enter in the information, renumber the entire list, and there's a bunch of friction that takes time to manage it. I'm decently proficient in JavaScript, but not enough to have this automatically handled for me. 

Enter [Claude](https://claude.ai/).

I've heard the term "vibe coding", and although I hate the term, I get why this is a wonderful thing. What would have taken me hours to do on my own through painstaking learning and research took me about 15 minutes to create using Claude. 

I started with a simple prompt to have it write me a JavaScript function to format a Markdown table, renumber the lines, etc. But then I remembered that it can be smarter by telling it that what I really wanted was a Drafts Action script, so that I can just copy and paste it into the step in Drafts, and not have to do any additional work with the variables. I almost exclusively use the [Sometype Mono](https://monospacedfont.com/) font when using Drafts, so I want it to look visually good in the editor when I see it, as well as be able to use it on my site. I asked to have additional criteria added to make sure it only formatted the Markdown table and nothing else, automatically padded columns correctly, looking at the size of each line to make sure it's the same, and then process the table accordingly. 

After a little back and forth to make it perfect, I ended up getting the code to create my [Renumber Watch Band Collection](https://directory.getdrafts.com/a/23s) action. I know that this is a small thing, but it had been bothering me for months that I had to do this manually. I finally had a half hour to sit with my thoughts and simply tell an assistant "this is what I need from you". I'm a fan of this style of AI that assists me to make my life easier and makes some tasks less tedious.
