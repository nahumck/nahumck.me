---
title: "Drafts TapCellar"
date: "2016-12-31"
categories: 
  - "apps"
tags: 
  - "drafts"
  - "ios_ipados"
  - "journal"
  - "shortcuts"
permalink: "drafts-tapcellar/index.html"
layout: "post"
---

I don't often take requests for creating actions or workflows. If I did that for everyone, I wouldn't be able to get anything done at all. But, there are times that I have a good friend in need, and I'm willing to help them in any way that I can.

[Jeff](https://twitter.com/jeffhunsberger "Jeff Hunsberger on Twitter"), one-half of the team behind TapCellar — [pour one out](http://www.macdrifter.com/2016/10/the-end-for-tapcellar.html "The End for TapCellar - Macdrifter.com") — and the [Nerds on Draft](http://www.nerdsondraft.com/) podcast, asked me a few questions one day about the possibility of re-creating the basic information from TapCellar, but in a text document format. There were several different fields that he wanted:

- Beer Name
- Beer Style
- Brewery Name
- Grade
- ABV / IBU
- Notes

We went back and forth on a few different iterations. Then I had a follow-up request from another friend [Nate](https://twitter.com/nateboateng "Nate Boateng on Twitter"). He wondered if it was possible to get the text input or the button that is pressed in a prompt step within Drafts. It took me a little bit to figure out how, but by placing a script after the prompt step, I was able to extract either the button selected _or_ the text passed from the prompt step. I could go on about how useful this is for other multi-step actions, but I'll save that for a different day. You can view the example of just that part [here](http://drafts4-actions.agiletortoise.com/a/1vd "Prompt Input - Drafts Action Directory") if you want experiment.

What I ended up creating was an action containing multiple prompt steps that recreates some of the text fields of [TapCellar](https://drafts4-actions.agiletortoise.com/a/1vo "Drafts TapCellar"), using Drafts and Dropbox.[1](#fn1) If you follow how I set up the action, you can easily add additional prompt steps to further add information you'd like to have. Additionally, I've formatted it the way I like it, and made it so that when the image links are appended, they are at the end of the draft; this can, however, be changed to suit your needs as well.

![](/images/Image-12-30-16-10-50-PM.png)

In addition to creating a draft with the information, I can use an [action](https://drafts4-actions.agiletortoise.com/a/1vm "Add Beer Photo(s) - Drafts Action Directory") that I tweaked from my [daily journaling](https://www.nahumck.me/rolling-your-own) that utilizes [Workflow](https://geo.itunes.apple.com/us/app/workflow-powerful-automation/id915249334?mt=8&uo=4&at=1001l4VZ&ct=ntwitter) to take an image, upload it to Dropbox, and save the link into Drafts. [This workflow](https://workflow.is/workflows/093d7e3c77a64c82a00c35426a0065bc "TapCellar • Photo(s)") allows me to add images and keep it all in the same space.[2](#fn2) I can [preview the entry](https://drafts4-actions.agiletortoise.com/a/1vk "Journal Preview - Drafts Action Directory") if I wish in HTML, which will give me the text along with an inline image.

[![](/images/IMG_1244-173x300.jpg)](/images/IMG_1244-e1483238765978.jpg)

I did also work to create a workflow that will do all of this, however, the preview of it is not as good. As a person who uses Drafts every day, I'd prefer using the separate actions. Additionally, if you keep the entries in Drafts and apply a filter, you can search within Drafts for them, rather than having to view them in Dropbox, which won't give you the preview. If you are interested in the workflow I created, you can find it [here](https://workflow.is/workflows/3f7e93ef16904118b87425a95113496a "TapCellar").

I'm sad to see TapCellar go. I'm not a beer guy in the slightest and the app wouldn't have been useful to me, but I like it when people who make great software succeed. It was fun to help my friends re-create part of the system in [Drafts](https://geo.itunes.apple.com/us/app/drafts-quickly-capture-notes/id905337691?mt=8&uo=4&at=1001l4VZ&ct=ntwitter), an app that we all use and love. I hope all of them find it useful going forward.

Cheers, Gents!

1. I use Dropbox for now, but you can use iCloud Drive, Box, or One Drive - any of the systems that Drafts supports. [↩](#ffn1)
2. Note: You'll need to create a folder in Dropbox called `TapCellar`, along with a sub-folder called `Images` for this to work. [↩](#ffn2)
