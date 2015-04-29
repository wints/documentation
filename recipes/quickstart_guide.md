---
type: recipe
title: Quickstart Guide
platforms:
- ios
- android
---

This quickstart guide will walk you through the minimum setup for an SDK integration. With only a few lines of code you'll have the ability to track installs by platform, campaign, etc. You can then also create links from the dashboard or add another line of code to programmatically create links via the SDKS.

![the goal](/img/ingredients/analytics_and_custom_events/dashboard_summary.png)

We don't cover link creation in this initial guide, so a natural place to start after completing it is [Step 3 of Marketing Campaign Download Tracking](/recipes/marketing_campaign_download_tracking/ios/#creating-your-link). 


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
  {%override telephony%}[here](/recipes/app_content_share_with_deeplink/{{page.platform}}/#installing-the-sdk).{%endoverride%}
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


## Conclusion

Now that you've completed the basic integration, you can skip steps one (Configuring the Dashboard) and two (Configuring the Client) in the following guides. With Branch, you can:

{% ingredient recipe_preview/marketing_campaign_download_tracking %}{%endingredient%}
{% ingredient recipe_preview/personalized_invite_system %}{%endingredient%}
{% ingredient recipe_preview/deeplinked_ads %}{%endingredient%}
{% ingredient recipe_preview/incentivized_referral_program %}{%endingredient%}
{% ingredient recipe_preview/app_content_share_with_deeplink %}{%endingredient%}
{% ingredient recipe_preview/contact_us %}{%endingredient%}
