---
title: "Using Action Sets in Drafts"
date: "2016-01-21"
categories: 
  - "apps"
tags: 
  - "drafts"
  - "ios_ipados"
  - "workflows"
permalink: "using-action-sets-drafts/index.html"
layout: "post"
---

![Hero Image](/images/Drafts-Action-Set-Hero.png)

[Drafts](https://geo.itunes.apple.com/us/app/drafts-4-quickly-capture-notes/id905337691?at=1001l4VZ&ct=nahumck_me "Drafts") has long been in my dock. It is the essential start for almost all of my text: messages, emails, Tweets, notes, post ideas, etc. all start there, and go some where else thanks to the power behind the app’s simplistic interface.

The other day, Gabe over at Macdrifter wrote a great post, [Getting Drafts Right for 2016](http://www.macdrifter.com/2016/01/getting-drafts-right-for-2016.html), in which he reviews his setup for the app; I highly suggest you read this post because it gives some very helpful tips when getting started with Drafts (that I won’t be covering here).

Now that I’ve been using the app for a while, I have a few tricks of my own. One of the items listed in Gabe’s post is about not letting your actions pile up.

> “Part of the problem I created for myself was an overwhelming number of conduits. My solution was to cut way back to only the actions I use regularly or that do things that the iOS 9 share sheet doesn’t do.”

I must admit, I had that problem for a while too. And while I haven’t gone the same route to reduce the number of actions, I have found something that worked for me — using a method to shrink the Action Lists, while still having a large number of actions available.

### Action Sets

Enter Action Sets.[^1] I define an action set as a single Drafts action that presents a menu of actions to choose from, then runs that selected action with your current Draft.

The developer, [AgileTortoise](http://www.agiletortoise.com), originally posted an action called “[Select Action](http://drafts4-actions.agiletortoise.com/a/112)” where he demonstrates the concept with 2 built-in actions how this can be used. It is a simple 2-step action:

1. Prompt:  
    The spot where you list the actions you want to be grouped into a set.
    
2. URL: `drafts4://x-callback-url/open?uuid=[[uuid]]&action=[[prompt_button]]`
    

![Select Action Set](/images/Select-Action-Set.png)

At the time, I didn’t think much of it. But when I started realizing the power this had to clear up my action lists, I immediately started grouping my actions together in this way. The first time this started was with [Fantastical](https://geo.itunes.apple.com/us/app/fantastical-2-calendar-reminders/id718043190?at=1001l4VZ&ct=nahumck_me). I had 6 actions that I used with the app:[^2]

1. [Event](http://drafts4-actions.agiletortoise.com/a/1Om)
2. [Events](http://drafts4-actions.agiletortoise.com/a/1Or)
3. [Quick Events](http://drafts4-actions.agiletortoise.com/a/1Os)
4. [Reminder](http://drafts4-actions.agiletortoise.com/a/1Pb)
5. [Reminders](http://drafts4-actions.agiletortoise.com/a/1Xv)
6. [Quick Reminders](http://drafts4-actions.agiletortoise.com/a/1Xw)

Event and Reminder are single items, and require the user to hit “Add” in the top right. Events and Reminders also require the user input, but the actions call each line of the Draft instead of a single line. Quick Events and Quick Reminders do not require user intervention, and call each line until there are none left; this is especially handy for when you need to input many dates, such as importing your company holiday schedule. These are all great actions, but it took up 6 lines of my Drafts space.

I made one Action Set called “[Fantastical…](https://drafts4-actions.agiletortoise.com/a/1eb)”. One line, but with 6 different inputs. Later, I modified it to only have the 3 events-based actions, because I do not use Reminders integration now for [2Do](https://geo.itunes.apple.com/us/app/2do/id303656546?at=1001l4VZ&ct=nahumck_me), my task management app of choice.

![Fantastical Action Set](/images/Fantastical-Action-Set.png)

### Action Set Keys

When you have finally created the Action Sets you want, and if you run them frequently, consider making an [Action Keys](https://agiletortoise.zendesk.com/hc/en-us/articles/202865034-Using-the-Enhanced-Keyboard) for your Enhanced Keyboard row. If you assign an Action Set to a Key, you will be able to bring up the Action Set menu quickly for manipulation.

![Clipboard Action Key](/images/Clipboard-Action-Key.png)

This is especially powerful for users that have an external keyboard that they use with their iOS device. I’ve been using [one](https://www.nahumck.me/things-i-like-volume-1/) for a while, and I don’t think I could ever go back. For example, I use `⌘+shift+C` for my “Clipboard” Action Set, which gives me a number of actions to use and manipulate text with the system clipboard. This gives me more power than the traditional `⌘+C` for copy. They key is hidden from the Enhanced Keyboard, which de-clutters the row.

I currently have 4 Action Lists in my current Drafts setup. I don’t have Action Keys set for most of them yet, but I’m working towards having them for all of my most-used Actions and Action Sets.

![Action Lists](/images/Drafts-Action-Lists.png)

If you need another reason to set up Action Lists & Sets: look at [this picture](https://www.nahumck.me/wp-content/uploads/2016/01/Drafts-Mega-Action-List.png) for the individual actions I have in Drafts in one long list. (Warning: it’s a long list.) It’s a lot to scroll through, and I much prefer the lists I have set up.

The application of the Action Set is just one more example of how the most simple looking text editors available is really one of the most powerful automation apps on iOS.

Drafts 4 is a universal app and is currently 50% off in the App Store for [$4.99](https://geo.itunes.apple.com/us/app/drafts-4-quickly-capture-notes/id905337691?at=1001l4VZ&ct=nahumck_me "Drafts").

[^1]: at least that’s what I’m calling them

[^2]: I did change the names, but included links to the original actions for your use.
