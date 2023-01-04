---
title: "Making 2Do Lists Better"
date: "2016-07-11"
categories: 
  - "apps"
tags: 
  - "2do"
  - "drafts"
  - "ios_ipados"
permalink: "making-2do-lists-better/index.html"
layout: "post"
---

I’ve recently traveled a few times for personal trips with my family. It’s been really great to get away, and I’ve appreciated the time spent not working or stressing out about my house.[^1]

I specifically made it a point for these trips to focus on the pre-travel things: packing, getting the house ready, and making sure that we left with everything and with no stress.

Normally, I would make a small list in [Drafts](https://geo.itunes.apple.com/us/app/drafts-4-quickly-capture-notes/id905337691?at=1001l4VZ&ct=nahumck_me) of things I needed to pack. I might keep it in Drafts, or I would use a checklist [action](https://drafts4-actions.agiletortoise.com/a/1kN) and [workflow](https://workflow.is/workflows/8a3b4354473e45b9a9485670e0f48763) to move it over to my Travel list in [2Do](https://geo.itunes.apple.com/us/app/2do/id303656546?at=1001l4VZ&ct=nahumck_me).

And while that worked, I really wish I had the new features that come with the release of [2Do v3.8.3](http://www.2doapp.com/little-things/). Now, I can simply copy/paste the list over into the Inbox; keyboard users will love the `⌘C` and `⌘V` functionality. It really makes entering lists a breeze.

When I saw this in the beta, I thought it was awesome. It’s so easy to copy and paste a list of tasks. But what about projects? Those still required some manipulation. But if you use a tab key or several spaces, you can copy and paste projects. **This** is where things get interesting.

The nomenclature needed is simple. If you want tasks to be a part of a project, you simply indent them under the parent project. You can also have multiple projects, or a mix of projects and tasks, like this:[^2]

- Random Task
    - Powerlifting
    - Throw Shoes
- Hire Better Henchman
- Odd Job
    - Be Quick
    - Throw Hats
- Make Better Judgements

One thing I love is automation. So, I suggested to the developer of 2Do that having an automated way of doing this via a URL scheme would be great. And a little bit later, it was in the next beta!

So now I can add projects and tasks even easier from Drafts. Using [this action](https://drafts4-actions.agiletortoise.com/a/1oo) that utilizes this new URL scheme, I can take a task or list of tasks and easily send it to 2Do; by using the `x-success` parameter, I can even come right back to Drafts in less than a second.

![](/images/Paste-2Do-Example.jpeg)

This can even be expanded to take a large list and enter it in as projects/tasks all at once. One time when my dad was visiting, he brought his hand-written checklist for travel that he had put together over years; it’s a list of things that he’s likely forgotten at one point or another on a trip.

I formatted the list using the new paste URL scheme syntax, and entered into a clipboard step. The power of the clipboard action step is that you can have a multitude of text in there in addition to what is in your draft. If I have miscellaneous things that I _know_ I will need for the trip, I make sure add each one on a line, and indent them.

At the end of the clipboard action step text, I added a “Misc” line, with the `[[draft]]` tag indented. This will take the draft and add it to the Misc list, and pass it to the URL step. I added the same URL scheme as above, but added the optional `forList` variable and set that to “Travel”. I would have thought about doing something like this in [Workflow](https://geo.itunes.apple.com/us/app/workflow-powerful-automation/id915249334?at=1001l4VZ&ct=nahumck_me),[\[3\]](#fn-3 "see footnote") but now entering in my [pre-travel checklist](https://drafts4-actions.agiletortoise.com/a/1op) is a breeze and takes almost no time at all.

![](/images/2Do-Travel-Checklists.jpeg)

* * *

**Update:** [Michael](http://twitter.com/multisonic) _brilliantly_ took my action and [forked it](http://drafts4-actions.agiletortoise.com/a/1oy). This allows for multiple instances of the packing list, and for you to identify a trip. You could even label it with the airport name you’re going to, for a short indicator. I’ve installed this one and deleted my old one.

* * *

For me, traveling has been just one thing made a little easier with these simple tools. With a little modification here and there, you can turn these same methodologies in to a template for other things.

Repeating work projects, podcast templates, or other lists can be moved into 2Do with ease. You could even take a list of things that a user sends to you for improvements to your app that they would like to see, and copy/paste them in to your development list.[\[4\]](#fn-4 "see footnote")

In the future, I’d really like to see an update to the Email 2Do functionality to add larger lists, complete with tags, due and start dates, etc. This would allow for not only checklists/projects/tasks, but even potentially allow you to [move your thoughts to 2Do](https://www.nahumck.me/move-your-thoughts-to-2do) in one single step. Now _**that’s**_ some serious automation power.

The little additions in v3.8.3 have made entering projects and tasks so much easier. The beta had only been available for a few days, and it quickly made a huge impact on my day-to-day life. I’m thankful that one of the apps I rely on is getting better with updates, has a developer who listens, and has a ton of other things coming. I’m really excited for the coming months and what’s in store for 2Do.

_2Do is [available on the App Store for $14.99](https://itunes.apple.com/us/app/2do/id303656546?at=1001l4VZ&ct=nahumck_me)._

* * *

1. Who am I kidding — the house _always_ stresses me out. [ ↩](#fnref-1 "return to article")
2. You can change these to checklists quickly if you wanted within 2Do. [ ↩](#fnref-2 "return to article")
3. I did actually do this a couple of days before the beta hit. The workflow ran for a long time. I deprecated my own stuff, and happily so. [ ↩](#fnref-3 "return to article")
4. Not that I would have ever sent something like that for a certain task manager I happen to write frequently about. Nope. Not me. [ ↩](#fnref-4 "return to article")
