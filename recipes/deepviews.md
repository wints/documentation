---
type: recipe
title: "Deepviews"
page_title: "Deepviews - Mobile Web Splash Pages"
description: Learn how to create a mobile web deepview using Branch links.
keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views
hide_platform_selector: true
---

A **Deepview** is a mobile web splash page combined with a deep link that will open the app if installed, and fall back to the appropriate app store if not. Here's an example flow:

{% image src='/img/deepviews/deepviews_allthecooks.gif' actual center alt='Deepviews example' %}

Deepviews are discoverable in all search portals (Google, Apple Spotlight, Bing, etc), opening up new mechanisms for people to find your app. Plus, they drive much higher conversions to install instead of sending a user to the App/Play Store directly.

## Pre-requisites

There are a few things to make sure you've done prior to leveraging deepviews

- Setup your Branch account and link routing for your app at [start.branch.io](https://start.branch.io).
- Make sure we've correctly pulled the app icon you want to use in the [settings](https://dashboard.branch.io/#/settings/link).
- *optional* To power deep linking and get the install/open analytics, {% if page.ios || page.android %}[integrate the SDK](/recipes/quickstart_guide/{{page.platform}}/){% else %}[integrate the SDK](/recipes/quickstart_guide/ios/){% endif %}.

## Enabling Deepviews globally

Head to the [Dashboard Deepviews page](https://dashboard.branch.io/#/settings/deepview). It's in the settings tab on side bar.

{% image src='/img/deepviews/deepviews_tab.png' quarter center alt='Deepviews tab' %}

Select the **platform** you want to enable - options are desktop, Android and iOS.

{% image src='/img/deepviews/deepviews_option.png' quarter center alt='Deepviews tab' %}

Choose the template you want to enable and click **Enable**.

{% image src='/img/deepviews/deepviews_enable.png' quarter center alt='Deepviews tab' %}

## Enabling Deepviews per link

If you don't want to enable Deepviews globally, you can do it on a per link basis by inserting custom control parameters into the **data** dictionary.

### Dynamic link control



### SDK/API link control

### Dashboard link control

## Customizing Deepview layouts

## Set up deep link routing

## Analytics

## Advanced: Convert your mobile website into a Deepview

You already have a website and you'd prefer to host the mobile web preview of the content. No problem! You can use the [Branch web SDK](https://github.com/BranchMetrics/Smart-App-Banner-Deep-Linking-Web-SDK/blob/master/WEB_GUIDE.md) to convert your mobile site into a deepview.