---
title: "GoodTask 4.5: Checking All the Boxes"
date: "2019-04-13"
categories: 
  - "apps"
tags: 
  - "goodtask"
  - "ios_ipados"
  - "review"
permalink: "goodtask-4-5-checking-all-the-boxes/index.html"
layout: "post"
---

Over the course of the last year, I had transitioned away from GoodTask to Things, then Todoist, then back to Things. I might have even missed a quick affair with OmniFocus as well. But I digress.

GoodTask has been my long-time favorite Reminders client. From the [surprise](https://www.nahumck.me/goodtask-3-an-unexpected-surprise/) the first time I started really using it to now, it has made improvement after improvement in both functionality and appearance settings (love me those themes) on all platforms – iOS, macOS, and the Apple Watch. I was inclined to go back to GoodTask when the Apple Watch app was updated, so I moved everything over there in the beta. I had mentioned to the developer that there were a couple features which I was missing from Things, but I was very happy with the improvements to the apps. Those suggestions plus others were carefully considered, because they are now in the version 4.5 update of the app.

# Tag Sorting

GoodTask 4.5 brings with it the ability to sort a List or Smart List based on tags. Tags are a clever implementation in GoodTask, which puts a `#tag` into the note of a reminder. GoodTask can parse this as a tag, and allow you to use that information within the note as a tag, much like the other information the developer uses to implement sub tasks. You can use all of your tags or specific tags per list, which is great for customizing how you view your different lists.

With the new tag options, I'm able to now recreate some of the features that Things provided which gives me a better view of my tasks in different views. It all stems from the ability to sort lists and smart lists using Tags first, then due dates, etc.

I absolutely love the headings feature of Things. When I have a specific project, having the breakout of different subsections is better for my brain. And with the tag sorting, I can re-create this now in GoodTask. For example, I can take all of the tasks in my Nerd Life[^1], apply the tags, and have the list sorted on them. While it may not be quite as pretty as the Things implementation, the capability in GoodTask allows me to break it down to key areas just the same.

[![](/images/Nerd_Life_Things_GT-1024x988.png)](https://www.nahumck.me/wp-content/uploads/2019/04/Nerd_Life_Things_GT.png)

Another key feature of Things that I adore is the Today view. Having your tasks along with the calendar is a fantastic singular view of what is ahead of me. Having a separate 'today' and 'evening' section has been critical for me to quickly view and clarify what needs to be done. Now with the tag sorting, I can recreate this view in GoodTask. I created a Smart List which includes my calendar, tasks scheduled for today, and any overdue tasks. This list is sorted by Tag then Due Date, and I also have my calendar events sorted on top, listed under the order section. I created a quick action to apply a `#Today` and `#Evening` tag as a toggle, so that I can quickly tag tasks which show up in the view. Again, this might not be as visually appealing as the Things view, but it provides me what I need while keeping the native Reminders service integration.

[![](/images/GT_Today_View-1024x743.png)](https://www.nahumck.me/wp-content/uploads/2019/04/GT_Today_View.png)

### Completing Tasks

For a while now, I've been wanting to see more [improvements to Reminders](https://www.nahumck.me/rethinking-reminders/), but lately I've been wanting improved support within Shortcuts. When I think of what I want Shortcuts to ultimately be, I can't help but want certain features added: for Reminders, having the ability to check off a task would be beneficial for certain shortcuts. So while we wait Shortcuts.app to catch up, GoodTask has added a Siri Shortcut to complete a task (and do so in the background). You'll need to go to Settings → Siri Shortcuts → Add Complete Task to get the Siri Shortcut and/or add it to Shortcuts.app.

I'm getting old, so I take vitamins. I use a reminder to trigger this, so I don't forget. I took this one step further and created a shortcut to run on my iPhone which logs the vitamin intake – including all the breakdown of the various types of vitamins – into the Health app, as well as mark it in Streaks as complete to help me keep track of when I've taken it. I always thought it would be nice to complete the reminder as well, but I the lack of the feature has prevented it. But now, I can copy the exact title of the task (and it must be exact) for my vitamins, add a text block and some clipboard actions to save and retrieve,[^2] then add the GoodTask Complete Task action block; I also turned off the "Show When Run" option so that it runs seamlessly in the background.

[![](/images/Vitamins_GT_Complete-228x450.png)](https://www.nahumck.me/wp-content/uploads/2019/04/Vitamins_GT_Complete.png)

I use the native Reminders notifications due to the fact that they remain on the lock screen, but actions like the one outlined above have me rethinking that approach. GoodTask allows users to run a URL from the notification, which means I could run the shortcut straight from the notification and complete it all in one go. I'll likely look to play around with this as time goes on.[^3]

The full list of improvements can be [found on the forums](https://forum.goodtaskapp.com/t/goodtask-4-5-update/157/3). Having been away for a while, I can see that there is a lot more to offer now with GoodTask than ever before. The developer is listening to suggestions, is adding features at a manageable pace, and I can really appreciate the level of continued development for the app.

[^1]: This is my own affectionate name for these things.

[^2]: I wish they would fix this so that I can just use text and not have the extra blocks. Sigh.

[^3]: Perhaps with iOS 13 around the corner Reminders will be improved, or third-party app notifications will be given the ability to perform in the same manner as Reminders. But I won't hold my breath for either one.
