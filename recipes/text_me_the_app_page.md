---
type: recipe
title: Text-Me-The-App page
page_title: Text-Me-The-App web pages for iOS or Android Apps
description: Give your web users the option to text themselves your app with a Text-Me-The-App landing page. Learn how to set up the page and use our code for iOS apps.
android_description: Give your web users the option to text themselves your app with a Text-Me-The-App landing page. Learn how to set it up and use our code for Android apps.
ios_keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, Text-Me-The-App, landing page, SMS, text an app
android_keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views,Text-Me-The-App, landing page, SMS, text an app, Android
hide_platform_selector: true
---

When users click your links on desktop, they have the option to text themselves the app. We provide this by default--just [create a test marketing link](https://dashboard.branch.io/#/marketing) and click it on your computer. You can also use the [code on this page](/recipes/text_me_the_app_page/#sendsms-example) to create your own fully-branded text-me-the-app page. 

_**LEFT:** This default page is provided by Branch. **RIGHT:** This page was created by Drafted and can be viewed [here](http://drft.us/l/5Rfz8GU0yO)._

{% image src="/img/recipes/text_me_the_app/default_and_drafted.png" center alt="Default Page" %}

The two-step setup process is simple:

1. Visit the [Branch link configuration tool](https://start.branch.io/). For `Desktop URL`, enter the page on your site that will include a text-me-the-app option.
2. Use the customizable [code snippet below](/recipes/text_me_the_app_page/#sendsms-example) on any page(s) on your website to allow users to text themselves the app.

{% protip title="Supports international SMS" %}
Branch uses Twilio for our text-me-the-app feature. Thanks to Twilio, users can text themselves your app around the world!
{% endprotip %}

## Web Setup

**TL;DR** -- You can skip to the [code snippet below](/recipes/text_me_the_app_page/#sendsms-example) to implement this feature immediately.

Add the following code somewhere inside the `<head> </head>` tags on your website. Be sure to replace `YOUR-BRANCH-KEY` with your Branch Key inside the `init()` call. You can find your Branch Key on the Dashboard's [Settings page](https://dashboard.branch.io/#/settings).

{% highlight html %}
<script type="text/javascript">
{% ingredient web_sdk/_initialization %}{% endingredient %}
function sendSMS(form) {
  branch.sendSMS(
    phone: form.phone.text,
    {
      channel: 'Website',
      feature: 'Text-Me-The-App',
      data: {
        foo: 'bar'
      }
    },
    { make_new_link: false }, // Default: false. If set to true, sendSMS will generate a new link even if one already exists.
    function(err) { console.log(err); }
  }
});
</script>
{% endhighlight %}


{% ingredient web_sdk/send_sms %}{% endingredient %}
{% ingredient web_sdk/send_sms_example %}{% endingredient %}


{% ingredient web_sdk/referring_link %}{% endingredient %}

## Customizing SMS Messages
{% ingredient dashboard_setup/sms_customization %}{% endingredient %}

## What's next

{% ingredient recipe_preview/app_download_banner %}{% endingredient %}
{% ingredient recipe_preview/easy_deep_linking %}{% endingredient %}
{% ingredient recipe_preview/content_sharing %}{% endingredient %}
{% ingredient recipe_preview/personalized_welcome %}{% endingredient %}
