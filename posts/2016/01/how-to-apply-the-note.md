---
title: "How to Apply the Note"
date: "2016-01-27"
categories: 
  - "apps"
tags: 
  - "ios_ipados"
  - "workflows"
permalink: "how-to-apply-the-note/index.html"
layout: "post"
---

My day-to-day life is filled with tasks. Work, home, personal — they pile up more than I would like to admit. I’ve been off and on with managing my tasks, the apps I use, and my workflow(s) of getting tasks together.

At the end of 2015, I started to change my behavior: I spent my holiday time off work researching methods, reading articles and books on [Getting Things Done](http://www.amazon.com/gp/product/0143126563/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0143126563&linkCode=as2&tag=nahumck-20&linkId=DL5BU3TGRAWWOOMR). I searched for things to improve workflows at work and at home, improve my task management and find a system that works, and start daily habits that increase productivity.

### The Note

One of the simplest habits that I started implementing was one that I learned from Shawn Blanc’s “[The Note](https://shawnblanc.net/2015/06/the-note/)”:

> “\[The\] note is the single most important element of my personal productivity system. Because that note is the single most important thing I have to do today.”

I’ve been writing myself a note before bed ever since I read those words. Now, I don’t write this out by hand like Shawn suggests, as I’ve been increasingly moving towards getting rid of much of the paper we have in the house. I also don’t write the single biggest task for the day. But the concept of The Note is simple: get it out of your head and into a format you can read the next day, so it’s not keeping you up. It frees you from the stress of trying to remember that small thing — or set of small things — you needed to get done. And although I shouldn’t, I usually am on the phone before I go to bed.

![The Note](/images/Example-Note.png)

Before I go to bed, I start my Note. My Note starts where all my notes do: [Drafts](https://geo.itunes.apple.com/us/app/drafts-4-quickly-capture-notes/id905337691?mt=8&at=1001l4VZ&ct=nahumck_me). I follow the format of `Task | Notes` when typing in my thoughts: this allows me to identify the task, and if I think of anything I want to elaborate on, I can add it after the `|` delimiter. I also include any meetings I might have the next day (from memory) for which I want to be really sharp and attentive. And then… I sleep.

That’s it. Pretty simple, right? Something so easy helps me get it out of my brain and into action. This daily habit has boosted my productivity level in a big way.

Previously, I posted about two things that help me: [Building Projects in 2Do](https://www.nahumck.me/building-projects-2do/) and [Using Action Sets in Drafts](https://www.nahumck.me/using-action-sets-drafts/). In these two posts, I outlined some workflow methods of getting information from one place to another, and setting up action sets to reduce the visual clutter. But how do I personally use them? The Note is a perfect example.

![Example Note Arrangment](/images/Example-Note-Arrangement.jpeg)

In the morning, I will review my calendar for the day, as well as my Note from the night before. I’ll sift through the lines I have written, deleting any of the items that don’t need to be moved over to [2Do](https://geo.itunes.apple.com/us/app/2do/id303656546?mt=8&at=1001l4VZ&ct=nahumck_me). Then, I look at my remaining tasks to determine how I will enter them into my Task Management System (TMS). Because I do this daily, I have automated these things on iOS; Projects, Tasks, and Checklists all have their own methods for me as workflows.

Below are some of the actions that I use in getting my Note into 2Do, using Drafts and [Workflow](https://geo.itunes.apple.com/us/app/workflow-powerful-automation/id915249334?mt=8&at=1001l4VZ&ct=nahumck_me).

### Actions

**Tasks & Projects** **Drafts → Workflow → 2Do)**

I use two similar workflows to create tasks and projects in 2Do, passing text through workflow. The text passed into a variable that can be used to split the lines into tasks, and each line can be separated by the `|` delimiter.

![Task Workflow Action](/images/Task-Workflow-Action.png) _You can see the full workflow image [here.](/images/Task-Workflow-Full.png)_

You can download the actions needed for  Tasks(Drafts→WF→2Do) to work here: [Install Workflow](https://workflow.is/workflows/cb0e400ed8404378af7046a4c69d447d) [Install Drafts Action](https://drafts4-actions.agiletortoise.com/a/1fg)

Projects is similar, but has a unique method for saving the project, then the subsequent lines as tasks. Using Workflow allows the use of 2-variable storage when passing to 2Do , made possible by Extensions in iOS: text from the first line can first be copied in the system clipboard, which gets saved as a variable in Workflow; the rest of the text can be passed via extensibility into a variable for processing.

![Project Workflow Action](/images/Project-Workflow-Action.png) _You can see the full workflow image [here.](/images/Project-Workflow-Full.png)_

You can download the actions needed for Projects(Drafts→WF→2Do) to work here: [Install Workflow](https://workflow.is/workflows/14d4027d83654e0499e016272d79fcd9) [Install Drafts Action](https://drafts4-actions.agiletortoise.com/a/1ff)

Unless you change the specified list, the two actions will place the items in the default list. I use the GTD Inbox, so that it is the default list, and I can triage and move tasks as needed. As I said in my previous article on the subject of Projects, you will need to manually move the Tasks created by this action into the Project. This is something that I hope is updated for the next release.

I have also added a few small improvements to the workflows:

- I added a small script to remove white space lines in the main portion of the task list (The first line cannot be blank).

![Whitespace Removal](/images/Whitespace-Removal-Script.jpeg)

- I also added a check at the beginning of the action for a blank Draft: there were a number of times while writing the article that I would accidentally trigger the action, and it would create a “New Task” in 2Do. This notifies you that the draft is blank, and gives you an option to cancel the action before anything is passed to 2Do.

![Blank Draft Check](/images/Blank-Draft-Script.jpeg)

_If you have previously downloaded these actions, I recommend deleting the old actions and downloading them from this article so that you have the latest copy._

**Email Checklist**

Checklists are very similar to Projects, but with one key distinction: tasks within a Project can have their own due/start dates, whereas tasks within Checklists cannot. For the [Email 2Do Checklist](https://drafts4-actions.agiletortoise.com/a/1f4) action to work, you need to have the items below the first line in a numbered list in order to capture the tasks within the checklist, so be mindful of that when formatting your note.[^1] Also, using Email 2Do requires the use of the GTD Inbox for capturing incoming email; I suggest you read the [support article](http://www.2doapp.com/kb/article/learn-how-to-capture-emails-as-tasks.html) on 2Do’s website for full setup details of the feature.

![Checklist Format](/images/Example-Checklist-Format.png)

The advantages here are that you don’t have to leave Drafts to send the information to 2Do, and this automatically moves the tasks within a Checklist. I would really like to see Email 2Do get updated to allow for the creation of Projects in the same manner.

**Other Actions Available**

I have some other actions that I still have in my Drafts Action List, but I do not use.

If you have the GTD Inbox enabled in 2Do but do not have the Workflow for iOS, [this action](https://drafts4-actions.agiletortoise.com/a/1cu) is a good option. It takes a single task and places it in the Inbox. But now that I have the Tasks workflow that can handle one or more tasks, I don’t need this option.

Now that I can use Siri to email my Task Assistant and send an individual task to myself with the Email 2Do feature, I don’t use Reminders integration to sync anymore with 2Do.[^2] But for those who _do_ use Reminders integration, [this action](https://drafts4-actions.agiletortoise.com/a/1f5) is great for getting a list of tasks over. This also allows for the `|` delimiter, which in my experience, did not work all the time.

### Drafts Action Set

Now that I have all of these actions in Drafts, I created the [2Do… Action Set](https://drafts4-actions.agiletortoise.com/a/1fh) to contain them all. Now, I have one place to look when I want to send my items to 2Do from Drafts; it doesn’t matter if I’m passing the Note directly to 2Do or if it is going through another app. This streamlines the mental friction for me.

![2Do Action Set](/images/2Do-Action-Set.png)

I’ve improved my routine by following the habitual writing of The Note every day. By utilizing my powerhouse trio of apps to automate my tasks, I can make the Note work for me as another tool in my productivity toolbox .

[^1]: Be sure to change the email in the Drafts Action.

[^2]: I use Dropbox, which gives you full control over the feature set.
