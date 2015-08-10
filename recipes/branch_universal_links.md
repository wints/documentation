---
type: recipe
title: "Enable iOS9 Universal Links"
page_title: How To Setup iOS9 Universal Links With Branch
description: "Learn how to enable iOS9 Universal Links on your Branch deeplinks for tracking and deep linking."
keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, Dashboard, iOS9
hide_platform_selector: true
---

**Note as of 8/9**

Universal Links are still broken in iOS 9 beta versions. More to come as they are fixed in future betas. You can read a blog post we wrote on the subject [here](https://blog.branch.io/how-to-setup-universal-links-to-deep-link-on-apple-ios-9) for now.

## How to Enable Universal Links in Branch for iOS9

With Branch, you can enable Universal Links for your app without all of the complicated server hosting and JSON signing. You simply need to add an entitlement to your app project.

## Pre-requisites

- Setup your Branch account and link routing for your app at [start.branch.io](https://start.branch.io).
- To power deep linking and get the install/open analytics, {% if page.ios || page.android %}[integrate the SDK](/recipes/quickstart_guide/{{page.platform}}/){% else %}[integrate the SDK](/recipes/quickstart_guide/ios/){% endif %}.

## Enable Universal Links on the Branch dashboard

coming soon!

## Add the entitlement in Xcode

coming soon!

## What's next?

You've got the basics, but let's take your integration to the next level:

{% ingredient recipe_preview/easy_deep_linking %}{% endingredient %}
{% ingredient recipe_preview/content_sharing %}{% endingredient %}
{% ingredient recipe_preview/personalized_welcome %}{% endingredient %}
{% ingredient recipe_preview/referral_links_with_incentives %}{% endingredient %}

-----

{% ingredient recipe_preview/contact_us %}{%endingredient%}