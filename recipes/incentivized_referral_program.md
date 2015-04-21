---
type: recipe
title: Incentivized Referral Program
platforms:
- ios
- android
---

For a referral system, Branch provides:

- _User attribution through a tracking, download URL._ In short, we tell you when an existing user who you empower with a Branch link, drives a new install.

- _(optional) Custom rewarding rules tied to events (install, signup, purchase, etc) in app._ We allow you to tie reward events to special

- _(optional) User reward tracking/storage (integer balance)._ We leave the actual user facing rewarding to you, but we store how many credits have been earned through our reward rules. This makes it easy so that you can just check the balance of credits in the app from us, give the user some reward, then clear the credit balance on our server.

- _(optional) Credit transaction history._ At any time, via API or SDK, you can retrieve the full credit history of the user



## Configuring the Dashboard for your {{ page.platform_formatted }} app
{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/web_url %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}
{% ingredient dashboard_setup/uri_scheme %}
  {%override client_uri %}For more details on finding/setting your URI scheme in the client, see the section below on [setting the client app's URI scheme](/recipes/incentivized_referral_program/{{page.platform}}/#uri-scheme-1).{%endoverride%}
{% endingredient %}
{% ingredient dashboard_setup/end_required %}{% endingredient %}
<!--- /Configuring the Dashboard-->


## Configuring your {{ page.platform_formatted }} app
{% ingredient sdk_setup/installing_the_sdk %}{% endingredient %}
{% ingredient sdk_setup/branch_key %}{% endingredient %}
{% ingredient sdk_setup/uri_scheme %}
  {%override dashboard_uri %}For more info on setting up a URI scheme on the Dashboard, check out the [section above](/recipes/incentivized_referral_program/{{page.platform}}/#uri-scheme).{%endoverride%}
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


## Generating Links

{% ingredient sdk_links/creating_links %}
  {% override explanation %}
  Links are the foundation to everything Branch offers. Branch's links offer the ability to deep link directly to content, to pass data through the install process, and to tell where users are coming from. In the case of a incentivized referral program, you don't need to attach any information. You simply need to make sure that you generate links for the user who will be sharing the link. Also, be sure that you make a `setIdentity` call as described above.

  That said, you can attach information about the user who is sharing the link. Then this information about this user--here "John" with id "1234"--is present anytime John's friends install the app after clicking his link.
  {%endoverride%}

  {% override params %}{% if page.ios %}@{@"referringUsername":@"John", @"referringUserId":@"1234"}{% endif %}{% if page.android %}JSONObject obj = new JSONObject();
obj.putString("referringUserName", "John");
obj.putString("referringUserId", "1234"));{% endif %}{%endoverride%}
{% endingredient %}

Again, it's not imperative that you attach any information to the link. As long as you made a `setIdentity` call, anytime this link is shared we will know whose link it is and when to attribute an install to him.

{% ingredient sdk_links/sharing_teaser %}{% endingredient %}
<!--- /Generating Links-->


## Rewards
{% ingredient rewards/overview %}
	{% override header %}{% endoverride %}
{% endingredient %}
{% ingredient events/standard_events %}
	{% override header %}{% endoverride %}
{% endingredient %}
{% ingredient rewards/reward_rule_basics %}
	{% override header %}### Rewarding Users{% endoverride %}
	{% override more %}{% endoverride %}
{% endingredient %}
{% ingredient rewards/reward_example %}{% endingredient %}
{% ingredient sdk_setup/is_referrable_protip %}{%endingredient%}
{% ingredient rewards/rewards_are_flexible %}{% endingredient %}

{% ingredient rewards/get_credits %}{%override different_bucket%}{%endoverride%}{% endingredient %}
{% ingredient rewards/redeem_credits %}{%override different_bucket%}{%endoverride%}{% endingredient %}
<!--- /Incentives: Tracking and Rewarding-->


## Conclusion: So Much More

You now have an incentivized referral program. Like many popular promo-code systems, you can reward both the user who shares a link and the user who clicks the link and installs the app. With Branch links, the magic is built in, so there's no need for a promo code. Because we want to empower developers, we also offer the ability to reward users with credits, track those credits and redeem them--all with a few lines of code.

This guide covered the basics. The following may be of interest to you, if you want to:

{% ingredient recipe_endings/reward %}{%endingredient%}
{% ingredient recipe_endings/personalized_invite_system %}{%endingredient%}
{% ingredient recipe_endings/influencers %}{%endingredient%}
{% ingredient recipe_endings/channel_tags %}{%endingredient%}
{% ingredient recipe_endings/contact_us %}{%endingredient%}