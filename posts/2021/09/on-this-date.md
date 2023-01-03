---
title: "On This Date"
date: "2021-09-06"
categories: 
  - "apps"
tags: 
  - "drafts"
  - "ios_ipados"
  - "journal"
permalink: "on-this-date/index.html"
layout: "post"
---

Even though Seth and I [no longer have a podcast](https://www.nahumck.me/fully-broken/), we still talk nearly daily about a lot of things. One of them is [Drafts](https://apps.apple.com/us/app/drafts/id1236254471?uo=4&at=1001l4VZ), and how we are using it for small life improvements here and there. Journaling is one of them, and it has become a part of standard practice for me. I don't always have to put something in that's poignant, but I do document quite a bit from time to time. I'm not perfect at it, but I try to do the best that I can. After all, it's for me – so if I don't do well at it, I'm only disappointing myself…  

I journal using Drafts because I trust the system. Using Shortcuts, I run an automation in the morning to create the entry at 4:00am so I never miss a day; this entry is created in a specific format with the `journal` tag, date heading in `yyyy-mm-dd` format, and some weather and date information. I have another automation that runs just before midnight to save it as a nice-looking PDF at night and archive the draft. I still keep all the journal entries in Drafts: they live in my Journal workspace in the archive folder at the top of the drafts list. I keep them just in case I need to search for something later, even though I hardly do it. But there are times where I might want to go back and review them just to see what happened in the past. One of Seth's problems was that he wanted a way to review things that happened on that day throughout the life of his digital journal. We used to use Shortcuts to do this, but that's cumbersome at best. Why use another app when Drafts is perfectly suited for this? Seth ended up finding [this forum tip](https://forums.getdrafts.com/t/tip-use-temporary-workspaces-to-filter-the-draft-list/3030) on creating temporary workspaces, which admittedly was from a while ago (November _2018_). Even though a lot of you think I'm an expert, there's quite a bit of this stuff that I don't know or use.

Using this example, I was able to create an action to show what happened [On This Date](https://actions.getdrafts.com/a/1qP). In simple terms, it searches for all drafts tagged `journal`, then searches for a string of the current date in `mm-dd` format; the action then has some code to let you filter the look of it, then load the workspace. I added a few things because I want to keep my Journal themes applied when creating this temporary workspace.

Let's walk through the code a bit. First, you'll find some configurable variables for your searching. This sets the name of the temporary workspace, the tags you want to include (or omit using `!tag`), and some strings to search.

```
//BEGIN config variables
//setup tags or searches you wish to load...
let name = "On This Date";
let tagFilter = "journal"
const now = new Date()
const date = now.toString("MM-dd")
let queryString = date;
let group = ActionGroup.find("Journal");
app.loadActionGroup(group);
let lTheme = Theme.find("custom", "Journal Light");
let dTheme = Theme.find("custom", "Journal Dark");
//END config variables
```

I also added the action groups I use for journaling as well as my journaling themes as variables, since I want to make sure I use them later in the action. Now that all that is configured, we can set up the workspace:

```
//create workspace
//for other options, see:
//https://reference.getdrafts.com/objects/Workspace.html
let ws = Workspace.create();
ws.name = name;
ws.tagFilter = tagFilter;
ws.queryString = queryString;
ws.setInboxSort("created", true);
ws.loadFolder = "all";
ws.showPreview = false;
ws.showTags = false;
ws.showLastAction = false;
ws.showDate = false;
ws.loadActionBarGroup = group;
ws.loadActionListGroup = group;
//ws.lightTheme = lTheme;
//ws.darkTheme = dTheme;
```

There's a surprising amount of customization. I did find out that there was an undocumented `.showDate` customization that I could take advantage of. The only thing I would like to see added here is `.lightTheme` and `.darkTheme` so that I can set the themes directly with the temporary workspace which would eliminate the need for me to call them using the other methods; maybe those will get added in the future. The last part applies the workspace, shows the draft list, and applies my themes. I appreciated the callout in the original action, so I kept it in there: the workspace is temporary unless you use the `.update()` function, very much akin to a temporary draft to store information.

```
//unless you call `ws.update()`, this ws is temporary
//load this workspace, and display draft list
app.applyWorkspace(ws);
app.showDraftList();

//set the Journal themes
app.lightTheme = lTheme;
app.darkTheme = dTheme;
```

Actions like this can seem like a lot at first, but they are fairly simple enough to manage. This action can bring a lot of awareness and possibly even some joy to your day, looking back on the things you've done in the past. I've also included this in my widgets: I've found that I use it more often this way, and it's a great use of a widget action for Drafts.

* * *

I have to admit, this is the first time in a while that I've done something like this to change some of my workflows. Not because I don't adore Drafts, but because of how life has been going for me (all good things, thankfully). But it makes me wonder: _what else am I missing_? Seems like a great time to go exploring…
