---
type: reference
title: Developer Updates
platforms:
- android
---

{% protip title="This is in beta" %}
This site is in beta. We are working hard to get a more coherent set of docs that will scale with you, our developers. This page, Developer Updates, complements [status.branch.io](https://status.branch.io) and will provide important updates.
{% endprotip %}


## 2015-5-5 Facebook Updates

Facebook has made a couple of changes in the past two weeks that may impact you. 

**First**, Facebook is starting to reject links to pages whose og:image tag points to an image hosted on _some_ S3 buckets. This isn't necessarily all S3 buckets, but we've noticed multiple buckets (both our own and our partners) end up on some sort of "blacklist". This only applies to Facebook's OG tag scraper. Sharing the pictures themselves wasn't an issue.

It sounds odd, but it resulted in these posts being marked as spam or missing the preview image. We have already pushed a change to our backend and moved all images to a new location, so any links you generate with us going forward should be good to go. *Any links previously shared to Facebook may need to be scraped again via the Facebook Object Debugger--if you plan to reuse those links.* Past shares are not impacted, and non-cached links are not impacted.

This issue manifests itself two different ways, depending on where the page was shared. If shared on **desktop**, the user has to verify that they are human before posting (done by selecting certain images). If shared on **mobile**, no verfication is done but then the link is marked as spam and anyone clicking on the link will be warned about "Leaving Facebook".

![Leaving Facebook](/img/reference/developer_updates/leaving_facebook.png)

**_Action:_** if you have images hosted on S3 that are referenced by an og:image tag, go to the Facebook Object Debugger, check the scraped information for those pages with the og:image tags, and re-scrape if necessary. If you are able to share links via desktop web without having to verify that you are a human (you'll know), you're not impacted.

**Second**, Facebook's latest app update on iOS pushed some sort of change that impacts the UIActivityViewController. Facebook no longer allows NSStrings to be shared. Our Branch-provided subclass of UIActivityItemProvider returned an NSString as a placeholder, so the Facebook option stopped showing up at all in the UIActivityViewController. We just pushed a fix to the SDK so that the placeholder item is an NSURL.

Related, even with an NSURL, you can no longer pre-populate text when sharing to Facebook via the UIActivityViewController. Any strings passed in will be ignored. This has apparently been a violation of Facebook's Terms of Service but they weren't enforcing it on iOS up until now.

**_Action:_** if you use the Branch UIActivityItemProvider, *update your iOS SDK to the latest version*. If you use normal UIActivityItemProviders, make sure at least one of them returns an NSURL as *both the placeholder and the item*, otherwise your users will not be able to share to Facebook.

Please let us know if you have questions -- support@branchmetrics.io.

