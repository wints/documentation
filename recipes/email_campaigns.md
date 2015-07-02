---
type: recipe
title: Email campaigns
platforms:
- ios
- android
---

## Introduction

Branch Links enable deep linking, install attribution, and in-depth analytics. While configuring your apps--whether Android, iOS or web--enables you to be much more powerful, basic links can be set up before writing a line of code.

You can do this from the [Branch Dashboard](https://dashboard.branch.io/). We will first walk you through creating an app, then proceed to link creation.

## Basic Setup

Note, if you already completed these steps in the guide [Your First Link](/recipes/your_first_marketing_link/{{page.platform}}/), then you can skip down to the next section, [Creating your Link](/recipes/email_campaigns/{{page.platform}}/#creating-your-link).

{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/web_url %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}

That's the end of the required setup for the Dashboard! The dashboard is incredibly powerful, so if you want to dive in deeper, definitely check out [Configuring the Dashboard](/recipes/dashboard_pro_tips/{{page.platform}}/) for the full setup.


## Creating your Link

{% ingredient dashboard_links/creating_links %}
	{% override screenshot_description %}One example description if you want to treat this guide is: "Launch Email".{% endoverride %}
	{% override screenshot %}{% image src='/img/ingredients/dashboard_links/add_email.png' half right alt='Description' %}
	{% endoverride %}

{% endingredient %}

{% ingredient dashboard_links/tags %}
	{% override deep_link_data_url %}For information of the form *[key]*: *[value]* such as "product": "shoes", we recommend adding them below--see [Deep Link Data (Optional)](/recipes/your_first_marketing_link/{{page.platform}}/#deep-link-data).
    {% endoverride %}
    {% override screenshot %}{% image src="/img/ingredients/dashboard_links/tags_email.png" half right alt="Link Tags" %}
	{% endoverride %}

{% endingredient %}

{% ingredient dashboard_links/alias %}
	{% override optional %}(Optional -- highly recommended){% endoverride %}
{% endingredient %}

{% ingredient dashboard_links/og_tags %}{% endingredient %}
{% ingredient dashboard_links/custom_data %}
	{% override advanced %}(Optional){% endoverride %}
	{% override description %}This custom data can be anything you want and is part of Branch's secret sauce. For now you don't need to put anything here. In case you're interested, you add data at the bottom of the link creation process.{% endoverride %}
{% override picture %}{% image src="/img/ingredients/dashboard_links/custom_data_email.png" half right alt="Custom Data" %}{% endoverride %}
{% endingredient %}

This powerful link will now track clicks across platforms. Users who have the app (perhaps you beta testers if you're just launching!) will be linked straight to the app. Users who don't have the app will be taken to the {% if page.ios %}App{% endif %}{% if page.android %}Play{% endif %} Store to download your app. And any users who click this link on Desktop will be given the option to text themselves the app!
<!--- /Creating your Link -->


## Conclusion and Advanced Options

{% ingredient dashboard_links/no_sdk %}{% endingredient %}

{% ingredient recipe_preview/referral_links_with_incentives %}{% endingredient %}
{% ingredient recipe_preview/personalized_welcome %}{% endingredient %}
{% ingredient recipe_preview/influencers %}{% endingredient %}
{% ingredient recipe_preview/channel_tags %}{% endingredient %}
{% ingredient recipe_preview/contact_us %}{% endingredient %}
