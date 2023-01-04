---
title: "Fantastically Good Parsers for Drafts"
date: "2018-07-28"
categories: 
  - "apps"
tags: 
  - "drafts"
  - "ios_ipados"
  - "workflows"
permalink: "fantastically-good-parsers-for-drafts/index.html"
layout: "post"
---

One of the small, but powerful for which I use [Drafts](https://itunes.apple.com/us/app/id1236254471?at=1001l4VZ) is sending multiple events to my calendars. And for a long time, I've used the power of Drafts' automation to send those events to my calendar via [Fantastical](https://itunes.apple.com/us/app/id718043190?at=1001l4VZ).

That is until [Peter Davison-Reiber](https://twitter.com/pdavisonreiber) created something amazing.

The great thing about using Fantastical for this purpose is the natural language parsing capabilities: I can simply type out a calendar event the way I need to type it, and it will populate it for me. But thanks to the incredible [scripting capabilities in Drafts 5](http://reference.getdrafts.com/), it is possible to create the date and time parsing aspects – the part where Fantastical excels – and put that right into an action in Drafts.

The end result is as advertised – [fantastically good](https://polymaths.blog/2018/06/fantastically-good-event-parser-for-drafts-5). Not only does it replicate the way I input events into my calendar, but it does it even faster now that it's all native in Drafts. There is no longer a back-and-forth dance with the action to create multiple events. It runs quickly, and I can move along with what I was working on when it is completed. I can also include locations and durations as well. I can even use the calendar shortcut syntax (example: `/w` for my work calendar) with the action. It is a really robust solution.[^1]

And if that wasn't enough, Peter requested the changed in [Drafts 5.3](http://getdrafts.com/changelog) which provide the same parsing for [reminders](https://polymaths.blog/2018/07/fantastically-good-reminder-parser-for-drafts-5) as well, which replaces the other aspect of Fantastical for me. You can include the level of priority denoted by exclamation marks `!` and use the reminder list denoted by the same shortcut syntax as the calendar (`/inbox`).

These two actions are what I had envisioned in the [GTD module of my review](https://www.macstories.net/reviews/drafts-5-the-macstories-review/4/#gtd). This is a case where I knew that they were going to be possible, but I do not have the technical knowledge to create. Initially, I wanted to create one based on some unique syntax, similar to the [Send to Things](http://actions.getdrafts.com/a/1Cc) action. But what Peter has done here exceeded my expectations and is fantastically awesome.

_Cheers Peter!_

[^1]: There is a limitation of creating recurring events via the API. This may come in the future.
