---
type: recipe
title: "Integrating the SDK"
platforms:
- ios
- android
overview: "After a few lines of code, you'll be ready to start using Branch links for deep linking and tracking downloads"
---

## Configuring the links for your {{ page.platform_formatted }} app

First, please visit the [Branch link configuration tool](https://start.branch.io/) to setup all the redirection logic. It's an easy step by step guide.

<!--- /Configuring the Dashboard-->

## Configuring your {{ page.platform_formatted }} app
{% ingredient sdk_setup/installing_the_sdk %}{% endingredient %}
{% ingredient sdk_setup/plist_manifest %}{% endingredient %}
{% ingredient sdk_setup/init_session %}{% endingredient %}
{% ingredient sdk_setup/handle_deep_link %}{% endingredient %}
<!--- /Configuring the Client-->

## Creating links

{% ingredient sdk_links/creating_links %}{% override header %}{% endoverride %}{% endingredient %}

{% protip title="Data is for Deeplinking" %}
You can also use the data to link directly to content! Instead of "foo": "bar", you could pass in "{% if page.ios %}pictureId{% endif %}{% if page.android %}picture_id{% endif %}": "1234", then when a user clicks on a link you can open the app straight to picture with Id 1234. Keep reading...
{% endprotip %}

-----

## Conclusion

Congratulations! You're now up and running with Branch. To finish up, we'll walk you through the data you're seeing in your dashboard in [Link and Install Attribution](/recipes/measuring_installs/{{page.platform}}/).

{% ingredient recipe_preview/contact_us %}{%endingredient%}

-----

## Advanced

{% ingredient sdk_setup/callback_params %}{% endingredient %}
{% ingredient sdk_setup/identify_and_logout %}{% endingredient %}

{% ingredient sdk_setup/android_app_alternatives %}{% endingredient %}
{% ingredient sdk_setup/pre_14_android %}{% endingredient %}