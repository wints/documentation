---
type: overview
title: How Branch links work
---

## A Branch link is the only link you need

From supporting Facebook's App Links to smart redirects on all platforms to download measurement, you get it all in the Branch tool. Because every platform or operating system is constantly changing standards, trust us to keep you up to date and insure that you've got a constant flow of new users.

In this guide, I'll explain the high level concepts and how the technology works.

## Supports all standards

As app developers ourselves, _it was really annoying how many different metatags were necessary for links that work everywhere_. We were constantly updating it to support new standards as well. With Branch, we just wanted to make it easy.

### Link display formatting standards

Branch allows you to customize the app default and the settings for each individual link.

- Facebook open graph tags (ogp.me)
	- this covers nearly everything (Slack, Messenger, WhatsApp, etc..)
- Twitter cards
- Pinterest pins

### Deep linking standards

Branch handles all standards adoption automatically for you, so you don't need to do any work.

- Facebook App Links
- Facebook Deferred Deeplinking
- Facebook App Invites
- Apple Spotlight
- Apple Universal Links
- Twitter App Cards (optional)
- Pinterest App Cards (optional)

### App search portals

Branch makes every link scrapable and indexable by the following search engines:

- Google App Indexing
- Bing App Search
- Apple Spotlight Cloud Search

## Smart, contextual redirects

When you're growing your app, you need links that _route your user to the best possible user experience_. This is what Branch links do. Here's a quick diagram to describe how they work. 

{% image src='/img/overview/smart_redirects.png' 3-quarters center alt='2' %}

To summarize the above, Branch handles all the different to take your user to the right place. Here's the breakdown:

- If app **is** installed -> route to _the app_
- If app **is not** installed -> route to _fallback URL_
	- The fallback URL is set as the default to the app store, but can be set to any http URL.

Here is a list of browsers and platforms where we have slaved for many hours to ensure the links still work:

- Email
	- Gmail, Yahoo, etc
- Social networks
	- Facebook, Pinterest, Twitter, etc
- Messaging
	- SMS, MMS, Messenger, WhatsApp, etc 
- iOS browsers
	- Safari, Chrome, etc
- Android browsers
	- Stock, Chrome, Firefox, UC, etc
- Windows mobile OS browsers
- Amazon Kindle, Fire browsers
- Blackberry browsers
- Desktop Chrome, Internet Explorer, Firefox

## Deep linking made easy

To create a deep link, you just need to:

1. Assemble a dictionary of keys and values
	- NSDictionary, JSONObject, json, etc
2. Pass it to Branch
	- SDK, Web SDK, API or dashboard can receive these
3. Branch creates and returns deep link
	- https://bnc.lt/m/12345 or your white labeled http://your.domain.com/m/12345

_After a link is clicked, the Branch deep link handler in your app (native SDKs) or on your website (web SDK) will return the dictionary of keys and values that was mapped to the link._ **We deep link through the app stores** in addition to when the app is already installed. Branch built a complicated [fingerprinting system](/recipes/matching_accuracy/) that allows the link to pass this dictionary of data through any app store.

{% image src='/img/overview/easy_deeplinking.png' half center alt='3' %}

Common keys/values stored in deep link dictionaries:

- data identifiers (user id, article id, photo id, etc..)
- coupon codes
- other metadata that you want to use in the deep link handler

## Deepviews with web SDK

A deepview is a preview outside of app of content that is visible and consumable inside an app. It's usually accompanied by a deeplink that will route the user to that page in the app when clicked. You can use the Branch web SDK convert your mobile website into a deepview. _A deepview should be only shown if the user does not have the app_.

1. Use the [deep linked app banner](/recipes/app_download_banner/ios/)
2. Create your own interstitial and power it with a Branch [link created from the web SDK](https://github.com/BranchMetrics/Web-SDK/blob/master/WEB_GUIDE.md#linkdata-callback)

When a user hits the mobile web deepview, they could arrive there organically or they could be redirected there from a Branch link if you configured the fallback URL to point to the deepview. If they came from a Branch link, the smart banner will automatically use the original link to carry through attribution. If you are powering you own interstitial, you can grab the _referring_link_ from the web SDK initialization.

## Desktop landing page with SMS

No matter how many people use smart phones, you will always have desktop users. If you're an app business, you want to get them to your app quickly. Here are the different options you have:

- (default) all Branch links route to a hosted *SMS to download* feature  
- Use your own desktop website and use the [Branch web SDK](/recipes/text_me_the_app_page/ios/) to power your SMS to download
- Use your own desktop website and [use your own SMS](/recipes/recipes/text_me_the_app_page/ios/#using-your-own-sms-service-advanced) with a Branch link
- Use your own desktop website with our [SMS to download smart banner](/recipes/app_download_banner/ios/#the-smart-banner)

If you use our SMS methods, we will even pay for the Twilio fees. Shh. Don't tell anyone.

{% image src='/img/overview/how-links-work-3.jpg' half center alt='4' %}