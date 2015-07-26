---
type: recipe
title: "Referral/Invite Links"
ios_page_title: App Invites & Referral Links for iOS Apps
android_page_title: App Invites & Referral Links for Android
ios_description: How to set up App Invites, Referral Links and Reward Schemes for iOS apps using deep links. With objective-c and swift code snippets.
android_description: How to set up App Invites, Referral Links and Reward Schemes for Android apps using deep links. With Java code snippets.
ios_keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, Referral Links, App Invites, Reward Schemes, Promotion codes, iOS, objective-c, swift
android_keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, Referral Links, App Invites, Reward Schemes, Promotion codes, Android
platforms:
- ios
- android
---

{% ingredient quickstart_preview/quickstart_preview %}{% endingredient %}

For a referral system, Branch provides:

- _User attribution through a tracking, download URL._ In short, we tell you when an existing user--who you empower with a Branch link--drives a new install.

- _(optional) Custom rewarding rules tied to events (install, signup, purchase, etc) in app._ We allow you to tie rewards to any events. You can reward users for referring users who not just install, but also signup, make purchases, etc.

- _(optional) User reward tracking/storage (integer balance)._ We leave the actual user facing rewarding to you, but we store how many credits have been earned through our reward rules. This makes it easy so that you can just check the balance of credits in the app from us, give the user some reward, then clear the credit balance on our server.

- _(optional) Credit transaction history._ At any time, via API or SDK, you can retrieve the full credit history of the user.

Let's get started!

## Generating Links

{% ingredient sdk_links/creating_links %}
  {% override explanation %}
  You can attach information about the user who is sharing the link. Then this information about this user--here "John" with id "1234"--is present anytime John's friends install the app after clicking his link.
  {% endoverride %}

  {% override params %}{% if page.ios %}@{@"referringUsername":@"John", @"referringUserId":@"1234"}{% endif %}{% if page.android %}JSONObject obj = new JSONObject();
obj.putString("referringUserName", "John");
obj.putString("referringUserId", "1234"));{% endif %}{% endoverride %}
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
{% ingredient sdk_setup/is_referrable_protip %}{% endingredient %}
{% ingredient sdk_setup/testing_rewards_protip %}{% endingredient %}
{% ingredient rewards/rewards_are_flexible %}{% endingredient %}

{% ingredient rewards/get_credits %}{% override different_bucket %}{% endoverride %}{% endingredient %}
{% ingredient rewards/showing_referrals %}{% endingredient %}
{% ingredient rewards/redeem_credits %}{% override different_bucket %}{% endoverride %}{% endingredient %}
{% ingredient rewards/redeem_flow %}{% endingredient %}
<!--- /Incentives: Tracking and Rewarding-->


{% ingredient rewards/fraud_protection %}{% endingredient %}


## Conclusion: So Much More

This guide covered the basics. The following may be of interest to you, if you want to:

{% ingredient recipe_preview/advanced_referral_incentives %}{% endingredient %}
{% ingredient recipe_preview/personalized_welcome %}{% endingredient %}
{% ingredient recipe_preview/influencers %}{% endingredient %}
{% ingredient recipe_preview/channel_tags %}{% endingredient %}
{% ingredient recipe_preview/contact_us %}{% endingredient %}
