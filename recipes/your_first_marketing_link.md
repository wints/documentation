---
type: recipe
title: Your first marketing link
platforms:
- ios
- android
---

## Link configuration

First, please visit the [Branch link configuration tool](https://start.branch.io/) to setup all the redirection.

## Creating Your Branch Link

{% ingredient dashboard_links/creating_links %}
	{% override title %}{% endoverride %}
{% endingredient %}

{% ingredient dashboard_links/tags %}{% endingredient %}

{% ingredient dashboard_links/alias %}
	{% override optional %}{% endoverride %}
{% endingredient %}

{% ingredient dashboard_links/og_tags %}
{% override screenshot %}{% endoverride %}
{% endingredient %}
{% ingredient dashboard_links/custom_data %}
	{% override advanced %}{% endoverride %}
{% endingredient %}
<!--- /Creating your Link -->


## Conclusion And Next Steps

The Dashboard's [Summary](https://dashboard.branch.io/#) page, specifically the "Click Flow" chart, can now show you meaningful click results! To track downloads and deep link through the install, the next step is [integrating the SDK](/recipes/quickstart_guide/{{page.platform}}/).

{% image src="/img/ingredients/dashboard_links/click_flow_no_sdk.png" 3-quarters left alt="click flow no open/install" %}

