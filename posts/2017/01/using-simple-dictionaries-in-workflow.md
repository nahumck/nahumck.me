---
title: "Using Simple Dictionaries in Workflow"
date: "2017-01-13"
categories: 
  - "apps"
tags: 
  - "ios_ipados"
  - "shortcuts"
  - "workflows"
permalink: "using-simple-dictionaries-in-workflow/index.html"
layout: "post"
---

[![](/images/Workflow-Array-Feature.jpeg)](/images/Workflow-Array-Feature.jpeg)

Normally when I have an idea, I'll write about it. This past time, I decided to do something a bit different, and write more about [how I felt](https://www.nahumck.me/gaining-experience/ "Gaining Experience") rather than explain it. But, I also realize that this new-to-me idea might need a bit of help and guidance for those that aren't well versed in the subject, like me. So I'll do my best here to explain.

Full disclosure: I'm not a programmer, I'm not a developer, I'm not an expert. So don't rely on this post for complex methods.

### Dictionaries

In simple terms, dictionaries are a place to store information in a tabular-like format, similar to a database or an array.[1](#fn1) The difference with dictionaries is that they use key/value pairs: using "keys", you can call specific "values" for each item. An example of something you might want to put into a plain-text dictionary would be a rating system:

  
| Rating | Number |
| --- | --- |
| Poor | 1 |
| Marginal | 2 |
| Acceptable | 3 |
| Good | 4 |
| Best | 5 |

If you are given a descriptor of "Acceptable", you can understand this numerically on a 1-5 scale. Using a table is great for viewing. But if you want to actually _use_ that data, then changing the table to a plain-text dictionary will allow you to pull information out of it based on a search string.

### Entering Dictionaries

Plain-text dictionaries follow the following format:

{"key 1":"value 1",
"key 2":"value 2",
.
.
.
"key n":"value n"}

For every line, you'll need to follow the quotes, colons, and commas exactly as above for it to work.[2](#fn2) So for the example Markdown table above, I can write that in plain text like so:

{"Poor":"1",
"Marginal":"2",
"Acceptable":"3",
"Good":"4",
"Best":"5"}

Once you have everything in that format, you can place this simple dictionary either as a text block or a `.txt` file that you can call out of iCloud Drive or Dropbox in Workflow.

[Workflow](https://geo.itunes.apple.com/us/app/workflow-powerful-automation/id915249334?mt=8&uo=4&at=1001l4VZ&ct=ntwitter "Workflow on the App Store") also has the capability of entering in a dictionary. Workflow asks for different types of values; it can get complex, and I'm not going to cover that here. But to enter this simple dictionary, we can use the `Dictionary` step as follows:

![](/images/Workflow-Dictionary-Input.jpeg)

Once completed for any of the methods — `Text` `Get File` or `Dictionary` action blocks — be sure to include a `Set Variable` step so that you can call it later.

Personally, while Workflow is very powerful for this type of thing, I would prefer to enter my dictionaries in plain-text form. This allows me to duplicate workflows more easily while calling a different directory. It also means that I can edit them quickly in a text editor like [Drafts](https://geo.itunes.apple.com/us/app/drafts-quickly-capture-notes/id905337691?mt=8&uo=4&at=1001l4VZ&ct=ntwitter "Drafts on the App Store") and save them. What I do for files in Drafts is use the `[[title]]` for the name of the file and `[[body]]` for the dictionary, like so:

![](/images/Workflow-Drafts-Array-Entry.jpeg)

### Pulling Out Information

Now that the dictionary is set, we can pull out specific information. For example, you can call out a list of the keys you have stored in the dictionary. Once the dictionary is called using the `Get Dictionary From Input` step, place a `Get Dictionary Value` block with `All Keys` selected. What this will do is provide a list of the keys, which you can call using a `Choose From List` block. One thing that calling dictionaries doesn't do well is give you the values the way you have them stored. For example, the stored rating list is presented like so:

![](/images/Rating-System-List.jpeg)

The list is out of order. Unfortunately this is an inherent thing with dictionaries, and slightly aggravating to someone like myself who likes things orderly. However, there is a small thing that can be done: using a `Filter Files` block after the `Get Dictionary Values`, you can sort by `Name` and select `A → Z`; this sorts the list alphabetically, which is more helpful to find what you're looking for instead of a random list.

![](/images/Filter-Files-Block-Sort.jpeg)

Then, set that chosen value as a variable. This will become the variable that you look up in the dictionary. Use the `Get Variable` and `Get Dictionary From Input` blocks to call it again, along with a `Get Dictionary Value`. This time, however, use `Value` and put in your search variable in the `Key` field. This will search the dictionary for the given key, and give you the value associated with it. What you do with that value is up to you.

Here is the [rating system workflow](https://workflow.is/workflows/6b946072d5244ec7b985bc7aa93034b3 "Rating System Workflow") in its entirety:

![](/images/Rating-System-Workflow.jpeg)

Say I switch companies and start using a different rating scale that goes from 1 - 10, along with a change in descriptors. I can simply go to my draft, edit the plain text, save the file, and I'm all set; there's nothing to change in the workflow.

### Reminders Example

I've been using Reminders a lot more lately for tasks. The Siri input is really great from the iPhone and the Watch. But there are times that I need to be silent, and can't say "Siri, remind me to \[do something\] when I get \[home/work/etc\]." I've been using [this workflow](https://workflow.is/workflows/b7231e76075d4899afa4ae31753275f4 "Reminder workflow") for a while to do just that.

However, I can have one master contact file for frequent addresses I might need, and use it for two purposes:

1. A [Route to Address](https://workflow.is/workflows/a9a5af2c216941a39384b65efa2e641e ""Route to Address…" Workflow") workflow that allows me to select a location, and route directly there.
2. Use that same location file to select a location for use in a [modification of the Reminders workflow](https://workflow.is/workflows/d70f116c25364396b6e83b70bb78ed65 "Reminders") above.

While these workflows are different in what they produce, at the core, they call the same information to be used in different ways.

![](/images/Address-Array-Workflows.jpeg)

### Advantages

Through the Reminders example, you can start to realize the big benefit of using the plain-text dictionaries stored in your file system: using one file in multiple workflows.[3](#fn3) I can change the text file one time, and my workflows will pull in the updated information when it runs. Did one of the frequent addresses change? Edit in one place, use in multiple workflows, all with minimal effort. For automation, a write-once-use-anywhere mentality is ideal.

If I move or change roles at work, things that I regularly access are easily modified by typing, instead of duplicating the work again in another workflow. Need to add or change an address? An email address? Or maybe add or change [phone number](https://workflow.is/workflows/2563ac9600dc4ba5b474f3e7f80f545a ""Call…" Workflow")? Type in the change to your text file, save the file to your system of choice, and you're done.[4](#fn4)

When I [worked with Seth](http://sethclifford.me/2017/01/using-drafts-and-workflow-as-a-clipboard-manager/ "Using Drafts and Workflow as a Clipboard Manager") on creating some workflows, I didn't realize that it would allow me to expand what I'm doing with Workflow. I plan to explore further, perhaps going deeper into more complex dictionaries. But that time will come. For now, using these simple dictionaries to give me the flexibility to create has been fun. I hope you enjoy them as well. If you come up with something cool, [hit me up](mailto:tim@nahumck.me).

1. Note: the dictionaries mentioned here are JSON. [↩](#ffn1)
2. One thing that tripped me up was putting a comma at the end of the last line. If you do that, nothing gets passed into the dictionary, and your workflow will crap out. If you experience that error, check it out. [↩](#ffn2)
3. I do wish, however, that I could copy a block of commands from one workflow to another. Looking at you, Workflow 2.0… [↩](#ffn3)
4. Just make sure you follow the syntax from above. It does require a bit of caution, after all… [↩](#ffn4)
