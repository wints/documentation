---
type: recipe
title: Add custom link data and routing
platforms:
- ios
- android
---

{% ingredient sdk_links/creating_links %}{% endingredient %}
{% ingredient sdk_links/custom_data %}{% endingredient %}

{% protip title='Tip: Identify your users!'  %}
You should [identify your users](/recipes/configuring_client_apps/{{page.platform}}/#identifying-your-users) so that you know who is sharing--and who is effectively driving the most installs and engagement.
{% endprotip %}



## Customizing and Tagging Links

{% ingredient sdk_links/channel %}{% endingredient %}
{% ingredient sdk_links/tags %}{% endingredient %}
{% ingredient sdk_links/feature %}{% endingredient %}
{% ingredient sdk_links/og_tags %}{% endingredient %}
{% ingredient sdk_links/alias %}{% endingredient %}



## Custom Redirects 

{% ingredient sdk_links/ios_url %}{% endingredient %}
{% ingredient sdk_links/android_url %}{% endingredient %}
{% ingredient sdk_links/desktop_url %}{% endingredient %}
{% ingredient sdk_links/always_deeplink %}{% endingredient %}
{% ingredient sdk_links/deeplink_path %}{% endingredient %}



## Sharing

{% ingredient sdk_links/sharing_sms %}{% endingredient %}
{% ingredient sdk_links/sharing_ios_share_sheet %}{% endingredient %}



## Routing

Your app can deliver users a custom experience based on the Branch link they clicked on that directed them to the app.

This means that you can:

* customize the signup/login flow
* take the user straight to a specific screen in your app
* congratulate the user on getting credits for signing up via a friend's link
* ... and so on.

Branch is able to pass data through install. When the user first opens the app, Branch makes a fast asynchronous call to the server to see whether the user has clicked on a link, and if so, what data is associated with it. This means that you should design routing accordingly.

### Example Code

{% if page.ios or page.android %}
{% ingredient sdk_routing/routing %}{% endingredient %}
{% endif %}

For a concrete example of giving users a customized experience via Branch links, check out our [Branchster Example]({% if page.ios %}https://github.com/BranchMetrics/Branchster-iOS{% endif %}{% if page.android %}https://github.com/BranchMetrics/Branchster-Android{% endif %}{% if page.web %}https://github.com/BranchMetrics/Branchster-Web{% endif %}).



## Additional Options

{% ingredient sdk_links/stage %}{% endingredient %}
{% ingredient sdk_links/match_duration %}{% endingredient %}
