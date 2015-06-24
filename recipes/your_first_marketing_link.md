---
type: recipe
title: Your first marketing link
platforms:
- ios
- android
---

## Getting Started

Branch links can be created and shared without writing a line of code. Once you've built a link, we'll walk you through [installing the Branch SDK](/recipes/quickstart_guide/{{page.platform}}/) for powerful data insights.

Please log in to the [Branch Dashboard](https://dashboard.branch.io/). First, enter a little information about your app and where to send users on different platforms, then we'll generate the link.

## Basic Setup
{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/web_url %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}

That's the end of the required setup for the Dashboard! The dashboard is incredibly powerful, so if you want to dive in deeper, definitely check out [Dashboard pro tips](/recipes/dashboard_pro_tips/{{page.platform}}/) for the full setup.



## Creating Your Branch Link

{% ingredient dashboard_links/creating_links %}
	{% override screenshot_description %}One example description if you want to treat this guide is: "Marketing our launch on Facebook."{% endoverride %}
{% endingredient %}

{% ingredient dashboard_links/tags %}
	{% override deep_link_data_url %}For information of the form *[key]*: *[value]* such as "product": "shoes", we recommend adding them below--see [Deep Link Data (Optional)](/recipes/your_first_marketing_link/{{page.platform}}/#deep-link-data-optional).
    {% endoverride %}
{% endingredient %}

{% ingredient dashboard_links/alias %}
	{% override optional %}(Optional -- highly recommended){% endoverride %}
{% endingredient %}

{% ingredient dashboard_links/og_tags %}{% endingredient %}
{% ingredient dashboard_links/custom_data %}
	{% override advanced %}(Optional){% endoverride %}
	{% override description %}This custom data can be anything you want and is part of Branch's secret sauce. For now you don't need to put anything here. In case you're interested, you add data at the bottom of the link creation process.{% endoverride %}
{% endingredient %}
{% ingredient dashboard_links/end %}{% endingredient %}
<!--- /Creating your Link -->


## Conclusion And Next Steps

You now have a link that will track clicks based on the channel, campaign and any other tags you create. {% section alias %}It has a custom ending (as opposed to random characters).{% endsection %} It's properly formatted for social media.

The Dashboard's [Summary](https://dashboard.branch.io/#) page, specifically the "Click Flow" chart, can now show you meaningful results! Note all the filters in the screenshot below:

The next step is [integrating the SDK](/recipes/quickstart_guide/{{page.platform}}/) where we'll set up deeplinking and collect statistics on app installs and opens. 

{% image src="/img/ingredients/dashboard_links/click_flow_no_sdk.png" 3-quarters center alt="click flow no open/install" %}

