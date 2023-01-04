---
title: "#ShotOniPhone Shortcut"
date: "2019-01-25"
categories: 
  - "apps"
tags: 
  - "ios_ipados"
  - "shortcuts"
  - "workflows"
permalink: "shotoniphone-shortcut/index.html"
layout: "post"
---

Today, Greg Pierce posted a tweet about the new [#ShotOniPhone Challenge](https://www.apple.com/newsroom/2019/01/share-your-best-photos-shot-on-iphone/):

<blockquote class="twitter-tweet" style="text-align: center;"><p dir="ltr" lang="en" style="text-align: center;">My favorite part of this <a href="https://twitter.com/hashtag/ShotOniPhone?src=hash&amp;ref_src=twsrc%5Etfw">#ShotOniPhone</a> contest announcement is the specification of a file naming convention.</p><div></div>I bet less than 0.1% of iPhone owners know how to save a photo as a file, rename it, and attach the renamed version to an email.<a href="https://t.co/1DOwvaOjvh">https://t.co/1DOwvaOjvh</a> <a href="https://t.co/7C0Yh5xxlz">pic.twitter.com/7C0Yh5xxlz</a><p></p><p style="text-align: center;">— Greg Pierce (@agiletortoise) <a href="https://twitter.com/agiletortoise/status/1088424296609955840?ref_src=twsrc%5Etfw">January 24, 2019</a></p></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Rene Ritchie followed up with this tweet:

<blockquote class="twitter-tweet" style="text-align: center;"><p dir="ltr" lang="und" style="text-align: center;"><a href="https://twitter.com/hashtag/ShotOniPhone?src=hash&amp;ref_src=twsrc%5Etfw">#ShotOniPhone</a> <a href="https://twitter.com/hashtag/RenamedOnMac?src=hash&amp;ref_src=twsrc%5Etfw">#RenamedOnMac</a></p><p style="text-align: center;">— Rene Ritchie (@reneritchie) <a href="https://twitter.com/reneritchie/status/1088425856656162816?ref_src=twsrc%5Etfw">January 24, 2019</a></p></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

And my reply:

<blockquote class="twitter-tweet" style="text-align: center;"><p dir="ltr" lang="und"><a href="https://twitter.com/hashtag/ShotOniPhone?src=hash&amp;ref_src=twsrc%5Etfw">#ShotOniPhone</a> <a href="https://twitter.com/hashtag/RenamedViaShortcuts?src=hash&amp;ref_src=twsrc%5Etfw">#RenamedViaShortcuts</a></p>— Tim Nahumck (@nahumck) <a href="https://twitter.com/nahumck/status/1088511732237111296?ref_src=twsrc%5Etfw">January 24, 2019</a></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

When I first saw Rene's tweet, I knew he was being snarky. However, my first thought went to Shortcuts when I saw it (hence my tweet). Renaming of files on iOS is a perfect use case of Shortcuts. But rather than stop at just simply renaming a file, it's possible to submit the entry all with a couple of taps on iOS. And now that I've said that you can do it with Shortcuts, I figured I should make one if I'm going to put out the thought. So, with a little bit of work, I created the [#ShotOniPhone](https://www.icloud.com/shortcuts/de2420ea82e140adbbfdc57ce6415721) shortcut.

When you install it, you'll be prompted to input your first and last names: these items are required for the file name if you are going to email in the submission. Once you've entered that information, you can either run this as a stand alone shortcut or as an extension from the Photos app.

The first part of the action checks to see if any images were input, and if not, prompts you to select an image; I've used this little block countless times in other shortcuts, and copied the same method here. Next, you'll be prompted for an image caption to go with the perfect #ShotOniPhone image. Then, the image will be given a new file name – which Apple requires for the email submission portion – using the dictionary items you were prompted for when first installing the shortcut and pulling the device type from the image metadata itself.[^1]

Finally, there are a few options for submission: Twitter, Instagram, or email.[^2] You'll select which one you would like to choose, and follow the steps from there. (For the Instagram step, it is important to note that the caption is copied to the clipboard and you will have to manually paste it in caption area of the app.) Each method passes the image in its full resolution to the application of choice; I'd recommend email as the first submission, as Twitter and Instagram will likely compress the image.

[![](/images/ShotOniPhone-Shortcut-110x1024.png)](https://www.nahumck.me/wp-content/uploads/2019/01/ShotOniPhone-Shortcut.png)

And that's it! This shortcut may seem complex, but it's really simple to run once you get it installed. Not only does it rename the photo for you, it also helps you submit your photo to the challenge. Now anyone can shoot and submit to this #ShotOniPhone Challenge, all from their iPhone. Turns Out™, you don't need a Mac to do it after all…

[^1]: This was suggested by [Thomas Verschoren](https://www.twitter.com/tverschoren), and I've updated the shortcut to reflect this. Thanks for the suggestion!

[^2]: Weibo is also a part of this, but I don't have the ability to add the action. So… maybe someone else can add it.
