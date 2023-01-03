---
title: "Using Drafts As A Main Text Editor"
date: "2016-03-28"
categories: 
  - "apps"
tags: 
  - "drafts"
  - "ios_ipados"
  - "review"
permalink: "using-drafts-as-a-main-text-editor/index.html"
layout: "post"
---

![](/images/Drafts-Text-Editor-Hero.png)

_Drafts — Where text starts_ on iOS. This has been the tag line for the app since its inception. Many people use this as their single place of text input and output, exporting ideas to other apps for a myriad of reasons. It supports writing styles like [MultiMarkdown](https://github.com/fletcher/MultiMarkdown/wiki/MultiMarkdown-Syntax-Guide "MultiMarkdown"); it supports scripting via JavaScript and [x-callback-url schemes](http://x-callback-url.com/) for easy use with other applications, making it one of the most versatile apps on the App Store.

The main use of Drafts is writing down ideas, and then sending them to another app. Sometimes, I get an idea for a post (like this one), write down my thoughts, and then send it elsewhere for long-form writing. But is that really necessary? Do I really need to move these items out of Drafts? Why couldn’t I write everything I want within the app from start to finish? The answer is simple: I _can_ do everything here. And maybe what you need to do to use Drafts as a main text editor is set things up for how you need it to work now and in the future.

* * *

### Table of Contents

- [How I Write](https://www.nahumck.me/using-drafts-as-a-main-text-editor/#how-i-write)
- [Action Tags](https://www.nahumck.me/using-drafts-as-a-main-text-editor/#action-tags)
- [Custom Keys Make You Faster](https://www.nahumck.me/using-drafts-as-a-main-text-editor/#custom-keys-make-you-faster)
- [Setting Up Dropbox “Integration”](https://www.nahumck.me/using-drafts-as-a-main-text-editor/#setting-up-dropbox-integration)
- [Publishing](https://www.nahumck.me/using-drafts-as-a-main-text-editor/#publishing)
- [Future Improvements](https://www.nahumck.me/using-drafts-as-a-main-text-editor/#future-improvements)
- [One Text Editor to Rule Them All](https://www.nahumck.me/using-drafts-as-a-main-text-editor/#one-text-editor-to-rule-them-all)

* * *

## How I Write

![](/images/Drafts-Text-Editor-Outline.png)

I usually start a post with an outline; it helps me formulate where I want to take a post, and also helps to keep me focused over the time it takes me to complete it. I have a temporary name for the post as the first line (this is the `[[title]]` tag I’ll cover below), then use an unordered list to capture major points; the reason I use an unordered list is so that I can use the arrange mode in Drafts to reorder points if I feel like I want to move topics around. If I want to expand a thought more, I’ll use an indented list for clarity; if the mood strikes me, I’ll just start writing my thoughts.

For as amazing as Drafts is, the whole idea of keeping track of everything in the inbox can be tough. Thankfully, filtering on a particular text can help you sort out different notes and group them how you need them. When you first launch Drafts, you have an inbox, an archive, and a trash. Trash saves deleted drafts for 30 days, unless you empty them sooner. Optionally, you can create and apply filters to narrow in on particular drafts or “sort” your inbox. You can have the filters scan the inbox, archive or both; you can check by status or sort in a specific way to suit your needs. For my writing, I use a tag of `@post` to have a filter; I place the `@post` tag right after the post title.

Another feature of Drafts allows you to keep multiple sections of writing separate. One of the big things that I came to find with other apps, most notably [Ulysses](https://geo.itunes.apple.com/us/app/ulysses-mobile/id950335311?at=1001l4VZ&ct=nahumck_me), is the idea of writing individual sections in different files, then combining them at the end for one post. This is surprisingly helpful for clarity. It allows you to focus in on one part at a time, without you getting lost somewhere else.

![](/images/Drafts-Text-Editor-Separate-Files.png)

In Drafts, the same is possible by breaking your outlines into individual Drafts. To do this: highlight the section name, tap & hold the `+` icon, then choose “New from selection”. Another option is to use the [Split Draft at Cursor action](http://drafts4-actions.agiletortoise.com/a/1YI); this splits the draft into two separate drafts. I can do this with each section of the post; I can then add the `@post` tag to everything to easily apply the filter and see all the sections.

When I’m ready to combine the drafts back together to publish, I simply tap “Select” from the drafts list, highlight the selected ones in the order I want my post to flow, then press “Operations”, and choose “Merge” from the menu. Now I have one draft that I can manipulate for final formatting.

![](/images/Drafts-Text-Editor-Merged.png)

## Action Tags

One of the powerful things that Drafts utilizes is tags for actions. These tags come in a [variety of choices](https://agiletortoise.zendesk.com/hc/en-us/articles/202843484-Templates-and-Tags) that you can use in and use from different action steps. Familiarizing yourself with these tag options is beneficial in how you think of your writing as it pertains to actions so that you can easily use them.

_This is the transformative power that can separate Drafts as a powerhouse text editor._

Because I use Drafts for most everything on my phone, I have become very familiar with how and when to use certain tags. The standard tag for anything is `[[draft]]` which grabs everything in the current draft. But there are times where you want just the first line or everything but the first line; here, you would use `[[title]]` and `[[body]]`, respectively. This is especially important when you are building custom actions, as it can yield you drastically different results.

Another useful tag for searching or replacing selected text is the `[[selection]]` tag. One example of this is how useful it is to create affiliate links via [Blink](https://geo.itunes.apple.com/us/app/blink-better-affiliate-links/id946766863?at=1001l4VZ&ct=nahumck_me). As I am writing, I just write the name of the app/album/book; I can later go back, select the name, and run the [Blink Replace](http://drafts4-actions.agiletortoise.com/a/1hd) action to replace the text with a Markdown link. The smooth automation makes it easier to bring in all of my links. This functionality is something that few writing apps offer.

![](/images/Drafts-Text-Editor-Blink-Replace.png)

Running a DuckDuckGo or Google search using selected text or the text from a prompt window will bring up the Safari View Controller within the app, so that I can easily look up information on the topic, and select the link I want to reference; on my phone, this is especially helpful because I don’t have Split Screen for anything, and it helps me do some research without leaving Drafts.

![](/images/Drafts-Text-Editor-DDG-Search.png)

There are countless [other actions](http://drafts4-actions.agiletortoise.com) that do little niche things: you can convert your [entire draft to HTML](http://drafts4-actions.agiletortoise.com/a/1IQ), you can [remove duplicate lines](http://drafts4-actions.agiletortoise.com/a/1he), or even [expand short links](http://drafts4-actions.agiletortoise.com/a/1iC) all with a few taps. You can see from these examples that Drafts really feels like an all-in-one solution for getting useful information into your writing.

## Custom Keys Make You Faster

Another one of Drafts’ features that really helps improve your speed is custom keys. These are the keys that are in the extended keyboard row. Drafts comes preloaded with several keys, but there is some real power here once you get familiar with the app.

The [Drafts Action Directory](http://drafts4-actions.agiletortoise.com) has a lot of custom keys available, and they are as easy to install as actions. You can also assign shortcut keys for them if you have an external keyboard. (I use [this one](http://www.amazon.com/dp/B00MUTWLW4/?tag=nahumck-20).) One way to use the custom keys is to run an action.

There are many times that I want to search using selected text. I have multiple actions for search that are all in one [Action Set](https://www.nahumck.me/using-action-sets-drafts/). But I will use this [DuckDuckGo (DDG) Search](https://drafts4-actions.agiletortoise.com/a/1je) action to show you how to assign it to a key.

First, you need to have that action installed. Then, you need to go to your extended keyboard row, and flick all the way until you see the pencil icon at the end; tap this to edit. Next, you can add a key by pressing the “+” button at the top right. Now, select “Run Action” and fill in the action name field with “DDG Search”. If you wish to assign an external key, do so in the given field. It is important to remember that you will need to select one of the operator keys (`Shift`, `Ctrl`, `Opt`, or `⌘`) to differentiate your custom keys. You can also optionally hide the key if you don’t want your keyboard row to be cluttered. Finally, tap save, and then you can move it into a position that makes sense.

![](/images/Drafts-Text-Editor-DDG-Search-Key.png)

Now all you need to do in the future is highlight the selected text, then press the key above your keyboard to search. While this only saves you a swipe when you’re using just your device, this can be sped up if you have an external keyboard by not taking your hands off of it.

Another thing running an action can allow is previews. I have a preview for my site that allows me to see how it will look once published. I can catch a lot of formatting errors this way, and has been extremely useful. How did I do it? I talked to someone about it and they offered help. If you know how to make CSS, then you should be able to make it from your site.[\[1\]](#fn-1 "see footnote") I have a key that runs the “Preview…” action, and allows me to select from a number of different previews; I also have a shortcut key of `⌘ + Shift + P` to quickly call it up when using my Bluetooth keyboard.

A few other keys that I have found useful are all based on the [smart parentheses](http://drafts4-actions.agiletortoise.com/k/14b) created by Greg Pierce that puts in, you guessed it, “smart” parentheses: this inserts an open parenthesis if none are present, closes them if you have an open parenthesis, or — and this is the best part — wraps selected text in parentheses. There is also a [smart bracket](http://drafts4-actions.agiletortoise.com/k/14c) key that uses the same script, but calls the open and close brackets.

I have modified the script and created three of my own. I created a [smart braces](https://drafts4-actions.agiletortoise.com/k/1jb) key that uses `{ }`. I also made a [smart double bracket](https://drafts4-actions.agiletortoise.com/k/1jc) key that creates `[[ ]]` that are useful in creating `[[tags]]`. And finally, I created a [smart code](https://drafts4-actions.agiletortoise.com/k/1jd) key that inserts html code blocks `<code>` for when I want to highlight something related to syntax.

![](/images/Drafts-Text-Editor-Smart-Keys.png)

Using the custom keys while writing has increased my efficiency in everything I enter into Drafts. I can insert a [Markdown link](http://drafts4-actions.agiletortoise.com/k/1Zv) by typing `⌘ + L` to create my links faster. I can [Change Title case](http://drafts4-actions.agiletortoise.com/k/16o) by using `⌘ + T`. I can [encode](http://drafts4-actions.agiletortoise.com/k/1FN) or [hyphenate](http://drafts4-actions.agiletortoise.com/k/17v) text with a press of a key. As I have gotten more comfortable with writing this way, it is hard to see myself using anything else.

## Setting Up Dropbox “Integration”

Dropbox has been a foundation for me using iOS. Most people that I’ve talked with pine after Dropbox integration for Drafts — and perhaps that will happen some day. But you _can_ have something like it now, even if it is a bit more involved.

First, let me say that the iCloud integration has been rock solid for me. I have never had a single issue. The only things that I ever save into Dropbox are things that I know I want to save permanently; this could be a small note or a list or a post.

The key is setting up actions to allow me to save these items efficiently. Tags are particularly useful for creating a Dropbox “integration”; this isn’t a true integration like other apps have.

### Dropbox > Save As…

This is an action that I created to allow me to save any sort of document; think of this more as a `File > Save As…` that you would see on a desktop menu. It uses a couple of Prompt steps: one for the file path and one for the extension. Using scripts, I am able to take the file path and action extension and parse the one I choose, giving me tag outputs that I can use in the final Dropbox action step. The Dropbox action step takes the `[[title]]` as the file name, then uses the two scripts to complete the rest.

[Dropbox > Save As…](https://drafts4-actions.agiletortoise.com/a/1j2)

![](/images/Drafts-Dropbox-Save-As.png)

### Create vs Replace Post Version

Dropbox Pro users can get the option of versioning through the web, which is a nice a feature as it can be (and has saved me several times), still isn’t something available in the iOS app. To replace this for me in iOS, I have made it so that I can create backups accordingly. There are times that I will want to create a backup of my post; other times, I might want to backup a separate post version.

The first action is Create Post Version. This simply uses the Dropbox step, with the use of the `[[title]]` and `[[draft]]` tags. As I said above, part of my writing setup is using the title of the post as the first line; the reason for doing this is because I want to be able to save the post in this way. If I feel like I have something that is ready to be archived in Dropbox, I can simply tap on my action and it’s automatic.

The real difference in Create vs Replace is in how I tell the action step to behave. When I replace, it is simply that: it over-writes the version that is saved. And while Dropbox Pro users could go onto the web and rollback the version they have, standard users cannot. This is where Create comes in to play. Using Create will save the initial version of the post, but on subsequent Create saves, will put a `(n)` version number after it; this allows you the ability to go back to a previous version of what you have written.

![](/images/Drafts-Text-Editor-Create-Replace.jpeg)

Didn’t like the section you just added? Want to pull from a different version? No problem. To create a draft from a file in Dropbox, simply tap on the “+” button, select Dropbox, and locate your file. You won’t be working in the active file, but this is OK. It allows you to edit without having to worry about affecting what is in the cloud. When you’re ready to put the version back, because I’ve kept the first line as the title by using the `[[draft]]` tag, I’m able to re-use it again to save the file.[\[2\]](#fn-2 "see footnote")

[Create Post Version](https://drafts4-actions.agiletortoise.com/a/1j3) [Replace Post Version](https://drafts4-actions.agiletortoise.com/a/1j4)

### Action Set

As I wrote about previously with [Action Sets](https://www.nahumck.me/using-action-sets-drafts/), you can easily create one for your Dropbox[\[3\]](#fn-3 "see footnote") setup.

Here is a link to the [Dropbox Action Set](https://drafts4-actions.agiletortoise.com/a/1j5) I’ve created for the actions above.

## Publishing

Now that I have everything backed up, I can move on to formatting and publishing my document. The first thing I do is run an action to remove the `@post` tag I created for the filter.[\[4\]](#fn-4 "see footnote") This is easy to do with the [Find and Replace](http://drafts4-actions.agiletortoise.com/a/1Z2) action.

I then take my screenshots and upload them, replacing any of the image placeholders I have with the final versions. I used to have to painstakingly do this one at a time, using the web uploader on WordPress. When [Workflow](https://geo.itunes.apple.com/us/app/workflow-powerful-automation/id915249334?at=1001l4VZ&ct=nahumck_me) received an update that integrated publishing things to WordPress, my friend [Seth](http://sethclifford.me) created an action to upload an image to WordPress.[\[5\]](#fn-5 "see footnote") This was very useful, but I wanted to allow for multiple images; I also wanted to get each of the links for the images I uploaded. I ended up creating [this workflow](https://workflow.is/workflows/61575e81b4d342119d6b21fce3b091d9) which takes the selected images, gives you a preview of them, allows you to rename the image, then uploads it to Wordpress. It then returns the URL of the image and adds it to a list, which it then exports directly to a newly created draft in Drafts. The action has an area that you will need to change for your site, so make sure you take a look when you download it; also, if your upload settings are different than mine, you’ll have to change it to suit your needs.

Next, I view the post one last time with my preview, then I convert the entire post to HTML using [this action](http://drafts4-actions.agiletortoise.com/a/1IQ); this allows me to change a few things prior to posting in HTML that Markdown doesn’t allow. I then run an action to change all of the `<img>` tags to be centered.

![](/images/Drafts-Text-Editor-Markdown-vs-HTML.png)

The last thing I do is strip the HTML from the title, and then I am ready to hit the [Publish](https://workflow.is/workflows/46968f799b1a4dab821d16d5543bb489) action. This uses Workflow to publish to WordPress, the platform I use for my site. This action takes the `[[title]]` and puts that on the clipboard; then it takes the rest of the text (\[\[body\]\]) and sends it over to Workflow. There is a way for me to post via email and rely entirely on Drafts, but I really appreciate the way Workflow handles the publishing where it can allow me to put in categories and tags, and even different publish dates or states.

That’s it. What started as a simple outline has now turned into a full post. I am able to write entire posts simply and efficiently, with access to everything I need right from within Drafts. This seemingly simple text editor is made massively powerful by the actions and keys that I am able to create.

## Future Improvements

With all of that said, there are some improvements that I have seen in other apps that I would love to see happen in Drafts. Having these features would be useful for long-form writing and navigating within a draft itself.

![](/images/Drafts-Text-Editor-Editorial-Section-Folding.png)

There are two things from [Editorial](https://geo.itunes.apple.com/us/app/editorial/id673907758?at=1001l4VZ&ct=nahumck_me) that I would love to see get added to Drafts {Maybe Drafts 5? Please let this happen…}. The first is the folding of sections when Markdown headers are applied; having that allows me to fold sections as I’ve completed them, or to simply get them out of sight. The second thing I would love to see is the arrangement of lines; Drafts has this functionality via arrange mode, but I find the the implementation used in Editorial better.

I would love to see the ability to search for something within a draft and see it highlighted. That way I can find a specific section or see how many times a word has been used in a post. Expanding on this, the find/replace action could be built in to the search, which is something only a few apps offer, and would be a welcome addition.

![](/images/Drafts-Text-Editor-Ulysses-Syntax-Highlight.png)

The last thing that I would like to see is better syntax highlighting. I really appreciate the syntax highlighting in [Ulysses](https://geo.itunes.apple.com/us/app/ulysses-mobile/id950335311?at=1001l4VZ&ct=nahumck_me). It uses multiple colors to distinguish between links, images, footnotes, etc. It is visually nice to to see these items as you write, and is something that I would love to see added. Drafts does currently support some of this now, but it only uses a de-highlight of text if it is part of a link.

These improvements would be welcome, but don’t stop me with how I use the app. They would only make my experience with using it better.

## One Text Editor to Rule Them All

So is this the only text editor that you need to use? No. For me, I can’t use just one for everything. The issue is that all of the apps have different features and do things a differently. Ulysses on iOS is great: the MarkdownXL writing is clean, the interface is beautiful, and the ePub export is _outstanding_. Editorial is nice because it has great Dropbox integration and can do so many things; the folding and arranging of lines and sections is top notch. [Byword](https://geo.itunes.apple.com/us/app/byword/id482063361?at=1001l4VZ&ct=nahumck_me) provides a nice clean interface and some good export options, but lacks some of the power features that Editorial, Ulysses, and Drafts have. Pages is cumbersome, but can provide you with a nice visual of how things will ultimately look. And there are a ton of others that I’m sure I’m not mentioning that are incredibly useful and have other features.

With all of the options out there, I’m sticking with Drafts. The app, coupled with all of the great custom actions and keys, gives me the freedom and flexibility to do so many things, write once, and send everywhere. After experimenting with other apps and trying new things, Drafts is _still_ where my writing starts.

* * *

1. I don’t have a magic solution here, sorry… [ ↩](#fnref-1 "return to article")
2. Thanks, past & future me! [ ↩](#fnref-2 "return to article")
3. [Box](http://box.com) also can be used in place of Dropbox. Simply download the actions, change the Dropbox step to a Box step, and you’re all set. Just be sure to match the fields when doing so. [ ↩](#fnref-3 "return to article")
4. This was extremely difficult for this post, because I was using `@post` in the text of the document. I actually just deleted them all manually to make it easier this one time. [ ↩](#fnref-4 "return to article")
5. He is always doing clever things like this. [ ↩](#fnref-5 "return to article")
