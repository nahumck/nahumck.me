---
title: "Drafts 29: Autocomplete"
date: "2021-10-27"
categories: 
  - "stories"
tags: 
  - "drafts"
  - "ios_ipados"
permalink: "drafts-29-autocomplete/index.html"
layout: "post"
---

With Techtober coming to an end, all of the major OS releases from Apple are finally out there, however buggy they may be. And of course, [Drafts](https://itunes.apple.com/us/app/drafts-capture-act/id1236254471?mt=8&uo=4&at=1001l4VZ) 29 has been [released](https://forums.getdrafts.com/t/drafts-29-released-autocomplete-shortcuts-for-mac-support/11431) to accommodate the features in them. But some of the new features aren't even dependent on the latest OS releases, and add new levels of functionality to an amazingly capable app. Not only does the Mac have full Shortcuts support with the release of macOS Monterey – which as an iOS/iPadOS user I won't be writing about here – but Drafts also added new autocomplete options to its feature set. This post will go over what they are, what they do, and how I have incorporated them in my daily practice.

The first of the autocomplete features is fairly simple: creating a link to a specific draft. Creating a link starts by typing `[[` and then a menu pops up with your most recent drafts. Selecting a draft completes the `[[wiki-style]]` link for the draft for quick reference. You can also use the arrow and enter keys to select the item you want, so your hands don't have to leave the keyboard. This has been great for my work and personal wikis that I have been creating and is a [feature](https://www.macstories.net/news/drafts-20-introduces-advanced-wiki-style-linking/) that has improved my workflows considerably over the past year.

[![](/images/D29-Autocomplete-Draft-Examples-1024x788.png)](/images/D29-Autocomplete-Draft-Examples.png)

Sometimes you want to take it a step further than a link and include the content of the draft inside another draft, which is where the second feature comes in. Starting with `<<`, you can now select from the same recent drafts list and then upon selection, the entire content of that draft is inserted into the current draft. This is great for those that use templates from existing drafts for various purposes like taskpaper lists, emails, and more.[^later] I'll use this option far less frequently, but I'm thankful that the option is there. If you dare to use a [custom syntax](https://www.nahumck.me/drafts-26-the-customization-update/), you can even customize this autocomplete option to use the `[[body]]` template tag instead of `[[draft]]`. I'd only recommend changing this if you know what you're doing: I haven't changed this myself, as it's pretty easy to delete the line through an [action](https://actions.getdrafts.com/a/1cT) or by using the [arrange mode](https://www.nahumck.me/arrange-mode-in-drafts/).

The last autocomplete feature is all about text. By default, the trigger is `!!`, but you can customize this in the app to be something else if you prefer. When you type this, you'll bring up a list of items to select, and upon doing so, it will insert that text into your draft. You can customize all of this within the app, in the editor `Aa` menu. But the fascinating thing here is that you can use this for standard text snippets or utilize the [templates](https://docs.getdrafts.com/docs/actions/templates.html) feature of drafts to go further.

[![](/images/D29-Autocomplete-Text-Menu-1024x980.png)](/images/D29-Autocomplete-Text-Menu.png)

There are a few simple examples of using templates in this way. Dates and times are a perfect example of this. The standard `[[date]]` template will insert the date in the YYYY-MM-DD format, but using [strftime format string](https://www.ibm.com/docs/en/i/7.3?topic=functions-strftime-convert-datetime-string) methods, you can customize both dates and times to be in a specific format: using `[[date|%A, %B %d, %Y]]` will insert text like "Monday, October 25, 2021" and using `[[time|%l:%M %p]]` will insert the time formatted in an AM/PM format. Another great example is some of the draft information, like `[[uuid]]` or the url of a draft using `[[draft_open_url]]`. I've even created a location text autocomplete, that inserts `Location: [[latitude]], [[longitude]]` for the current location of the device.

Where things start to get interesting is when you start combining a bit more of the complex template examples. Drafts also uses encoding and HTML templating which extends what you can do with the text. Using these options in conjunction with the `[[clipboard]]` tag, you can create functions to insert copied text when the {% raw %}`{{[[clipboard]]}}`{% endraw %} has been encoded or insert the HTML for the `%%[[clipboard]]%%` by applying the correct characters. I use this often for HTML. In the future, I'd really like to see some new template features added specifically for this purpose to add title case, hyphenation, encoding/decoding text, and more. This could even be done using the same syntax as the date and time examples, where the options are provided after a pipe like`[[clipboard|hyphenate]]`. If you're in to using `[[template|path]]` files in action steps, you can now use those to directly insert the text into a draft.[^txt] Combining the power of templates into text insertion has been a game changer for me, and I can't wait to see this expanded further.

You can also use autocomplete to insert blocks of custom text that have multiple return lines, giving more power to text replacements than the standard implementation of iOS. For example, I use my signature often in emails but I prefer to send them as HTML. If I start this in Drafts, my standard signatures with returns does not work. So in addition to all of my information –  which includes my name, phone, Twitter handle, and email – it also includes line break HTML `<br>` after each line, saving me time when writing emails in Drafts. For work, I use a custom header which inserts two wiki-style links for my Work Tasks and Work Wiki files for quick navigation.

[![](/images/D29-Autocomplete-Text-Examples-1024x797.png "Make custom blocks of text using autocomplete.")](/images/D29-Autocomplete-Text-Examples.png) 

But where I've personally appreciated text autocomplete the most is where I have been able to take single or multiple menu actions and completely replace them. I used to have keyboard shortcuts to insert the date and/or time, but now I can do both with the text autocomplete trigger. I've taken my "[Insert Text Element](https://actions.getdrafts.com/a/1Bb)" action and completely replaced it with autocomplete. I'm sure I'll find some more as I go through a cleanup of my entire Drafts setup, but having some extra keyboard shortcuts will come in handy down the road.

All of the autocomplete features work in the editor window itself, though I'd love to see an option to have it for the script editor to insert blocks of code that I often use. With the additional option to add multiple custom text autocompletes in custom syntaxes, I could even add this for when I start a new script in draft form, rather than in the editor. I haven't done any customizations beyond what I've shown here, but I'm sure that given some time I'll start exploring a bit more and come up with some interesting use cases that I'll be sure to share. For now, at least, I've updated my [Draftsdown](https://actions.getdrafts.com/s/1hm) syntax to support the standard autocomplete features discussed here.

[![](/images/D29-Insert-Text-Element-Replacements-1024x561.png "The new autocomplete feature for text has replaces several actions for me.")](/images/D29-Insert-Text-Element-Replacements.png) 

Like other new features introduced into Drafts, the new autocomplete features will be a huge productivity boost to some, and open new opportunities to others. The feature will get even more feedback, and perhaps some new enhancements in the future. We'll see some power users use custom syntaxes pushing this even further, something that I personally can't wait to see. This is yet just another rung on the feature ladder of Drafts. The view from the top is great.

[^later]: There's also another option for this that I'll explain in a bit.

[^txt]: This works best when the file is in a .txt format.
