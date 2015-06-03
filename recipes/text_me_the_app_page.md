---
type: recipe
title: Text-Me-The-App page
platforms:
- ios
- android
---

When users click your links on desktop, they have the option to text themselves the app. We provide this by default--just [create a test marketing link](https://dashboard.branch.io/#/marketing) and click it on your computer.

#### Default text-me-the-app page

{% image src="/img/recipes/text_me_the_app/default.png" 2-thirds center alt="Default Page" %}

#### Customized text-me-the-app page

Using the code on this page, you can create your own fully-branded text-me-the-app page!

The page below was created by Drafted and can be viewed [here](http://drft.us/l/5Rfz8GU0yO).

{% image src="/img/recipes/text_me_the_app/drafted.png" 2-thirds center alt="Default Page" %}


Better yet, you can completely customize the text-me-the-app page. To do so you must first have an app setup, then you'll need to use our handy Web SDK. Let's check it out!

## Dashboard Setup

{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/web_url %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}
{% ingredient dashboard_setup/custom_landing_page %}{% endingredient %}
{% ingredient dashboard_setup/end_required %}{% endingredient %}


## Web Setup

The Branch Web SDK gives you the ability to quickly build a text-me-the-app feature. First you will need to initialize Branch via a snippet of code, then you will need to invoke the `SendSMS()` method when a user enters his or her phone number.

### Initializing Branch on Your Web Page
{% ingredient web_sdk/_initialization %}{% endingredient %}

{% ingredient web_sdk/send_sms %}{% endingredient %}
{% ingredient web_sdk/send_sms_example %}{% endingredient %}
