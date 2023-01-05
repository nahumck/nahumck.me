---
title: "Drafts 26: The Customization Update"
date: "2021-03-23"
categories: 
  - "stories"
tags: 
  - "drafts"
  - "ios_ipados"
permalink: "drafts-26-the-customization-update/index.html"
layout: "post"
---

![](/images/Drafts-26-Hero.png)

Back when I wrote about my wishlist for [Drafts 5.0](https://www.nahumck.me/drafts-5-0-a-wish-list/), I wanted to have a custom syntax for the editor in [Drafts](https://apps.apple.com/us/app/drafts/id1236254471?at=1001l4VZ). At the time, this was based on my usage of other text editing apps, and I wanted a theme with a bit more color for MultiMarkdown. Now we are almost 3 years into the latest major version of Drafts, [multiple](https://www.macstories.net/reviews/drafts-5-4-siri-shortcuts-wordpress-and-more/) [large](https://www.nahumck.me/drafts-5-5-the-markdown-update/) [feature](https://www.macstories.net/reviews/drafts-15-review-multiwindow-shortcuts-and-more/) [updates](https://www.macstories.net/reviews/drafts-for-mac-its-action-time/) [later](https://www.macstories.net/reviews/drafts-22-review-widgets-scribble-and-more/), and we are finally here at tapping into the realization of its visual customization potential with [version 26](https://forums.getdrafts.com/new).

I'll cut right to it – the customization of the appearance through themes and extending the syntax of text in the editor is going to open up a whole new world to explore within Drafts. The modularity that exists with workspaces and actions is about to get a whole lot bigger with the inclusion of custom themes and syntaxes. I won't be able to provide a bunch of different options here, for a big reason: this is about making the app **_yours_**.

At a high level, both theme and syntax files are JSON files. I'm sure this might scare some of you already. But thanks to the [documentation](https://docs.getdrafts.com/extending/) for creating themes and syntaxes, it makes life a bit easier. While you could use Drafts for creating/modifying these files, I'd recommend that you use different tools to do this. In the process of creating some themes and syntaxes that I'll cover, I've used [Jayson](https://apps.apple.com/us/app/jayson/id1447750768?uo=4&at=1001l4VZ) to create/modify the JSON files and [Pastel](https://apps.apple.com/us/app/pastel/id413897608?uo=4&at=1001l4VZ) to create a color palette based on my [website theme](https://www.nahumck.me/the-new-site-design/). Both apps are free to use for the basics, and I cannot recommend them highly enough for this purpose.

![Creating themes and syntaxes is great when using both Jayson and Pastel on the iPad with a keyboard and trackpad.](/images/Jayson-and-Pastel.png)

## Custom Themes

This is where I suspect most of you will be modifying Drafts to suit your needs. There is an extensive theme file where you can customize just about anything: there are two separate areas for editor and interface colors. If you already have an existing app or website theme that you want to start with, I'd be first begin at the [Drafts Directory](https://actions.getdrafts.com); you'll find many themes that might be close to what you're looking for already. If you can't find one there, then I would recommend that you start by creating a custom color palette in Pastel to make sure you have the hex codes associated to the colors at your fingertips. This makes the next part of the process a bit easier. As you explore the actual theme file in JSON, you can easily add colors to the palette to cover the different theme elements.

To create your own theme, start by exporting an installed theme.[^1] To do this, select the editor preferences (the `Aa` icon in the bottom right), select the "Theme" tab at the bottom, and swipe right–to-left to export. If you have Jayson installed, you can use the share sheet to "Open as JSON"; from there, you can save the file. For each theme that I've used as a starting point, I've immediately gone in and edited the name, author, and the description; this saves you from confusion when you import that theme later. When you import your theme, you can then share it to the Directory.

There are many theme options available with the currently installed syntaxes. I suspect most of you will modify only a theme to start before stepping up to a custom syntax. The wonderful thing about themes is that it can change the way everything looks within the app. I personally wanted to have a custom theme base on my site, which wasn't difficult to create: I have both a [dark](https://actions.getdrafts.com/t/1hn) and [light](https://actions.getdrafts.com/t/1is) theme for my site. But I also like coding actions in Drafts, and wanted to have a specific theme: one theme I like for coding is the [Darker Dracula](https://actions.getdrafts.com/t/1ip) theme created by [Jake Bernstein](https://twitter.com/jakebernsteinwa?s=21). Themes are also scriptable, so that if you want to change the way the entire app looks when you write vs when you code, you can can do this within an action to swap workspaces.

![My current theme options](/images/Drafts-26-Theme-Options.png)

As I said, I think themes is where _most_ people will go for Drafts customization in the short term. There's nothing like a fresh look to an app to make you want to use it more, and with the options that Drafts provides to change every color throughout the app, you can make it the custom theme you've always wanted. That said, theming isn't without its faults. One big item that I feel is missing is a built-in interface to create and modify theme colors based on the built-in syntaxes. This would make theming more accessible to users if everything was self-contained in the app. Though I love Jayson and Pastel, having to use other apps for this purpose is a point of friction for many people. I'd even settle for a web-based version which would save your theme to the directory, and allow an install via a link. But built-in is almost always better. My hope is that in the future, we will see this added.

## Custom Syntaxes

Custom syntaxes are going to open up entirely new possibilities for using the app. I'm very excited to see how Drafts power users create new syntax definitions for their uses. Because this requires a good working knowledge of [RegEx](https://regex101.com), I think this is something that is going to have more impact for the future; this is something that isn't for the faint of heart, and will require some trial and error to get done. But once you have what you're looking for in a syntax, you can do a lot more. I can see some interesting possibilities open up for users in the future, but more on that later.

There are a couple of simple examples to cover here, which showcase some of the potential of the app. I'll start with a simple Twitter example. I often use Twitter to compose tweets; most time I delete them, but sometimes I sit on it for a bit and exercise restraint like a normal person. With a simple [Twitter syntax](https://actions.getdrafts.com/s/1hR) to highlight usernames and hashtags, you can now see how your tweets will look before you post them. Or if you even post them at all. This could easily be [modified](https://actions.getdrafts.com/s/1iw) to include cashtags `$` for companies, assuming you know RegEx.[^2]

![Twitter markup is nice for when you don't want to be on twitter.](/images/Twitter-Markup.png)

Another example of how a syntax could be applied is task marks. There is a great demo of using [Task Marks](https://actions.getdrafts.com/s/1hS), which has multiple options for tasks. This can be custom tailored to suit your needs. This syntax demonstrates different styles, like standard and three state tasks, but also adds new elements like on/off tasks or percent complete. If you're able to manage the custom syntaxes, you could extend an existing syntax to include some of those elements. These additions could open up new possibilities within Drafts for task management.

![Task marks open up some interesting possibilities.](https://www.nahumck.me/wp-content/uploads/2021/03/Task-Mark-Demo.mov)

Being a novice to all of this, I started with the existing MultiMarkdown syntax which ships with Drafts. Just like the themes, I exported it to Jayson, and was able to add two new patterns to check for: `**_bolditalic_**` and `_**bolditalic**_`. With a little help from Greg Pierce, developer of Drafts at Agile Tortoise, I got the needed regular expressions to add both to my custom version. I also added the way links are displayed: I wanted to make the links almost disappear from view, especially since I operate in dark mode 99% of the time, and that the text size is smaller relative to normal text size. These combined effects make it so that I'm not really reading the URL when editing, but I can see the full URL if I want to look at it. These small changes really can make a visual difference in the editor, and this example of [Draftsdown](https://actions.getdrafts.com/s/1hm) - my simple MultiMarkdown fork –  shows how the subtle changes can make a big difference.[^3]

![Nahumck Dark theme in Markdown, MultiMarkdown, and Draftsdown syntaxes. Note the small, but meaningful differences between them.](/images/Drafts-26-Syntax-Highlighting-Differences.png)

There are a lot more examples I could cover, but I think that over time, other examples and use cases will emerge. I'm sure that the [Drafts community](https://forums.getdrafts.com/) will come up with more clever things that I will, so I would make sure to keep an eye out over there or on the Directory for new and exciting uses of custom syntaxes. There will be multiple flavors of Markdown coming from users who like a specific version that suits their needs. Differing [navigation methods](https://actions.getdrafts.com/s/1ho) will be used to navigate a draft for more than just headers. I'm sure that someone out there will pioneer a new way of bullet journaling with a custom theme and syntax, which is certain to be awesome. And maybe, just maybe, [Merlin Mann](https://twitter.com/hotdogsladies?s=21) will finally get what he's wanted: a completely new syntax of Markdown + TaskPaper. That was too much to ask before, but now? That's entirely possible if you take the time to develop it. If only we could get folding headers…[^4]

## Other Improvements

Balance While Typing is another one of those usability features that I am thankful to have added to Drafts. I honestly didn't know I wanted it until the beta hit, and I don't want to go back to the way things were before. This makes typing in syntax elements for things like Markdown `[links](url)` and `[[wiki-style]]` links even easier without the need to have a custom action to do it. Simply typing as you would normally brings the first element in – a `(` parenthesis, for example – and adds the coupled element `)` after the cursor, essentially wrapping the text you type next to be wrapped like it should be. This works for parenthesis `()`, braces `{}`, brackets `[]` and quotes `""`. It is important to note that this is as advertised: "While Typing". This will not apply to text written already; for those you will need to use [custom](https://actions.getdrafts.com/a/1Bz) [actions](https://actions.getdrafts.com/a/1CC) for [each](https://actions.getdrafts.com/a/1CA) [type](https://actions.getdrafts.com/a/1iv).[^5] This is on by default so that most users can discover it, in case you do want to turn it off. I personally have it on, as I've found it to be more helpful than harmful in my day-to-day use.

There are several updates to the [Drafts Directory](https://directory.getdrafts.com/). First, you'll find the addition of the aforementioned syntaxes and themes.[^6] There are now also update notes for the actions if they have been updated. You'll also be able to update the actions right within Drafts; note that the update process is manual for now, and only available for items installed after the rollout of the feature. In the future, I'm excited to see the option for an automatic update for actions. And finally, action versioning, first introduced in [version 22](https://www.macstories.net/reviews/drafts-22-review-widgets-scribble-and-more/), has been extended now to action groups. This is great for those that have [giant action groups of their own](https://www.thoughtasylum.com/tadpole/) so that users can easily update these action groups rather than delete and reinstall them.

## Extending the Modularity

This update of Drafts is going to, given some time, open up another level of Drafts development. It will further extend the [modularity of the app](https://www.macstories.net/reviews/drafts-5-the-macstories-review/4/#drafts-as-a-modular-interface) beyond workspaces and action groups into full-fledged mini text apps to suit your needs. Want to go from writing to journaling, but have the entire app change from dark to cyan? Go for it. Want to go from journaling to task management? You can change that look too with a theme _and_ a syntax. What about if you're a fan of another app's color scheme like Ulysses or Bear? With a little effort, you can match those apps as well. But it doesn't stop there: you can change the way the app will function for you as you apply a custom syntax. And when you combine the power of a custom syntax with a custom theme, you can create new, modular apps within Drafts.

I'm still getting up to speed with creating both custom themes and syntaxes. Admittedly, I've had [a lot going on recently](https://www.nahumck.me/this-is-40/), and I haven't had the proper amount of time to really dive into this update as much as I'm hoping to in the future. But I can absolutely see the **_amazing_** potential that it's bringing. I'm going to spending some time over the next few months figuring how to make Drafts work even more for my use cases. Three years ago, Drafts got [_the_ update](https://www.macstories.net/reviews/drafts-5-the-macstories-review/) that changed it forever. And three years in, we're getting major updates to core functionality Drafts that are making me excited to keep using it.

[^1]: This way you have a good foundation for the theme you're trying to create.

[^2]: I do! Kinda. Not really. It's a work in progress.

[^3]: I plan on expanding this in the future.

[^4]: Consider this my official feature request, Greg.

[^5]: Yes, those are in order for parenthesis, braces, brackets, and quotes.

[^6]: I expect a lot more to be added over time.
