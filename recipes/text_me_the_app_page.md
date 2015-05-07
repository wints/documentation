---
type: recipe
title: Branded Text-Me-The-App Page
platforms:
- ios
- android
---

When users click your links on desktop, they have the option to text themselves the app. We provide this by default--just [create a test marketing link](https://dashboard.branch.io/#/marketing) and click it on your computer.

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

