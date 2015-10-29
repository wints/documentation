---
type: recipe
title: "Google App Indexing"
page_title: "Index and track your content with Google's App Indexing"
description: Learn how to list your content in Google's App Index.
keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, iOS9, iOS 9, Apple Spotlight Search
hide_platform_selector: true
---
# Google App Indexing via Branch Metrics

Branch automatically makes your deeplinks crawlable by Google so your content can appear in Google's app index.  There is no additional configuration required. If you're looking for a how-to guide, congratulations - if our SDK is integrated you're already done!  

If you'd like to know more about how we make this happen, read on.

## Google's Web Content Requirement
Per [Google's requirements](https://developers.google.com/app-indexing/android/app): "Participating in App Indexing currently requires that your app has corresponding content on the web that has also been indexed by Google. If you have an app without corresponding web-page content."  

Branch abstracts every mobile deep link to an https url that we use to store all the relevant meta tags and which is crawlable by Google, satisfying this requirement.  

The goal of Google's implementation here is to tie together mobile web and mobile app content so they can use mobile web content (which is accessible to their spiders) to index the mobile app content (which is not).  

Branch accomplishes the same goal but more directly by starting with your mobile app content, mapped through our SDK.  We then create http links to that content that are indexable by Google, and which dynamically redirect end users either to the content in your app if they have the app installed or to your choice of fallback experiences if they do not.  

This is preferable to following their suggested implementation and tying your app content directly to your mobile web content because we allow you to customize end user routing.  You can show a Deep view, send the user to the website, use our text me the app feature if they're on desktop, or route end users directly to the app store.

## What we embed

The requirements for what needs to be on our abstracted http page are very simple - and are actually the same as for our integrations with Facebook and Twitter.  We use the Open Graph (OG) tags you populate as part of your Branch SDK integration to populate:

 - Title: The title of the content you're pointing to
 - Description: A short description of the content, ideally something you've optimized for search and social
 - Picture: A preview image for that piece of content.

 We also embed a deep link url that will launch the appropriate content in your app.

 With these four pieces of data in place your content is ready to be indexed, searched, and shared.