---
title: "Building Projects in 2Do"
date: "2016-01-17"
categories: 
  - "apps"
tags: 
  - "ios_ipados"
  - "workflows"
permalink: "building-projects-2do/index.html"
layout: "post"
---

Earlier this year I experimented with several task management systems (TMS) for iOS to help me get better organized for both home and work. After a lot of trial and deliberation, I finally found a home in [2Do](https://geo.itunes.apple.com/us/app/2do/id303656546?mt=8&at=1001l4VZ&ct=nahumck_me "2Do"). Now that I am deeply rooted in my app of choice, I wanted to start getting smarter about getting things done for work. There are projects, both large and small, that I have to manage:

1. Programs
2. Compliance Reports
3. Mundane Reports [^1]
4. Weekly Checklists

And while each of these types have varying levels of importance and complexity, how I input them can be the same by using some powerhouse apps on iOS. Let me show you how I integrate [Drafts](https://geo.itunes.apple.com/us/app/drafts-4-quickly-capture-notes/id905337691?mt=8&at=1001l4VZ&ct=nahumck_me "Drafts"), [Workflow](https://geo.itunes.apple.com/us/app/workflow-powerful-automation/id915249334?mt=8&at=1001l4VZ&ct=nahumck_me "Workflow: Powerful Automation Made Simple"), and [2Do](https://geo.itunes.apple.com/us/app/2do/id303656546?mt=8&at=1001l4VZ&ct=nahumck_me "2Do") to help me input these projects with ease.

Typically, at the start of the program, I will make a specific list for it. For this example, I’ve created a list called “Post Examples” in 2Do.

![](/images/Project-List-Setup.png)

With the list set up, now I can start placing items into the list as normal. But say I’m in a meeting. I need to have something that can take my meeting minutes, and create actions inside of the list and/or a project. For that, I turn to the power of Drafts & Workflow.

For most meetings, I’ll start off by creating a new Draft using the help of a [meeting notes workflow](https://workflow.is/workflows/a84401c608b7430d91c8bad7843ede46). This workflow allows me to select the current meeting, and automatically set up a Draft with a number of parameters.

![](/images/Tax-Meeting-Setup.png)

After I have input the action items, I can select them and create a new Draft based on the selection by tapping the “+” in the upper left. Once these action items are in a new Draft, I can manipulate the text and format it into `Task` `|` `Notes`, using the `|` for a notes delimiter if I need to expand my thoughts on a given task.[^2]

![](/images/Tax-Actions.jpeg)

As you can see from this \[obviously fake\] meeting, I have a lot of actions given to me from this one meeting; if I had a single action to move into a task, I would use one of a number of ways to move it to as specific list or the Inbox within 2Do. But because all of the actions help complete this task, I want to set this up as a project; moving each of them individually would be a pain using the share sheet. I don’t use Reminders integration for 2Do, so I cannot use a Drafts action to move them over to a list via Reminders.

But I can easily solve this with automation using Drafts & and Workflow. First I set up [this action](https://workflow.is/workflows/6ace57580df04c0c832e0868ff53856c) in Workflow to take the first line from the clipboard, separate the `Project Name` and `Project Notes` at the `|` delimiter, and save that as the Project. Then, it takes every line after that, separates the `Task Name` and `Notes` at the `|` delimiter, and saves it as a Task in 2Do.

![](/images/Project-Workflow.png)

Next, you need to download [this action](https://drafts4-actions.agiletortoise.com/a/1eN) for Drafts. This copies the first line (`[[title]]`) to the system clipboard then passes the remaining list (`[[body]]`) to Workflow as text.

![](/images/Drafts-Project-Action-Setup.png)

At first, I ran into a scenario where the `Task Name` would be repeated as `Notes` if there were no notes on the line. I did end up fixing it by placing an `if` statement that checks if `Notes` equals the `Task Name`. Now if there are no notes, the tasks are entered with an intentionally blank note, which 2Do ignores.

![](/images/TPS-Report-Example.jpeg)

There are a lot of things you can use like `Start`/`Due` dates, `Priority`, `Tags`, etc. when you run the workflow. While this doesn’t suit my needs for what I’m looking for, it can be changed for your needs as you see fit.

Now that the project and all of the tasks have been entered into the specified list, we can go into 2Do and use the Batch Edit function that makes it so powerful. Simply activate Batch Edit in the upper right, select the tasks you want to move, and then move them inside the project.

![](/images/Batch-Editing.jpeg)

The batch editing feature of 2Do is top notch; it was one of the biggest items that pushed me towards 2Do over other TMS apps. It makes moving the tasks into a project or checklist very easy. But one improvement that I would like to see is the ability to move the tasks _into_ the project using Workflow. There is some documentation on the 2Do website, but it is not clear on how to implement it and I have not found a way to use it. I have asked the developer of 2Do and Workflow to take a look at how to integrate this easier.

Another thing that I would like to see from 2Do here: the ability to have checklists inside of projects. (I used [MindNode](https://geo.itunes.apple.com/us/app/mindnode-delightful-mind-mapping/id312220102?mt=8&at=1001l4VZ&ct=nahumck_me) to show this visually.) Below, you can see the current state of how Lists, Projects, Checklists, and Tasks exist in the app. But I would really like it to become more nested, as shown below.

![](/images/Project-Layers.png)

For big projects, having checklists nested inside of a specific task would be a welcome addion to the already powerful task manager.

As part of my job, there are times that reports have very similar tasks associated with each, but may have a different project title. This workflow can help by keeping the Draft available for future use using the workflow, or by creating a project template in a specified list.

Another clever way to use lists would be to store specific project templates into a separate list (called Templates, perhaps), then select the project template and copy it to a new list. Currently, if you do this at the project/checklist level, it will only copy the project; I would love to see this behavior change to copy all of the subtasks within the project. If that was available, all I would need to do is simply save a copy, then edit the title and assign a date, and I have everything I need to ensure that I’m getting that small, repeating project/checklist done. By creating these templates, so much time can be saved for the future.

These workflows have allowed me to take notes from a meeting and turn them into actionable items that I can use to get things done at work. They have allowed me to create numerous project templates for future use. From the large project to the simple checklist for the day, I can manage everything I need by using these actions.

* * *

_Note: I’ve updated the actions and placed them all into one post. You can find that [here](https://www.nahumck.me/2do-workflows)_

[^1]: let’s call these TPS reports for now

[^2]: A delimiter is something that splits a line. This can be changed to suit your preferences, such as a comma
