---
type: recipe
title: App download banner
ios_page_title: Smart App Download Banner for iOS Apps
android_page_title: Smart App Download Banner for Android
ios_description: Insert this short code snippet to add a smart app download banner to both your desktop and mobile web pages and drive iOS app downloads.
android_description: Insert this short code snippet to add a smart app download banner to both your desktop and mobile web pages and drive Android app downloads.
ios_keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, Smart Banner, App Download Banner, Banner
android_keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views,Smart Banner, App Download Banner, Banner
hide_platform_selector: true
---

The mobile web smart banner is a powerful tool--it brings users in from the web experience where they are more easily lost, to your native mobile experience. On desktop, the banner can even drive users to mobile via our text-me-the-app function.

First, make sure you've configured your links on the Dashboard using the [Branch link configuration tool](https://start.branch.io/), then check out the code below.

If you also want to pass data through the install process or deep link straight to content, check out the optional 2nd section, [Routing: passing information from the Banner](/recipes/app_download_banner/#optional-routing-passing-information-from-the-banner).


## The Smart Banner
{% ingredient web_sdk/smart_banner %}{% override header %}{% endoverride %}{% endingredient %}
{% protip title="Deeplinking through Install" %}
This data dictionary containing `foo: 'bar'` etc is where you put data that you want passed through install. This is discussed in the next section on [Routing](/recipes/app_download_banner/#optional-routing-passing-information-from-the-banner).
{% endprotip %} 

#### Styling the banner using the custom css property
Set the `iframe` property to false to inspect the Smart Banner's html structure and use the `customCSS` property to style its elements. 

Property Syntax: 

`customCSS : '#div and or .classname {property-to-style:value;}'`

Examples:

To set the color of title text to red use: `customCSS:'.title{ color: #F00; }'`

To set the background color of the entire Banner to green use: 

`customCSS:'#branch-banner .content{background-color:green;}'`

## (Optional) Routing: passing information from the Banner

Now that you've added routing to your app, you can add information to the Smart Banner. If you've used the example Smart Banner code [above](/recipes/app_download_banner/#the-smart-banner), you simply need to insert any key-value pairs you'd like into the data dictionary.

Using our example of routing above with the PicVC, you'd simply need to change the Web Banner code to the following:

{% highlight javascript %}
branch.banner(options, {
    phone: '9999999999',
    type: 1,
    data: {
        'pictureId': '12345',
    }
});
{% endhighlight %}

Now when a user clicks on the Smart Banner on a mobile device, when they open your app they will be taken straight to a view controller to see picture with id "12345". It's that simple.

Deep linking has countless possibilities and we'd be happy to brainstorm use cases for your specific app.

## (Optional) Events: Listening for Banner specific events

If you would like your app to listen for and react to Banner events, the Web SDK includes a simple event listener that currently only publishes events for Branch.banner() events.

Available Branch.banner() Events include:

- **willShowBanner**
- **willNotShowBanner**
- **didShowBanner**
- **willCloseBanner**
- **willSendBannerSMS**
- **sendBannerSMSError**
- **didSendBannerSMS**

Here's an example of listening for the **willShowBanner** event:

{% highlight javascript %}
var listener = function(event) { console.log(event); }
branch.addListener('willShowBanner', listener);
branch.banner({
    icon: 'http://icons.iconarchive.com/icons/wineass/ios7-redesign/512/Appstore-icon.png',
    title: 'Branch Demo App',
    description: 'The Branch demo app!'
}, {});
{% endhighlight %}

Now you can adjust your page's CSS when the Banner is about to be displayed. 

For more information on Banner events, please visit our [web guide](https://github.com/BranchMetrics/Web-SDK/blob/master/WEB_GUIDE.md#addlistenerevent-listener)!



## What's next

{% ingredient recipe_preview/easy_deep_linking %}{% endingredient %}
{% ingredient recipe_preview/personalized_welcome %}{% endingredient %}

-----

{% ingredient recipe_preview/contact_us %}{% endingredient %}
