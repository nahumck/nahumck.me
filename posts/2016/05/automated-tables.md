---
title: "Automated Tables"
date: "2016-05-29"
categories: 
  - "stories"
tags: 
  - "drafts"
  - "ios_ipados"
  - "workflows"
permalink: "automated-tables/index.html"
layout: "post"
---

When I write most anything, I’m writing in [MultiMarkdown](http://fletcherpenney.net/multimarkdown/). It’s a “superset” of [Markdown](http://daringfireball.net/projects/markdown/), giving you more options to create text formatting with ease: features like tables, [footnotes](https://www.nahumck.me/named-identifiers), and citations are simple to create, but can greatly enhance your writing. The use of tables is a feature that I don’t often use, but probably should. There are many times that I would like to use a table, but I often get the setup wrong and just give up, very frustrated.

(╯°□°）╯︵ ┻━┻

The other day, there was a question posed in the Drafts channel in the AgileTortoise Slack group:[\[1\]](#fn-1 "see footnote")

> I’d like to make an action to create a Markdown table that asks how many columns you want and then asks what to call each column (based one the number of columns you requested). Is this possible?

I thought about this for a little bit, and figured out that while [Drafts](https://geo.itunes.apple.com/us/app/drafts-4-quickly-capture-notes/id905337691?at=1001l4VZ&ct=nahumck_me) would be capable of this with JavaScript (in a way), I could easily solve this with [Workflow](https://geo.itunes.apple.com/us/app/workflow-powerful-automation/id915249334?at=1001l4VZ&ct=nahumck_me).

### Table Format in MultiMarkdown

If you aren’t familiar with creating tables in MultiMarkdown, I highly recommend that you review the [Syntax Cheat Sheet](https://rawgit.com/fletcher/human-markdown-reference/master/index.html). There are some helpful format tips for tables and more, which I will let you figure out on your own.[\[2\]](#fn-2 "see footnote")

Example Table  
| First Header | Second Header | Third Header |
| --- | --- | --- |
| Content | _Long Cell_ |
| Content | **Cell** | Cell |
| New section | More | Data |

The table consists of three areas: the header, separator line, and rows. While the number of columns and rows are user determined, the number of separators must match the number of columns.

One thing that I did learn when coming up with the workflow was how to use the syntax to align the text of the column. By using a colon, you can choose right, left, or center; if you don’t use them, then it chooses default based on your language (e.g. English is a left default). Here is a helpful table that covers how to align the text using the heading separator line:[\[3\]](#fn-3 "see footnote")

  
| Position | Syntax |
| --- | --- |
| Default | `|----|` |
| Left | `|:----|` |
| Center | `|:----:|` |
| Right | `|----:|` |

With this formatting in mind, I can create the workflow.

### Workflow + Drafts Action

I started off by writing a draft with the logical steps I would need to make:

1. Get the UUID of the current draft
2. Ask for the number of columns
3. Ask for the name for each heading
4. Set the separator line
5. Ask for the number of blank rows
6. Export the table to the current draft

Originally, I had a much more complex workflow with less flexibility. But after a bit of time thinking about it, I had a bit of a breakthrough, and cut the steps down by a third. By iterating both the heading and separators in the repeat step, I don’t need to have a special block that creates the separators and merges them together. I also can set the text alignment of each column as I iterate in the repeat step, which I couldn’t do before. Here is the workflow:

[Markdown Table Workflow](https://workflow.is/workflows/a517823a13db47cbab8cad18530a472d)

The Drafts action is pretty easy to create. First, I added an action step to copy the UUID of the draft to the clipboard using the `[[uuid]]` tag. The next step, I use a Run Workflow action step using the name of the workflow “Markdown Table” as the input. Here is the action for the above workflow:

[Markdown Table Drafts Action](https://drafts4-actions.agiletortoise.com/a/1nG)

What if you don’t use Drafts?[\[4\]](#fn-4 "see footnote") I’ve also made a Markdown Table workflow that does not use Drafts as the output, but rather just uses the Share Sheet to send it to the app of choice.

[Share Markdown Table](https://workflow.is/workflows/48fc147590c94a26905a6264782f7ab0)

### Drafts Key

If you don’t have Workflow or don’t want to mess with it, there is another way. [Ciaran Connelly](https://www.twitter.com/cpaconnelly) made an action key to take a list and convert it into a [markdown table](https://drafts4-actions.agiletortoise.com/k/1nB). This takes a list in separate lines and creates the table based on the selection, then leaves you with a starting pipe to fill in the rows.

One clever addition is the inclusion of allowing for the text position by using a text shortcut at the end of the line to position the text. Adding a column to the position table from before, this is what the key will search for on each line:

  
| Shortcut | Position | Syntax |
| --- | --- | --- |
| ,l | Left | `:----` |
| ,c | Center | `:----:` |
| ,r | Right | `----:` |

If there isn’t anything at the end of the line, then it defaults to the left alignment. This works phenomenally well, and is a really well done key. He’s also made a [table cleanup key](https://drafts4-actions.agiletortoise.com/k/1mt); this works only for people that use a fixed-width font like Courier so that the table looks good in plain text too.

![](/images/Drafts-Table-Keys.png)

Cheers to Ciaran for creating these and showing his JavaScript magic.

### Using Tables

Now that the ability to create tables is made easier, what should use use tables for in your life?

One of the things that I have recently created is my “Recurring Charges.md” file. This is where I keep track of all the little subscription payments that we have as a family. This isn’t a list of bills (though I should probably create that in a table as well): this list is keeping track of my online subscriptions so that I can see what things cost me per month or per year, and avoid [subscription exhaustion](http://robmalanowski.com/subscription-exhaustion.html).

  
| Name of Charge | $ / Mo | $ / Yr |
| --- | --- | --- |
| Dropbox | \- | $99 |
| DreamHost | $8 | $96 |
| SSL Cert | \- | $15 |
| Netflix | $12 | $144 |
| Hulu | $8 | $96 |
| Amazon Prime | \- | $99 |
| Apple Music | $15 | $180 |
| iTunes Match | \- | $25 |
| iCloud Storage | $1 | $12 |
| Club MacStories | \- | $50 |
| Totals | $68 | $816 |

Thankfully, I haven’t gone too crazy with my subscriptions and I have room available for things that make sense to me. But it really helps me to visually see where the money is going.

My hesitation with using tables in my journals, posts, or other writing was because of the way the formatting would work; and after researching this, I realize it was my fault for not looking into the syntax enough. Now that I have multiple ways of creating these tables in markdown, I think I’ll use them more often.

┬─┬﻿ ︵ ノ( °‿°ノ)

* * *

2. This group is for use by the users of the betas released by AgileTortoise. [ ↩](#fnref-1 "return to article")

4. There are too many to cover here. [ ↩](#fnref-2 "return to article")

6. because it would be wrong of me not to include a table in a post about creating tables, right? [ ↩](#fnref-3 "return to article")

8. If you don’t use Drafts, I really don’t know what’s wrong with you. Have you seen my site? Seriously, get Drafts. It’s awesome. [ ↩](#fnref-4 "return to article")
