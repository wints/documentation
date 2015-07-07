---
type: recipe
title: Text-Me-The-App page
platforms:
- ios
- android
---

When users click your links on desktop, they have the option to text themselves the app. We provide this by default--just [create a test marketing link](https://dashboard.branch.io/#/marketing) and click it on your computer. You can also use the [code on this page](/recipes/text_me_the_app_page/{{page.platform}}#sendsms-example) to create your own fully-branded text-me-the-app page. 

_**LEFT:** This default page is provided by Branch. **RIGHT:** This page was created by Drafted and can be viewed [here](http://drft.us/l/5Rfz8GU0yO)._

{% image src="/img/recipes/text_me_the_app/default_and_drafted.png" center alt="Default Page" %}

The two-step setup process is simple:

1. Visit the [Branch link configuration tool](https://start.branch.io/). For `Desktop URL`, enter the page on your site that will include a text-me-the-app option.
2. Use the customizable [code snippet below](/recipes/text_me_the_app_page/{{page.platform}}#sendsms-example) on any page(s) on your website to allow users to text themselves the app.

{% protip title="Supports international SMS" %}
Branch uses Twilio for our text-me-the-app feature. Thanks to Twilio, users can text themselves your app around the world!
{% endprotip %}

## Web Setup

**TL;DR** -- You can skip to the [code snippet below](/recipes/text_me_the_app_page/{{page.platform}}#sendsms-example) to implement this feature immediately.

{% ingredient web_sdk/_initialization %}{% override post_init %}  function sendSMS(form) {
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
{% endoverride %}{% endingredient %}

{% ingredient web_sdk/send_sms %}{% endingredient %}
{% ingredient web_sdk/send_sms_example %}{% endingredient %}


{% ingredient web_sdk/referring_link %}{% endingredient %}

## Customizing SMS Messages
{% ingredient dashboard_setup/sms_customization %}{% endingredient %}
