---
title: "Cycle Through Workspaces"
date: "2021-10-09"
categories: 
  - "apps"
tags: 
  - "drafts"
  - "ios_ipados"
permalink: "cycle-through-workspaces/index.html"
layout: "post"
---

Not long ago, my buddy Seth walked me through a bit of his [Drafts](https://apps.apple.com/us/app/drafts/id1236254471?uo=4&at=1001l4VZ) setup. He's been creating a lot more workspaces as of late, but didn't think the workspace switching actions I had created before were enough, and he wanted a better way to cycle through them.

My coding skills aren't that great, and quite frankly, are rusty as hell because I haven't really done a lot of it due to other commitments. At the time, I was preparing for some big reviews at work, so I didn't even have time to look into it. Seth then reached out to the [Drafts Community](https://forums.getdrafts.com). It did take long before Jacob (jsamlarose) [answered the call](https://forums.getdrafts.com/t/equivalent-to-cmd-tab-for-switching-workspaces/11294) and [created the action](https://actions.getdrafts.com/a/1rE) Seth requested. (Great work, Jacob!)

After discussing this over the phone with Seth, he was elated at his new method of switching. But he also wanted to cycle this in reverse as well. A quick search later, I found the [`.reverse()` javascript function](https://www.w3schools.com/jsref/jsref_reverse.asp), and simply added the line under the first line of the script. This reverses the array created in the line above, and then the rest of the script works in the same way. I ended up renaming the actions to [Cycle Workspace FWD](https://actions.getdrafts.com/a/1rF) and [Cycle Workspace REV](https://actions.getdrafts.com/a/1rG) and changing the icons used, along with changing the keyboard actions to `⌘→` and `⌘←` respectively.

This is just something simple that's really great and really effective. I think too often we can complicated the automation of different things and set our sights on creating complex actions (or shortcuts) to make our lives better. I'm finding that more and more, the simplest actions tend to be the right ones.
