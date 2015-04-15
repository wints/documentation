---
type: recipe
title: Your First Link
platforms:
- ios
- android
---

# Your First Link

------

## Getting Started

Branch Links enable deep linking, install attribution, and in-depth analytics. While configuring your apps--whether Android, iOS or web--enables you to be much more powerful, basic links can be set up before writing a line of code.

You can do this from the [Branch Dashboard](https://dashboard.branch.io/). We will first walk you through creating an app, then proceed to link creation.

## Basic Setup
{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}

That's the end of the required setup for the Dashboard! The dashboard is incredibly powerful, so if you want to dive in deeper, definitely check out [TODO] [Configuring the Dashboard](/ingredients/configuring_the_dashboard/{{ page.platform }}/index.html#advanced)'s advanced configurations.


## Creating your Link

{% ingredient dashboard_links/creating_links %}
	{%override screenshot_description%}One example description if you want to treat this guide is: "Marketing our launch on Facebook."{%endoverride%}
{% endingredient %}

{% ingredient dashboard_links/tags %}{% endingredient %}

{% ingredient dashboard_links/alias %}
	{%override optional%}(Optional -- highly recommended){%endoverride%}
{% endingredient %}

{% ingredient dashboard_links/og_tags %}{% endingredient %}
{% ingredient dashboard_links/end %}{% endingredient %}
<!--- /Creating your Link -->


## Conclusion and Advanced Options

{% ingredient dashboard_links/no_sdk %}{%endingredient%}