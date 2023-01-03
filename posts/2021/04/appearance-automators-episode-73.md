---
title: "Appearance: Automators Episode 73"
date: "2021-04-09"
categories: 
  - "linked"
tags: 
  - "drafts"
  - "ios_ipados"
  - "journal"
  - "podcast"
  - "shortcuts"
permalink: "appearance-automators-episode-73/index.html"
layout: "post"
---

In my second appearance on [Automators](https://www.relay.fm/automators/73) (part of the [Relay FM](https://www.relay.fm/) network),[1](#fn-2049-first) I'm back to talk with David Sparks and Rosemary Orchard once again about [Drafts](https://apps.apple.com/us/app/drafts/id1236254471?uo=4&at=1001l4VZ). We dive in on some of the new stuff from [version 26](https://www.nahumck.me/drafts-26-the-customization-update/) which introduced custom themes and syntaxes. We also touch on a few other [updates](https://docs.getdrafts.com/docs/misc/changelog-ios.html) from the first version to now as well. I hope you enjoy it.

There were a couple of things in the episode that I wanted to follow-up on here, including the homework assignment David gave me. I'm thrilled that the time spent with David and Rosemary gave me the idea, which made me reconsider some things with my personal journaling and changed how I'm doing it going forward.

### Theme Switching with Workspaces

Ever since I've used workspaces + action groups to create what I called modules, I've used a script actions to switch between them. Originally, I set each workspace, action group, and keyboard row individually; once the action and keyboard group options were added to the workspace manager, I simplified the actions. I keep the single action in every one of my action groups which I use in the keyboard row to use on the iPhone for quick access to switch. Where I use this switching method a lot is on my iPad, using a hardware keyboard. All of my modules are brought up with keyboard shortcuts, assigned to `⌘2 - 9`; both `⌘1` and `⌘9` are reserved by Drafts for the draft and action list show/hide, respectively.

With the addition of themes, I've now modified the modules I have to include themes that I want to use in those different contexts. I'm sure I'll update this more over time. I primarily use dark mode, so that's what I currently have in there. But you could also modify the scripts to include light themes as well. Here's my [Modules action group](https://actions.getdrafts.com/g/1Jn) as it stands today for you to play with and make your own. You'll need to change the theme names in each of the module actions, else you might get an error.

I haven't quite yet cracked the switching of syntaxes based on themes. I have, however, leveraged Matt Gemmell's previous Switch Syntax action and [created my own](https://actions.getdrafts.com/a/1jz) which provides a list of all the installed syntaxes. It's not automated, but it does the job when I need it. I'm sure Rosemary is working on something even more clever…

### Automated Journaling

On the show, we talked about some of the automations I've used (in most cases, continued to use) frequently. One of my journal shortcuts saves the text of the journal as a PDF for future reading. That's when David brought up a great suggestion: using a Shortcuts automation at a specific time to automatically save the journal at night so I don't have to do it manually.

It took a few modifications to my original shortcut, but I have the automatic saving of journal entries figured out. The [Journal • Save](https://www.icloud.com/shortcuts/4d686cd67ae440448d3e0469080db9d9) shortcut searches my Journal workspace for today's journal entry, gets the content of the draft, creates an entry title (formatted `Journal Entry yyyy-MM-dd`), creates a nicely-formatted PDF, and saves the PDF version to `/iCloud Drive/Shortcuts/Journal/`.[2](#fn-2049-bug) I manually move these once a week during my weekly review for now, until the Shortcuts team actually gives me that built in feature.[3](#fn-2049-tried) This action can be used with Shortcuts automation; if you choose to run the automation without asking, it will run automatically in the background. I have mine set to run at 11:00 pm every day, and in my testing since we recorded, it's been working fantastically.

This then lead me to **_change_** the way I've been journaling, so that I can just automate the creation of the journal entry and never miss a day. The old way of starting my journal is answering a couple of questions: did I wear my watch to sleep to get data out of [AutoSleep](https://apps.apple.com/us/app/autosleep-track-sleep-on-watch/id1164801111?uo=4&at=1001l4VZ) – a feature that is broken due to an iOS 14.5 bug  – and how did I feel when I woke up. Here's a secret: I'm not sure I sleep all that well generally, I never use the quantifiable data in any meaningful way, and I don't know that I need a reminder of how shitty all that can be and make me feel. If I want a pretty chart or other meaningful insights, I'd be better off going into AutoSleep or the Health app to get it. Weighing the importance of sleep tracking vs daily journaling, having a journal entry for every day that is just automatically there just makes more sense. Using the [Journal • Start](https://www.icloud.com/shortcuts/0e033f7bbf0f465da352e8b0268c17a4) shortcut in conjunction with another Shortcuts automation which runs at 6:00am, and automatically starts a journal entry for me without any interaction on my part.[4](#fn-2049-forecast)

I've been running this for the week, and it's been really great so far. Removing the friction of interacting every time I want to start and save a journal entry has made me want to journal more. Sometimes, it's those little things that get you change your mind. I'm calling this a win.

* * *

Thanks again David and Rosemary for having me on, and for the idea to be a better Automator!

* * *

2. You can find my first appearance [here](https://www.relay.fm/automators/23). [↩](#fnref-2049-first)

4. I am having a shortcuts bug where the file from Shortcuts gets created with a `-2` suffix, which is hyper annoying. I have to manually fix them. I'm sure it's something I could solve with a script, but I haven't had the time. It's a bug, and the Shortcuts team works it out. Additionally, I would like to have the ability in Shortcuts to save the entries to the Journal location I keep in iCloud Drive. Would make life a lot simpler. [↩](#fnref-2049-bug)

6. I tried to use a script in Scriptable to move the files from the Shortcuts folder to my preferred journal location in iCloud Drive, but it often took a while to run. I can quickly move the files once a week, so I'm not too worried about it. Maybe a future update of my journal workflow will happen if features come to iOS 15. [↩](#fnref-2049-tried)

8. if you want to use this exactly, you'll also need the [Journal • Forecast](https://www.icloud.com/shortcuts/539f60e52c9b48279621eb31ac7427f3) shortcut as well. [↩](#fnref-2049-forecast)
