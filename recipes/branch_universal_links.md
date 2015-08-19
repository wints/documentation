---
type: recipe
title: "Enable iOS9 Universal Links"
page_title: How To Setup iOS9 Universal Links With Branch
description: "Learn how to enable iOS9 Universal Links on your Branch deeplinks for tracking and deep linking."
keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, Dashboard, iOS9
hide_platform_selector: true
---

With Branch, you can enable Universal Links for your app without all of the complicated server hosting and JSON signing. You simply need to add an entitlement to your app project.

**Note as of 8/18**

We were able to get Universal Links to work in iOS 9 Beta 5, if you'd like to try. You can read a blog post we wrote on the subject [here](https://blog.branch.io/how-to-setup-universal-links-to-deep-link-on-apple-ios-9) for now.

-----

## Important! Pre-requisites for using Universal Links

- Setup your Branch account and link routing for your app at [start.branch.io](https://start.branch.io).
- You must have created your account at developers.apple.com and enabled Associated Domains. You can see [how to do this below](/recipes/branch_universal_links/#background-configuring-developerapplecom). 
- [optional] Configure deep linking {% if page.ios || page.android %}[with our simple guide](/recipes/easy_deep_linking/{{page.platform}}/){% else %}[with our simple guide](/recipes/easy_deep_linking/ios/){% endif %}.

-----

## Enable Universal Links on the Branch dashboard

This section is coming soon. If you [add the entitlement](/recipes/branch_universal_links#add-the-entitlement-in-xcode) by following the instructions below, all of your Branch links will immediately begin to function as Universal Links as soon as your users upgrade to iOS9.

----- 

## Add the entitlement in Xcode

Configuring your app for Branch's Universal Links is very simple. At a high level, you just need to go in and add in the selected `Associated Domains` to your Xcode project.

### Step 1. Enable Associated Domains in Xcode

First, make sure that your Xcode project has the **same Team** selected as where you just [registered your App Identifier](/recipes/branch_universal_links/#background-configuring-developerapplecom). Then go to the `Capabilities` tab of your project file.

Scroll down and enable `Associated Domains` so that the accordion expands.

{% image src='/img/recipes/universal_links/enable_ass_domains.png' half center alt='xcode ass domains' %}

If you see an error like this, make sure:

- that you have the right team selected
- your Bundle Identifier of your Xcode project matches the one used to register the App Identifier

### Step 2: Add in your Branch link domains

In the domains section, add the appropriate domain tags for `bnc.lt` as well as your `white label domain` if you use one. You must prefix it with `applinks:`.

For this example, we've whitelabeled our Branch links with `link.customapp.com`, so we need to add two domains:

- `applinks:bnc.lt`
- `applinks:link.customapp.com`

{% image src='/img/recipes/universal_links/add_domains.png' half center alt='xcode add domains' %}

If you're just using `bnc.lt` for all of your Branch links, you only need to add a single domain:

- `applinks:bnc.lt`

### Step 3: Make sure entitlements file is included

Lastly, for some reason, Xcode 7 did not include my entitlements file in my build after I added it. In the project browser, verify that your new entitlements file is selected for membership to the right targets so that it’s built.

-----

## What's next?

You've got the basics, but let's take your integration to the next level:

{% ingredient recipe_preview/easy_deep_linking %}{% endingredient %}
{% ingredient recipe_preview/content_sharing %}{% endingredient %}
{% ingredient recipe_preview/personalized_welcome %}{% endingredient %}
{% ingredient recipe_preview/referral_links_with_incentives %}{% endingredient %}

_____

## Background: Configuring developer.apple.com

In order to enable your app for Universal Links, you'll need to register your bundle ID for an official App ID and request the `Associated Domains` entitlement. Here's a quick guide:

### Register your app on developers.apple.com

First, head to developers.apple.com and login. Then click on `Certificate, Identifiers & Profiles`, and then click on `Identifiers`. 

{% image src='/img/recipes/universal_links/background_certificates.png' half center alt='apple certificates' %}

If you don’t have a registered _App Identifier_ already, you’ll need to create one by clicking the **+** sign. If you do have one, skip ahead to the next section.

You need to fill out 2 fields here: **name** and **bundle ID**. For name, you basically enter whatever you want. For bundle ID, you’ll fill in the value of the bundle identifer.

{% image src='/img/recipes/universal_links/background_bundle.png' half center alt='bundle identifier' %}

You can retrieve this by looking at the `General` tab of your Xcode project for the proper build target.

{% image src='/img/recipes/universal_links/background_bundle_xcode.png' half center alt='bundle identifier xcode' %}

### Enable Associated Domains for your app on developers.apple.com

For your pre-existing or work-in-progress _App Identifier_, scroll down to the last section and check the `Associated Domains` services.

{% image src='/img/recipes/universal_links/background_ass_domains.png' half center alt='bundle ass domains' %}

Scroll down and click `Save`.

-----

{% ingredient recipe_preview/contact_us %}{%endingredient%}