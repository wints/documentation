---
type: recipe
title: Mobile Web Smart Banner
platforms:
- ios
- android
---

## Configuring the Dashboard for your {{ page.platform_formatted }} app
{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/web_url %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}
{% ingredient dashboard_setup/uri_scheme %}
{% override optional %}**Note**: this is required if you want your smart banner to open the app. If, however, you simply want a banner that links to the {% if platform.ios %}App{%endif%}{% if platform.android %}Play{%endif%} Store (on mobile) or that allows users to text themselves the app (on desktop), you can skip this step.{%endoverride%}
{% endingredient %}
{% ingredient dashboard_setup/end_required %}{% endingredient %}

## The Smart Banner
{% ingredient web_specific/smart_banner %}{%override header%}{%endoverride%}{% endingredient %}

## (Optional) Deep Linking
{% ingredient sdk_routing/routing %}{% endingredient %}


## Routing: passing information from the Banner

Now that you've added routing to your app, you can add information to the Smart Banner. If you've used the example Smart Banner code [above](http://localhost:4000/recipes/mobile_web_smart_banner/ios/#the-smart-banner), you simply need to insert any key-value pairs you'd like into the data dictionary.

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