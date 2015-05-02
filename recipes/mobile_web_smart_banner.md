---
type: recipe
title: Mobile Web Smart Banner
platforms:
- ios
- android
weight: -19
---


The mobile web smart banner is a powerful tool--it brings users in from the web experience where they are more easily lost, to your native mobile experience. On desktop, the banner can even drive users to mobile via our text-me-the-app function.

It's highly customizable. If you want simple, cross-platform download links that just work, follow the first two sections on [configuring the dashboard](/recipes/mobile_web_smart_banner/{{page.platform}}/#configuring-the-dashboard-for-your-{{page.platform}}-app) and [The Smart Banner](/recipes/mobile_web_smart_banner/{{page.platform}}/#the-smart-banner).

If you also want to pass data through the install process or deep link straight to content, check out the optional 3rd and 4th sections on [Configuring the Client for Deep Linking](/recipes/mobile_web_smart_banner/{{page.platform}}/#optional-configuring-the-client-for-deep-linking) and [Routing: passing information from the Banner](/recipes/mobile_web_smart_banner/{{page.platform}}/#optional-routing-passing-information-from-the-banner).

## Configuring the Dashboard for your {{ page.platform_formatted }} app
{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/web_url %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}
{% ingredient dashboard_setup/uri_scheme %}
  	{% override client_uri %}For more details on finding/setting your URI scheme in the client, see the section below on [setting the client app's URI scheme](/recipes/mobile_web_smart_banner/{{page.platform}}/#uri-scheme-1).{% endoverride %}
	{% override optional %}**Note**: this is required if you want your smart banner to open the app. If, however, you simply want a banner that links to the {% if page.ios %}App{% endif %}{% if page.android %}Play{% endif %} Store (on mobile) or that allows users to text themselves the app (on desktop), you can skip this step.{% endoverride %}
{% endingredient %}
{% ingredient dashboard_setup/end_required %}{% endingredient %}

## The Smart Banner
{% ingredient web_sdk/smart_banner %}{% override header %}{% endoverride %}{% endingredient %}

## (Optional) Configuring the Client for Deep Linking
{% ingredient sdk_setup/installing_the_sdk %}
  {% override telephony %}[here](/recipes/app_content_share_with_deeplink/{{page.platform}}/#installing-the-sdk).{% endoverride %}
{% endingredient %}
{% ingredient sdk_setup/branch_key %}{% override screenshot %}{% endoverride %}{% endingredient %}
{% ingredient sdk_setup/uri_scheme %}
  {% override dashboard_uri %}For more info on setting up a URI scheme on the Dashboard, check out the [section above](/recipes/mobile_web_smart_banner/{{page.platform}}/#uri-scheme).{% endoverride %}
{% endingredient %}
{% ingredient sdk_setup/init_session %}{% endingredient %}
{% ingredient sdk_setup/handle_deep_link %}{% endingredient %}
{% ingredient sdk_routing/routing %}{% endingredient %}



## (Optional) Routing: passing information from the Banner

Now that you've added routing to your app, you can add information to the Smart Banner. If you've used the example Smart Banner code [above](/recipes/mobile_web_smart_banner/ios/#the-smart-banner), you simply need to insert any key-value pairs you'd like into the data dictionary.

Using our example of routing above with the PicVC, you'd simply need to change the Web Banner code to the following:

{% highlight javascript %}
    branch.banner(options, {
        phone: '9999999999',
        type: 1,
        data: {
            'pictureId': '12345',
        }
    });
{% endhighlight %}

Now when a user clicks on the Smart Banner on a mobile device, when they open your app they will be taken straight to a view controller to see picture with id "12345". It's that simple.

Deep linking has countless possibilities and we'd be happy to brainstorm use cases for your specific app. Happy building!


## Conclusion

You've learned how to add a smart banner to your website with minimal configuration and some copying-and-pasting Javascript into your website. Perhaps the allure of passing data through install or deep linking to content caught your eye and you added the SDK to your {{page.platform_formatted}} app. There's a ton more that Branch can do. For example, you can:

{% ingredient recipe_preview/incentivized_referral_program %}{% endingredient %}
{% ingredient recipe_preview/personalized_invite_system %}{% endingredient %}
{% ingredient recipe_preview/influencers %}{% endingredient %}
{% ingredient recipe_preview/channel_tags %}{% endingredient %}
{% ingredient recipe_preview/contact_us %}{% endingredient %}
