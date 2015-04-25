---
type: recipe
title: Personalized Invite System
platforms:
- ios
- android
---

Right now, when users open your app for the first time, chances are you have no idea where they came from or who they are. You have no idea if they were invited by a friend on Facebook, found your app randomly browsing through the App Store, saw an ad, or simply discovered it through word of mouth and decided to give it a shot. It's anybody's guess really.

You can't tailor the onboarding flow for new users--it's the same first few steps for everyone.

With Branch you can know:

* if a friend invited this user via a link shared on social media, in an email, or via SMS.
* which of the above channels--social media, email, text, etc.--they came from!
* what link their friend shared that brought them to the app in the first place--was it a general link, a "skip-the-waitlist" link, or a "check-out-my-awesome-profile" link.
* show a custom message to the new user--"Welcome, from your friend John and the whole MyApp team!"
* reward either or both users for the referred install and any other custom events.

Branch does all of this through simple means, allowing you to attach any data you want to any link. That data then pops up in your app when a user clicks a Branch link. 

What you do with this data is up to you, but of course we're here to help with tailored analytics around clicks, installs, opens and engagement.

Let's get started!

## Configuring the Dashboard for your {{ page.platform_formatted }} app
{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/web_url %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}
{% ingredient dashboard_setup/uri_scheme %}
  {%override client_uri %}For more details on finding/setting your URI scheme in the client,  see the section below on [setting the client app's URI scheme](/recipes/personalized_invite_system/{{page.platform}}/#uri-scheme-1).{%endoverride%}
{% endingredient %}
{% ingredient dashboard_setup/end_required %}{% endingredient %}
<!--- /Configuring the Dashboard-->


## Configuring your {{ page.platform_formatted }} app
{% ingredient sdk_setup/installing_the_sdk %}{% endingredient %}
{% ingredient sdk_setup/branch_key %}{% endingredient %}
{% ingredient sdk_setup/uri_scheme %}
  {%override dashboard_uri %}For more info on setting up a URI scheme on the Dashboard, check out the [section above](/recipes/personalized_invite_system/{{page.platform}}/#uri-scheme).{%endoverride%}
{% endingredient %}
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
  Links are the foundation to everything Branch offers. Branch's links offer the ability to deep link directly to content, to pass data through the install process, and to understand where users are coming from. In the case of a personalized referral system, you can attach information about the user who is sharing the link. Then this information about this user--here "John" with id "1234"--is present anytime John's friends install the app after clicking his link.
  {%endoverride%}

  {% override params %}@{@"referringUsername":@"John", @"referringUserId":@"1234"}{%endoverride%}{% endingredient %}
{% ingredient sdk_links/sharing_teaser %}{% endingredient %}


## The Personal Touch: A Welcome Screen
{% ingredient sdk_routing/routing %}
  {% override ios_key %}userId{% endoverride %}
  {% override ios_key_U %}UserId{% endoverride %}
  {% override vc_name %}userId{% endoverride %}
{% endingredient %}


## Conclusion: There's So Much More

Adding a personalized invite system is as simple as creating Branch links, sharing them and then examining the custom `params` dictionary that is present when a new user opens the app.

There's so much more though! With Branch, you can:

{% ingredient recipe_preview/incentivized_referral_program %}{%endingredient%}
{% ingredient recipe_preview/influencers %}{%endingredient%}
{% ingredient recipe_preview/channel_tags %}{%endingredient%}
{% ingredient recipe_preview/contact_us %}{%endingredient%}
