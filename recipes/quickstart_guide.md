---
type: recipe
title: "Step 2: SDK Integration"
ios_page_title: How to configure iOS Apps for Deep Links
android_page_title: How to configure Android Apps for Deep Links
ios_description: How to install the Branch SDK and configure your iOS app for deep links. Add a few lines of code and you can begin deep linking and tracking installs.
android_description: How to install the Branch SDK and configure your Android app for deep links. Add a few lines of code and you can begin deep linking and tracking installs.
ios_keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, SDK, SDK Integration, iOS Configuration, iOS, objective-c, swift
android_keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, SDK, SDK Integration, Android Configuration, Android
platforms:
- ios
- android
---

## Configuring the links

First, please visit the [Branch link configuration tool](https://start.branch.io/) to setup all the redirection logic.

-----

## Configuring your {{ page.platform_formatted }} app
{% ingredient sdk_setup/installing_the_sdk %}{% endingredient %}

-----

{% ingredient sdk_setup/plist_manifest %}{% endingredient %}

-----

{% ingredient sdk_setup/init_session %}{% endingredient %}

-----

{% ingredient sdk_setup/handle_deep_link %}{% endingredient %}

-----

## Creating links

{% ingredient sdk_links/creating_links %}{% override header %}{% endoverride %}{% endingredient %}

{% protip title="Data is for Deeplinking" %}
You can also use the data to link directly to content! Instead of "foo": "bar", you could pass in "{% if page.ios %}pictureId{% endif %}{% if page.android %}picture_id{% endif %}": "1234", then when a user clicks on a link you can open the app straight to picture with Id 1234.
{% endprotip %}

-----

## What's next?

### [Head to Step 3: A dashboard introduction](/recipes/measuring_installs/{{page.platform}}/)

-----

{% ingredient recipe_preview/contact_us %}{%endingredient%}

-----

## Advanced

{% ingredient sdk_setup/callback_params %}{% endingredient %}

-----

{% ingredient sdk_setup/identify_and_logout %}{% endingredient %}

-----

{% ingredient sdk_setup/android_app_alternatives %}{% endingredient %}

-----

{% ingredient sdk_setup/pre_14_android %}{% endingredient %}
