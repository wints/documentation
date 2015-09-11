---
type: recipe
title: Deeplink data and routing
ios_page_title: Add custom link data and routing for iOS
android_page_title: Add custom Android link data and routing
ios_description: How to add custom data to your Branch deep link that gets delivered to the app with the clicking user. We also cover custom redirects and routing.
android_description: How to add custom data to your Branch deep link that gets delivered to the app with the clicking user. We also cover custom redirects and routing.
ios_keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, custom data, tags, OG tags, custom redirects
android_keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views,custom data, tags, OG tags, custom redirects, Android
platforms:
- ios
- android
---

{% ingredient sdk_links/creating_links %}{% endingredient %}

{% protip title='Tip: Identify your users!'  %}
You should [identify your users](/recipes/quickstart_guide/{{page.platform}}/#identifying-your-users) so that you know who is sharing--and who is effectively driving the most installs and engagement.
{% endprotip %}

-----

## Customizing and Tagging Links

{% ingredient sdk_links/channel %}{% endingredient %}
{% ingredient sdk_links/tags %}{% endingredient %}
{% ingredient sdk_links/feature %}{% endingredient %}
{% ingredient sdk_links/og_tags %}{% endingredient %}
{% ingredient sdk_links/alias %}{% endingredient %}

-----

## Custom Redirects 

{% ingredient sdk_links/ios_url %}{% endingredient %}
{% ingredient sdk_links/android_url %}{% endingredient %}
{% ingredient sdk_links/desktop_url %}{% endingredient %}
{% ingredient sdk_links/always_deeplink %}{% endingredient %}
{% ingredient sdk_links/deeplink_path %}{% endingredient %}

-----

## Routing

Your app can deliver users a custom experience based on the Branch link they clicked on that directed them to the app.

This means that you can:

* customize the signup/login flow
* take the user straight to a specific screen in your app
* congratulate the user on getting credits for signing up via a friend's link
* ... and so on.

Branch is able to pass data through install. When the user first opens the app, Branch makes a fast asynchronous call to the server to see whether the user has clicked on a link, and if so, what data is associated with it. This means that you should design routing accordingly.

### Example Code


{% ingredient sdk_routing/routing %}{% endingredient %}

For a concrete example of giving users a customized experience via Branch links, check out our [Branchster iOS Example](https://github.com/BranchMetrics/Branchster-iOS) or [Branchster Android Example](https://github.com/BranchMetrics/Branchster-Android) and the [Branchster Web Example](https://github.com/BranchMetrics/Branchster-Web).

## Additional Options

{% ingredient sdk_links/stage %}{% endingredient %}
{% ingredient sdk_links/match_duration %}{% endingredient %}
