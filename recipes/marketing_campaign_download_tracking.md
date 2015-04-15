---
type: recipe
title: Marketing Campaign Download Tracking
platforms:
- ios
- android
---

# Marketing Campaign Download Tracking

------

When you complete this guide, you will have the ability to run powerful marketing campaigns with download tracking. You will know how many installs are being driven by word of mouth versus ad campaigns, and how well Facebook does compared to Twitter and SMS. You can do analysis comparing your marketing links to individualized links shared by your users.

One screenshot is worth a million... dollars on spent on non-performant ads and expensive tools to track those ads:

![the goal](/img/ingredients/analytics_and_custom_events/dashboard_summary.png)

Let's get started. Seeing install numbers (as opposed to merely clicks) requires doing some setup both on the Dashboard and within your {{page.platform_formatted}} app.

## Configuring the Dashboard for your {{ page.platform_formatted }} app
{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/web_url %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}
{% ingredient dashboard_setup/uri_scheme %}{% endingredient %}
<!--- /Configuring the Dashboard-->


## Configuring your {{ page.platform_formatted }} app
{% ingredient sdk_setup/installing_the_sdk %}{% endingredient %}
{% ingredient sdk_setup/branch_key %}{% endingredient %}
{% ingredient sdk_setup/uri_scheme %}{% endingredient %}
{% ingredient sdk_setup/init_session %}{% endingredient %}
{% ingredient sdk_setup/handle_deep_link %}{% endingredient %}
<!--- /Configuring the Client-->
