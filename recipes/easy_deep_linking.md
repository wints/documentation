---
type: recipe
title: "Easy Deep Link Routing"
ios_page_title: Simple Deep Link Routing for iOS Apps
android_page_title: Simple Deep Link Routing for Android Apps
ios_description: How to simply add deep linking to your iOS app without complex routing.
android_description: How to simply add deep linking to your Android app without complex routing.
ios_keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, Referral Links, App Invites, iOS
android_keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, Referral Links, App Invites, Android
platforms:
- ios
- android
---

{% ingredient quickstart_preview/quickstart_preview %}{% endingredient %}

iOS and Android both have championed the development of native apps through the process of _storyboarding_ out your views. A storyboard naturally has an entry point and and ending point. To route to the middle of the story and skip the beginning is a completely foreign concept. To make matters worse, you have to restructure a lot of aspects of your app to support it. Maybe you depend on static variables to be initialized at the start, meaning that the app will crash if routing to a later page. Perhaps you need to handle a back button? Do you need to prefill the back stack? What if the app is running in the background and the back stack is filled with a bunch of other views.

It’s complicated. This guide will show you to how setup deep link routing in the simplest possible way.

## Simple Deep Link Routing
