---
type: recipe
title: Personalized Invite System
platforms:
- ios
- android
---

# Personalized Invite System

## Configuring the Dashboard for your {{ page.platform_formatted }} app
{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/web_url %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}
{% ingredient dashboard_setup/uri_scheme %}{% endingredient %}
{% ingredient dashboard_setup/end_required %}{% endingredient %}
<!--- /Configuring the Dashboard-->


## Configuring your {{ page.platform_formatted }} app
{% ingredient sdk_setup/installing_the_sdk %}{% endingredient %}
{% ingredient sdk_setup/branch_key %}{% endingredient %}
{% ingredient sdk_setup/uri_scheme %}{% endingredient %}
{% ingredient sdk_setup/init_session %}{% endingredient %}
{% ingredient sdk_setup/handle_deep_link %}{% endingredient %}
{% ingredient sdk_setup/identify_and_logout %}
  {% override pre_explanation %}
If you want to know who is sharing your content, whether for internal purposes (i.e. analytics) or for customizing the experience of a user receiving a referral, you'll want to identify your users.
  {% endoverride %}
  {% endingredient %}
<!--- /Configuring the Client-->


## Generating Links

{% ingredient sdk_links/creating_links %}
  {% override explanation %}
  Links are the foundation to everything Branch offers. Branch's links offer the ability to deep link directly to content, to pass data through the install process, and to tell where users are coming from. In the case of a personalized referral system, you can attach information about the user who is sharing the link. Then this information about this user--here "John" with id "1234"--is present anytime John's friends install the app after clicking his link.
  {%endoverride%}

  {% override params %}@{@"referringUsername":@"John", @"referringUserId":@"1234"}{%endoverride%}{% endingredient %}
{% ingredient sdk_links/sharing_teaser %}{% endingredient %}


## The Personal Touch: A Welcome Screen
{% ingredient sdk_routing/routing %}
  {% override ios_key %}userId{% endoverride %}
  {% override ios_key_U %}UserId{% endoverride %}
  {% override vc_name %}userId{% endoverride %}
{% endingredient %}

