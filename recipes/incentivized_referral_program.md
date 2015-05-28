---
type: recipe
title: Incentivize Referrals
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
  Links are the foundation to everything Branch offers. Branch's links offer the ability to deep link directly to content, to pass data through the install process, and to tell where users are coming from. In the case of a incentivized referral program, you don't need to attach any information. You simply need to make sure that you generate links for the user who will be sharing the link. Also, be sure that you make a `setIdentity` call as described above.

  That said, you can attach information about the user who is sharing the link. Then this information about this user--here "John" with id "1234"--is present anytime John's friends install the app after clicking his link.
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

You now have an incentivized referral program. Like many popular promo-code systems, you can reward both the user who shares a link and the user who clicks the link and installs the app. With Branch links, the magic is built in, so there's no need for a promo code. Because we want to empower developers, we also offer the ability to reward users with credits, track those credits and redeem them--all with a few lines of code.

This guide covered the basics. The following may be of interest to you, if you want to:

{% ingredient recipe_preview/reward %}{% endingredient %}
{% ingredient recipe_preview/personalized_invite_system %}{% endingredient %}
{% ingredient recipe_preview/influencers %}{% endingredient %}
{% ingredient recipe_preview/channel_tags %}{% endingredient %}
{% ingredient recipe_preview/contact_us %}{% endingredient %}
