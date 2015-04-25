---
type: recipe
title: Marketing Campaign Download Tracking
platforms:
- ios
- android
---

When you complete this guide, you will have the ability to run powerful marketing campaigns with download tracking. You will know how many installs are being driven by word of mouth versus ad campaigns, and how well Facebook does compared to Twitter and SMS. You can do analysis comparing your marketing links to individualized links shared by your users.

One screenshot is worth a million... dollars on spent on non-performant ads and expensive tools to track those ads:

![the goal](/img/ingredients/analytics_and_custom_events/dashboard_summary.png)

Let's get started. Seeing install numbers (as opposed to merely clicks) requires doing some setup both on the Dashboard and within your {{page.platform_formatted}} app.

## Configuring the Dashboard for your {{ page.platform_formatted }} app
{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/web_url %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}
{% ingredient dashboard_setup/uri_scheme %}
  {%override client_uri %}For more details on finding/setting your URI scheme in the client, see the section below on [setting the client app's URI scheme](/recipes/marketing_campaign_download_tracking/{{page.platform}}/#uri-scheme-1).{%endoverride%}
{% endingredient %}
{% ingredient dashboard_setup/end_required %}{% endingredient %}
<!--- /Configuring the Dashboard-->


## Configuring your {{ page.platform_formatted }} app
{% ingredient sdk_setup/installing_the_sdk %}{% endingredient %}
{% ingredient sdk_setup/branch_key %}{% endingredient %}
{% ingredient sdk_setup/uri_scheme %}
  {%override dashboard_uri %}For more info on setting up a URI scheme on the Dashboard, check out the [section above](/recipes/marketing_campaign_download_tracking/{{page.platform}}/#uri-scheme).{%endoverride%}
{% endingredient %}
{% ingredient sdk_setup/init_session %}{% endingredient %}
{% ingredient sdk_setup/handle_deep_link %}{% endingredient %}
<!--- /Configuring the Client-->


## Creating your Link

{% ingredient dashboard_links/creating_links %}
	{%override screenshot_description%}One example description if you want to treat this guide is: "Marketing our launch on Facebook."{%endoverride%}
{% endingredient %}

{% ingredient dashboard_links/tags %}
	{%override deep_link_data_url%}For information of the form *[key]*: *[value]* such as "product": "shoes", we recommend adding them to "Deep Link Data (Advanced)", discussed in [Links and Sharing](/domains/links_and_sharing/{{page.platform}}/#attaching-custom-data-to-links) [TODO!]. 
    {%endoverride%}
{% endingredient %}

{% ingredient dashboard_links/alias %}
	{%override optional%}(Optional -- highly recommended){%endoverride%}
{% endingredient %}

{% ingredient dashboard_links/og_tags %}{% endingredient %}
{% ingredient dashboard_links/end %}{% endingredient %}
<!--- /Creating your Link -->


## Conclusion and Advanced Options

That's it! You now have *campaign- and channel-specific links* that can be shared on social media, pushed out via email, or embedded in ad campaigns. 

Every *user click*, every *fresh install*, and every *subsequent open* can be attributed back to an individual link. 

If you go the additional step of allowing users to share via Branch links, you can compare your campaigns to word-of-mouth. If this interests you, check out our guides on these topics and more:

{% ingredient recipe_preview/incentivized_referral_program %}{%endingredient%}
{% ingredient recipe_preview/personalized_invite_system %}{%endingredient%}
{% ingredient recipe_preview/influencers %}{%endingredient%}
{% ingredient recipe_preview/channel_tags %}{%endingredient%}
{% ingredient recipe_preview/contact_us %}{%endingredient%}