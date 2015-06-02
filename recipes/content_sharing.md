---
type: recipe
title: "Content Sharing"
platforms:
- ios
- android
---

{% ingredient quickstart_preview/quickstart_preview %}{% endingredient %}

If you've completed optional Steps 3 & 4 of our quickstart guide, then you already know how to share content and deeplink straight to it. This guide can serve as a refresher.

## Creating links programmatically to share content

{% ingredient sdk_links/creating_links %}{% override header %}{% endoverride %}{% endingredient %}

{% protip title="Data is for Deeplinking" %}
You use the data to link directly to content! Instead of "foo": "bar", you could pass in "{% if page.ios %}pictureId{% endif %}{% if page.android %}picture_id{% endif %}": "1234", then when a user clicks on a link you can open the app straight to picture with Id 1234. Keep reading...
{% endprotip %}

## Routing to content within your {{page.platform_formatted}} app

{% ingredient sdk_routing/routing %}{% endingredient %}

## Advanced sharing

{% ingredient sdk_links/sharing_sms %}{% endingredient %}
{% ingredient sdk_links/sharing_ios_share_sheet %}{% endingredient %}



## Conclusion

Now that you've completed the basic integration, you can **skip steps one (Configuring the Dashboard) and two (Configuring the Client) in the following guides**. Next steps:

{% ingredient recipe_preview/measuring_installs %}{%endingredient%}
{% ingredient recipe_preview/personalized_welcome %}{%endingredient%}
{% ingredient recipe_preview/advertising_facebook %}{%override ending%} **(Skip Steps 1 and 3)**{%endoverride%}{%endingredient%}
{% ingredient recipe_preview/referral_links_with_incentives %}{%endingredient%}
{% ingredient recipe_preview/contact_us %}{%endingredient%}

