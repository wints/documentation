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



## Desktop landing page with SMS

{% image src='/img/overview/how-links-work-3.jpg' half left alt='3' %}

When a user clicks on a desktop, by default, we present them with a page that allows them to resend themselves the link via SMS. Alternately, you can send desktop users to another web page by specifying a value for the key “$desktop_url” when creating a link. In that case, we will redirect users to the value for that key in the link’s data dictionary.

If you want your users to retain the option of sending themselves the link they clicked via SMS, you can still use our [app download banner](/recipes/app_download_banner/ios/) on your web page that shows an app banner with an SMS input, or you can use more advanced Web SDK JavaScript with your own HTML widget. If the user was routed to that Web SDK-enabled site from one of our links, we remember that referring link data and continue the link flow.

## Desktop behavior

