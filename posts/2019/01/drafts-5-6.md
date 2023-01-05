---
title: "Drafts 5.6"
date: "2019-01-23"
categories: 
  - "apps"
tags: 
  - "drafts"
  - "ios_ipados"
  - "review"
permalink: "drafts-5-6/index.html"
layout: "post"
---

[![](/images/D56-Hero-1024x743.png)](/images/D56-Hero.png)

Last week, [Drafts](https://itunes.apple.com/us/app/drafts-5-capture-act/id1236254471?mt=8&uo=4&at=1001l4VZ) released version [5.6](https://forums.getdrafts.com/t/drafts-5-6-0-released/3604). While it is not as big as some of the other releases before it, it does bring some important enhancements to the app.

### Adding Shortcuts

It is now easier than ever to add a specific shortcut to run in Drafts. A new interface is presented when adding a shortcut, as you can see by installing this [example shortcut](https://www.icloud.com/shortcuts/bbcafbdca9324a8d8a8d4306de8121bb) and selecting a shortcut to add. It prompts you for a few different items for running the shortcut, and is a better way of implementing them via the URL scheme. I feel that this method is a bit more user-friendly now that a shortcut has been written to quickly add them, and requires no formal coding knowledge.

### Workspace Changes

Workspaces have been available since [version 5.0 dropped back in April 2018](https://www.macstories.net/reviews/drafts-5-the-macstories-review/). It is the single biggest improvement to Drafts, providing users with an infinite number of filtered views of the draft list. Extending it further, you can apply action groups and extended keyboards to a workspace and have what I coined as a module. In [Drafts 5.2](https://www.nahumck.me/drafts-5-2-the-navigation-update/), the script and capability of automatically making this possible was implemented. In this new version, it is now more accessible to the non-scripting user.

![](/images/D56-Workspace-Improvements-1024x654.png)

Within the Workspaces menu, you can choose to load in action group or extended keyboard for each of the different workspaces you create. This does sync across devices, so for most users, this is a better way to load module with a single tap without having to know JavaScript. You can also now load a workspace to a specific tab, saving a few taps if needed. However, I personally won't be using this as my setup involves loading workspaces differently based on the device type (as I laid out in my earlier Drafts piece).

### Post and File Management Improvements

Drafts uses CloudKit to sync data to the cloud. There are more aspects of the drafts which are stored there, like location, tags, etc. which don't tie in nicely to syncing to an iCloud Drive folder. You can, however, use different actions to save specific drafts to other services like iCloud Drive, Dropbox, Box, or OneDrive. Previously in Drafts, the idea of keeping things in the app was not always something you would want to do: you might want to save it to Apple Notes via a share action, or send it to one of a handful of other services as a plain text file or Markdown file.

For the most part, I keep all of my writing in Drafts. Over the past year, I have more in that module than I would like to admit. And I feel some stress of keeping all of these posts in the draft list. With the new features, I have several different ways of handling this. First, I could simply mark the drafts which I'm actively working on and load the writing module to the flagged tab; this is easy enough to do in the workspace settings, and would quickly satisfy the need. But the file management capabilities are something else that I wanted to explore.

What I ended up arriving at was this: I can keep one or two active drafts in the list, and save the rest to a specific folder in iCloud Drive. Once I'm ready to work on another one, I can run an action and be presented with a list of titles to choose from; the action would then load the contents of the draft into my draft list with a specific tag, and I can start writing on it again. When I'm ready to publish, I take that final draft and move it in to my posted folder to file it away. This is all possible thanks to the `FileManager` [script object methods](http://reference.getdrafts.com/objects/FileManager.html).

I first borrowed from some of my previous scripts to ensure that I was saving things with the correct title. To save the file with that name, I used a file action step, set the folder location to `/Draft Posts/` and set the content as `[[draft]]`. Once [this action](https://actions.getdrafts.com/a/1SZ) is run, the draft is then deleted from my draft list to keep it uncluttered.

[![](/images/D56-Select-File-Action-1024x743.png)](/images/D56-Select-File-Action.png)

The [next action](https://actions.getdrafts.com/a/1SY) was much more difficult to create. Within the updated objects, I can pull out the path locations to files located in a specified folder. With a little script magic, I can turn those file paths into readable display names to choose from in a prompt; this will work with all of the files in the directory. Once I have the selected name, I can load that file into Drafts, tag it with my `writing` tag which automatically places the file into my Writing module, and I can start writing; I also used an "Include Action" step to load my Writing module to bring up my entire writing environment with one tap.

The last action is for publishing my post. I modified my existing [standard](https://actions.getdrafts.com/a/1O1) and [linked](https://actions.getdrafts.com/a/1O2) publishing actions – which I first introduced on [MacStories for Drafts 5.4](https://www.macstories.net/reviews/drafts-5-4-siri-shortcuts-wordpress-and-more/) – to save the file in a new way. First, I use the scripting to save the file one last time to the `/Draft Posts/` folder location where I keep the draft posts, then _move_ it to the `/Posts/` folder where I keep my final posts as `.md` files. This happens at the end of the action after everything is posted. Why do this? It allows me to take the one true copy that I finally saved in my draft posts and then move it into the final location. I don't have to keep the files in multiple places and wonder which one is correct; instead, I just moved out the finished product.

I have also updated the HTML Preview step in my Post to WordPress actions above to include the new rendering options. With this update, Drafts allows the user to specify the rendering of text. Previously, only Markdown was supported in this fashion. But now, you can specify MultiMarkdown or Github–flavored Markdown, saving a bunch of script steps in the process. I updated WordPress actions with `%%multimarkdown|text%%` for the HTML preview, as well as improved the scripting to commit the Critic Markup changes to pass MultiMarkdown to WordPress, which you can find at the links above. And speaking of Critic Markup, a new highlight syntax color has been added. It provides a bit more visual difference when looking at all of your credit markup notations.

I'm really enjoying this update, as it's helping me reduce my mental stress by allowing me to manage my files in a better way. Rather than keep all of these possible post ideas within my draft list and cause me more stress. And if you're reading this and follow some of my [other work](http://podcast.fundamentallybroken.men), you know already how much I hate clutter…
