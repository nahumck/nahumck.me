---
title: "The Payoff of Developing Foundational Journaling"
date: "2020-06-17"
categories: 
  - "stories"
tags: 
  - "drafts"
  - "ios_ipados"
  - "journal"
permalink: "pdf-journaling/index.html"
layout: "post"
---

I'm often asked what different uses I have for [Drafts](https://itunes.apple.com/us/app/drafts-5-capture-act/id1236254471?at=1001l4VZ), my everything-text app of choice. I have a variety of core use cases which I use Drafts for every day: even with my [posts](https://www.nahumck.me/?s=Drafts) and [large](https://www.macstories.net/reviews/drafts-5-the-macstories-review/) [reviews](https://www.macstories.net/reviews/drafts-5-4-siri-shortcuts-wordpress-and-more/), journaling is by far the highest volume of content I create.

I've journaled for a while. And while I'm not perfect at doing it and frequently miss days because life sometimes gets in the way, there are some considerations I've made for my particular journaling solution. A few years ago, I [created my own journal solution](https://www.nahumck.me/rolling-your-own/): this utilized Drafts + Dropbox + Workflow. That solution morphed into using [DEVONthink To Go](https://itunes.apple.com/us/app/id395722470?at=1001l4VZ) to save the journal entries, primarily because of security. I was also storing more information there at the time, so it made sense.

Then, in the midst of a pandemic, I started looking at a lot of the things in my life that were just adding to my least favorite thing: clutter. I started wondering where DEVONthink fit into my life. And aside from keeping the rare thing or two in it, I only used it for journaling. So while this solution worked – and worked well – it started to become apparent to me that I no longer wanted this as the solution.

Inevitably, as often these ear worms do, it sent me down a new path. How could I take my journaling solution and simplify it to use the apps and services I want to use so that I can streamline my process, or at the very least, make it easier to use and review later? _Just use a dedicated app_.

I've been down this road. In the past, I used a dedicated journaling app. And while it was good at what it did, there were aspects that didn't appeal to me: security breaches and a subscription price isn't worth it for me.[^1] I can roll my own solution here utilizing apps I already have, and save myself the cost. And, for the most part, I'm not missing a lot from some of the full-featured apps.

Another reason for not doing this is that most use their own syncing solution, which has me uncomfortable. I like to control where my data is going. I trust Apple more than most, even if it's not a fully secure thing.[^2] Having that control feels right to me, and having my data stored in iCloud Drive will be better for me in the long run anyway.

Moving from Dropbox to iCloud Drive has allowed me to purge my subscription to Dropbox entirely, and I increased my 200GB iCloud Drive plan to 1TB. Now I pay far less for the same storage I was using. I still have my Dropbox account and still use the 7GB free that I have, but I don't use it in the same way; it is for shared or temporary files. I don't need to have DEVONthink installed, thus clearing up some clutter from my life.

_So, now on to how I threw this together…_

I start my journal by tapping a shortcut in the widget or tapping the shortcut notification, which in turn kicks of an automation; the automation actually calls the shortcut, so the process of them is the same, but how I get there can be different.[^3] This shortcut asks me a few questions, all of which can be run in the widget and is my preferred method, to start off my journal. From there, it adds my sleep duration and resting heart rate, along with aspects of the weather forecast for the day, all formatted how I like them.

All of that text goes into Drafts, along with the proper tags to make sure it gets into my Journal workspace. This is where all of my thoughts go. I have it broken into a couple of categories: quick hits and entries.[^4] Quick hits are just that: quick little thoughts. I found that adding quick hits has allowed me to just write instead of feeling like I need to say anything profound. Just gets it out of my head and on to the pa… screen. Entries are for more long-form writing. I don't do them every day, but when I do, I like to make sure I know what time of the day I was writing it. Over time, I've even seen patterns just knowing the time of day I was writing, which has been interesting.

For entries or even quick hits, I have several shortcuts which can add data to my journal: weather, location, health, and music. Each of those adds pertinent data to my entries at any given time; they start in Drafts, kick over to Shortcuts, gets the data back, and sends a block of text back into my journal entry. For the health shortcut, it needs to be run from the phone. It is also limited to move ring numbers, as exercise minutes and stand hours aren't available via Shortcuts right now. My hope was to recreate activity rings, but I'll wait on that until more support come to both the Shortcuts and Health apps.

Along with the data, I can add a few other file types that might be relevant for me: audio recordings, photos, and files. These don't save the files into Drafts, which does not support them, but rather provides Markdown-formatted links to the files for use later. I occasionally will do an audio file to capture something that's more nuanced than text. Similarly, I might need to reference a file later and having the option here helps as well. It may seem weird that I have files linked to a journal, but, well… it's _my_ journal.

[![](/images/Journal-and-PDF-SbS-1024x747.png "A journal entry in Drafts on the left, as a PDF in Shortcuts on the right.")](https://www.nahumck.me/wp-content/uploads/2020/06/Journal-and-PDF-SbS.png) 

Now that I have everything in place, rather than save the text, I realized I just want to be able to view the final product after it's completed for the day. For a while, I was saving plain text and viewing it later via a quick look action, but I ultimately just want the rendered journal entry. This sent me down the path to creating a way to save a PDF of the document, along with rendered images and links to the audio recordings and files for later consumption.

This might sound complex, but what it forced me to do was focus on what I really wanted to ever put in a journal, and develop those solutions. Now that they are there, assuming Drafts, Shortcuts, and [Scriptable](https://apps.apple.com/us/app/scriptable/id1405459188?at=1001l4VZ) don't go away, I'll be able to have this solution for a long time. In fact, if improvements come to Shortcuts which provide certain features, I might not even need all three to make this happen.[^5]

The trickiest part of all of this was saving the photos, files, recordings, and the final PDF where I wanted them to go. This is where Scriptable comes in. Scriptable provides the ability to create File Bookmarks, something highlighted by [Federico](https://www.twitter.com/viticci/) in his [FS Bookmarks post](https://www.macstories.net/ios/fs-bookmarks-a-shortcut-to-reopen-files-and-folders-directly-in-the-files-app/). In simple terms, the File Bookmark enables me to have saved locations to send data into. Scriptable is able to manipulate files in a way that Shortcuts simply can't: if I want to move a file from one location in iCloud Drive to another, I can't do that natively in Shortcuts. But with a little JavaScript and some help,[^6] I'm able to do just that.

For each one of the different document types – photos, recordings, files, and entries – I have a file bookmark to a folder. They all run generally in the same way, with some exceptions in each. The main point of all of these was I could save them into the `/iCloud Drive/Shortcuts/` folder in an automated way, but would have to manually select where to put it if I wanted the file anywhere else. This is less than ideal from an automation perspective. It can be done, but if there's a way to automate it, I'd much rather.

So for each of the shortcuts outlined below, I have a script in Scriptable which is basically the following:

```
let filePath = args.fileURLs[0];
let fm = FileManager.iCloud()
let destinationPath = fm.bookmarkedPath('Path'); //change this to your bookmarked folder in Scriptable
let fileName = fm.fileName(filePath) + '.' + fm.fileExtension(filePath);
fm.move(filePath, destinationPath + '/' + fileName)
```

As you see in the comment within the script, you need to change the `'Path'` to whatever your file bookmark is called. For my journal entries, I simply have it named `'Journal'`. For each one of the file types I have a journal bookmark for where they need to end up. I also have a separate scriptable action which is incorporated into the shortcuts I use. With all of these in place, I can start to send the different files where I need them to go automatically.

Each shortcut is essentially the same: it asks me to select a file, rename the file, and then saves it into a Shortcuts folder. Then, I'm kicked over to Scriptable to move the file from one place to another. Upon return, they each produce a link to the file type. While moving out of Shortcuts into Scriptable and back again isn't ideal, it does work; my hope is that in the future, I won't have to do this song-and-dance maneuver.

For audio recordings and files, I've taken the prefix of the launcher shortcut and just appended the file name and folder location manually:

`shareddocuments:///private/var/mobile/Library/Mobile%20Documents/com~apple~CloudDocs/Personal/Journal/`

This works extremely well and means I don't have to create a file bookmark for every file. Photos, however, uses something else. At the time of me writing this, I cannot figure out a way to have renderable links for photos within Files. I've tried everything I can think of, but nothing has worked. I could use my website and upload images, but I only need them on a temporary basis. This is where Dropbox comes in. I save the image file to Dropbox in a temp folder, get the link to the file, and insert a Markdown image link `![name](url)`; I had to make sure to replace the `www` with `dl` to make it render, but it works very well. Every so often, I have a shortcut that I can tap and remove all of the temporary images from the folder. I don't actually need to keep the images here: because they are rendered and a part of the PDF, they are ephemeral files for me. If I ever want to review the image, I can just pop into my photo library, search on the date, and then get the file.

To save my entires, I have a shortcut that is kicked off from Drafts. It accepts the Markdown-formatted text from Drafts, converts it to HTML, and then uses a customized HTML formatting I created to generate a PDF. Once I view the PDF and hit 'OK' to proceed, the PDF is then saved to iCloud Drive in the Shortcuts folder; from there, I'm sent over to Scriptable where the script moves it from the folder to the Journal bookmarked folder, similar to how I do with the other files.

So, I'm sure you're wanting to see these actions. But, I'm not sharing them right now. Not because I'm trying to be mean and withhold them, but they change very frequently; I'm tweaking them so often that during the time I started writing to the time I'm going to hit publish on this post, it will have changed no less than 4 times.[^7] These actions are pretty simple to create, aside from the JavaScript I already shared. The image below will help guide you through some of the Shortcuts. I'm thinking about sharing them at some point,[^8] but for now you'll just have to steal inspiration and create them yourself.

[![](/images/Journaling-File-Saving-Shortcuts.png)](https://www.nahumck.me/wp-content/uploads/2020/06/Journaling-File-Saving-Shortcuts.png)

Compared to what I originally started with and even my "upgraded" solution along the way, this new solution is so much better for me and the way I want to keep my journal. I'm even going back through my journal entries, fixing some image and file links, and will be saving those out as a PDF as well.

In the future, I hope that I can do a couple of things to improve all of it: move the files within Shortcuts actions itself, and render images using iCloud Drive rather than using Dropbox. If I can streamline this workflow to be Drafts + Shortcuts – two apps that will be around for a long time – I'd much prefer it. And while I don't mind supporting another indie developer right now, I would love to reduce the digital clutter in my life even more.

The end result of this has paid off for me: I've built a complete journaling system over time, built on the foundation of common formats and apps I use on a daily basis, to create the best system for me. As with a lot of things surrounding Drafts and the way I work, I can see this workflow sticking for a long time. It's evolved from a text based solution to a PDF solution. The PDF format has been around for ages, and I don't see that going away for a while. It will allow me to keep a lot of the historical record intact for at least my lifetime. Will I ever share it with anyone? Probably not. But I can rest easy that if I really wanted to do it, I now have the ability to do so.

[^1]: I believe that certain apps are good for a subscription model. But I also don't want to pay for a subscription when I can make something like this on my own. I'm frugal like that.

[^2]: Is anything really?

[^3]: Sometimes the automation fails to run as well. I tap on the notification, it opens shortcuts, and… nothing. I'm hoping there will be a change in iOS14 with how all of this works. Not going to hold my breath.↩](#fnref-1866-fails)

[^4]: I grabbed the "Quick Hits" name of this from the [Sam and Ross Like Things](http://www.samandrosslikethings.com/) podcast because I liked the name. And I like the podcast. You should check it out.

[^5]: If you're unsure which one, read the room. You know which one is for sure staying…

[^6]: Thanks Rosemary Orchard!

[^7]: Ok, actually it was more. _Nine_ times.

[^8]: I'm pondering the idea of producing a newsletter. Still in an initial stage. More to come, maybe. Would you have an interest in this? Drop me a line on [Twitter](https://www.twitter.com/nahumck) or shoot me an [email](mailto:tim@nahumck.me)
