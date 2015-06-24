---
type: recipe
title: "Integrating the SDK"
platforms:
- ios
- android
overview: "This quick-start guide will walk you through the minimum setup for an SDK integration. With only a few lines of code you'll have the ability to track installs by platform, campaign, etc. You can then also create links from the dashboard or add another line of code to programmatically create links via the SDK."
---
{% protip title='Skip a beat' %}If you've completed [Your first marketing link](/recipes/your_first_marketing_link/{{page.platform}}/) then you can skip straight down to [URI Scheme](/recipes/quickstart_guide/{{page.platform}}/#uri-scheme){% endprotip %}

## Configuring the Dashboard for your {{ page.platform_formatted }} app
{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/web_url %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}
{% ingredient dashboard_setup/uri_scheme %}
  {%override client_uri %}For more details on finding/setting your URI scheme in the client, see the section below on [setting the client app's URI scheme](/recipes/quickstart_guide/{{page.platform}}/#uri-scheme-1).{%endoverride%}
{% endingredient %}
{% ingredient dashboard_setup/end_required %}{% endingredient %}
<!--- /Configuring the Dashboard-->



## Configuring your {{ page.platform_formatted }} app
{% ingredient sdk_setup/installing_the_sdk %}
  {% override telephony %}[here](/img/ingredients/configuring_the_client/ios_core_telephony.gif).{% endoverride %}
{% endingredient %}
{% ingredient sdk_setup/branch_key %}{%override screenshot%}{%endoverride%}{% endingredient %}
{% ingredient sdk_setup/uri_scheme %}
  {%override dashboard_uri %}For more info on setting up a URI scheme on the Dashboard, check out the [section above](/recipes/quickstart_guide/{{page.platform}}/#uri-scheme).{%endoverride%}
{% endingredient %}
{% ingredient sdk_setup/init_session %}{% endingredient %}
{% ingredient sdk_setup/handle_deep_link %}{% endingredient %}
{% ingredient sdk_setup/identify_and_logout %}
  {% override header %}###Identifying Your Users (Optional but recommended){% endoverride %}
  {% override pre_explanation %}
  If you want to know who is sharing your content, whether for internal purposes (i.e. analytics) or for customizing the experience of a user receiving a referral, you'll want to identify your users.
  {% endoverride %}
{% endingredient %}
<!--- /Configuring the Client-->


## Creating Links Programmatically (Optional)

{% ingredient sdk_links/creating_links %}{% override header %}{% endoverride %}{% endingredient %}

{% protip title="Data is for Deeplinking" %}
You can also use the data to link directly to content! Instead of "foo": "bar", you could pass in "{% if page.ios %}pictureId{% endif %}{% if page.android %}picture_id{% endif %}": "1234", then when a user clicks on a link you can open the app straight to picture with Id 1234. Keep reading...
{% endprotip %}

## Routing within your {{page.platform_formatted}} App (Optional)

{% ingredient sdk_routing/routing %}{% endingredient %}


## Conclusion

Congratulations! You're now up and running with Branch. To finish up, we'll walk you through the data you're seeing in your dashboard in [Link and Install Attribution](/recipes/measuring_installs/{{page.platform}}/).

{% ingredient recipe_preview/contact_us %}{%endingredient%}

