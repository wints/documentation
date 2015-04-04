---
type: recipe
title: App Content Share with Deeplink
platforms:
- ios
- android
---

# App Content Share with Deeplink

------

## Configuring the Dashboard for your {{ page.platform_formatted }} app
{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/web_url %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}
{% ingredient dashboard_setup/uri_scheme %}{% endingredient %}

That's the end of the required setup for the Dashboard! The dashboard is incredibly powerful, so if you want to dive in deeper, definitely check out [TODO] [Configuring the Dashboard](/ingredients/configuring_the_dashboard/{{ page.platform }}/index.html#advanced)'s advanced configurations.
<!--- /Configuring the Dashboard-->


## Configuring your {{ page.platform_formatted }} app
{% ingredient sdk_setup/installing_the_sdk %}{% endingredient %}
{% ingredient sdk_setup/branch_key %}{% endingredient %}
{% ingredient sdk_setup/uri_scheme %}{% endingredient %}
{% ingredient sdk_setup/init_session %}{% endingredient %}
{% ingredient sdk_setup/handle_deep_link %}{% endingredient %}
{% ingredient sdk_setup/identify_and_logout %}
	{% override configuring_the_client_identify_and_logout_pre_explanation %}
If you want to know who is sharing your content, whether for internal purposes (i.e. analytics) or for customizing the experience of a user receiving a referral, you'll want to identify your users.
	{% endoverride %}
	{% endingredient %}
<!--- /Configuring the Client-->


## Generating Links

{% ingredient sdk_links/creating_links %}{% endingredient %}
{% ingredient sdk_links/custom_data %}{% endingredient %}
{% ingredient sdk_links/channel %}{% endingredient %}
{% ingredient sdk_links/feature %}{% endingredient %}
{% ingredient sdk_links/alias %}{% endingredient %}
{% ingredient sdk_links/og_tags %}{% endingredient %}
{% ingredient sdk_links/sharing_teaser %}{% endingredient %}
<!--- /Links and Sharing-->

{% ingredient sdk_routing/routing %}{% endingredient %}
<!--- /Routing to Content-->

## Analytics and Custom Events
{% ingredient analytics_and_custom_events/intro %}{% endingredient %}
{% ingredient analytics_and_custom_events/standard_events %}{% endingredient %}
{% ingredient analytics_and_custom_events/custom_events %}{% endingredient %}
{% ingredient analytics_and_custom_events/dashboard_summary %}{% endingredient %}
{% ingredient analytics_and_custom_events/funnels %}{% endingredient %}
<!--- /Analytics and Custom Events-->


<!--- /Influential Users-->
