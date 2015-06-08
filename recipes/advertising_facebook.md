---
type: recipe
title: "Advertising: Facebook Ads"
hide_platform_selector: true
---

{% protip title="Still need to integrate Branch?" %}This guide assumes that you have already integrated Branch and are just curious how to use Branch with App Invites. If you need to integrate Branch still, jump to "[Integrating the SDK](/recipes/quickstart_guide/{{page.platform}}/)".
{% endprotip %}

Deeplinked ads are not a new breed--just a rare one. With Branch they're as easy as creating a link on the Dashboard and setting up your {{page.platform_formatted}} app to handle incoming deep links.

Here are some examples:

* A user clicks on an ad for 20% off all purchases before the end of the week, and upon opening the app sees the coupon and has it automatically added to the shopping cart.
* A user clicks on an ad for blue sneakers. You show him the blue sneakers as soon as he opens the app.
* You run a massive ad campaign that drives a ton of new users to the app. You want create a funnel to see how many users signed up and/or completed purchases after clicking different ads (and the conversion rate).
* You know that users clicking on your ads are already familiar with your product. So in your app you reduce the carousel shown to new users from 5 to 2 if they've come in through an ad.

{% protip title="Branch links work even on first install!" %}
With standard deeplinks, if a user doesn't have the app, the link fails. With Branch links, users without the app will be directed to the {% if page.ios %}App{% endif %}{% if page.android %}Play{% endif %} Store -- and upon opening the app can be deeplinked! Facebook calls this deferred deep linking, but Branch links do this plus way more and refer to the whole process as *contextual deep linking*.{% endprotip %}

## One time configuration

In order for Branch to properly run a Facebook deeplinked ad campaign, you must first send Branch your app token. This is easy to get, and you can find the step by step instructions on how to do so below. We'll add a button to the dashboard soon that does this automatically.

1. Create a URL using the app id and app secret from your Facebook app dashboard (developers.facebook.com -> Apps)
https://graph.facebook.com/v2.3/oauth/access_token?client_id=**your_app_id**&client_secret=**your_app_secret**&grant_type=client_credentials
2. Paste the created link into your browser and hit enter
3. Send me the result - it should look something like this:
_288726397999326|xgy43Bt4gVHWaY51VtImt_Meh_U_

Send this key to alex@branch.io

## Creating your Link

{% ingredient dashboard_links/creating_links %}
	{% override screenshot %}{% image src='/img/ingredients/dashboard_links/fb_example_create.png' third left alt='Create Marketing Link' %}{% endoverride %}
	{% override description %}{% endoverride %}
	{% override screenshot_description%}The first step is to come up with a label for your link so that you can recognize it when you visit later on. For example: "Facebook ad for blue sneakers - summer 2015."{% endoverride %}
{% endingredient %}

{% ingredient dashboard_links/tags %}
	{% override screenshot%}{% image src='/img/ingredients/dashboard_links/fb_example_tags.png' third nofloat %}{% endoverride %}
{% endingredient %}

{% ingredient dashboard_links/custom_data %}{% endingredient %}

{% ingredient dashboard_links/end %}{% endingredient %}


## Creating a Branch powered Facebook ad

Here is the flow on how to create a Branch deep linked install ad!

First, navigate to [https://www.facebook.com/ads/create](https://www.facebook.com/ads/create) while logged in to your account that owns the Facebook app. If you don't have a Facebook app yet, you'll need to visit [https://developers.facebook.com/apps/](https://developers.facebook.com/apps/) and create a new Facebook app for your mobile app.

Choose **Get installs of your app**. Then scroll down and select Facebook app that you wish to advertise.

{% image src='/img/recipes/deeplink_ads/fb_ad_installs.png' half nofloat alt='Facebook Example Ad' %}

After you choose your audience and customize the display of the link, you can now specify the Deep Link in the following section.

{% image src='/img/recipes/deeplink_ads/fb_ad_deep_link_area.png' half no float alt='Facebook Example Ad' %}

Paste the Branch link from the dashboard into the **Deep Link** field

{% image src='/img/recipes/deeplink_ads/fb_ad_deep_link_branch.png' half nofloat alt='Facebook Example Ad' %}

You're all set to go!

## View your data

Now that you've set up your campaign and have everything all running, let's analyze the data! There are many changes in the works to the Branch dashboard, but if you'd like to see something, please send us a request.

First, visit the marketing tab to see the performance of the individual link. You can find your link listed in the table with a quick summary of the _total_ clicks and installs. Unfortunately, Facebook prevents us from measurement the number of clicks on their ads, so this number is not accurate for Facebook ads.

{% image src='/img/recipes/deeplink_ads/marketing_link_row.png' full nofloat alt='Facebook Example Ad' %}

To view more details stats, click the _small button that looks like a bar chart_ on the far right. The first important note is that these stats are **limited to the date range** at the top. You can expand the range if you'd like.

The first chart is what we call the _Click Flow_. From a Facebook installs perspective, this will just report for you the number of installs and reopens from the link. Currently, clicks is not accurate through this ad format.

{% image src='/img/recipes/deeplink_ads/click_flow_analytics.png' half nofloat alt='Facebook Example Ad' %}

The second chart is for measuring conversion funnels for this ad. If you setup a conversion funnel here, you can measure the total number of down funnel events that have occurred from this link in particular. It's useful for calculating conversion rate by each ad.

{% image src='/img/recipes/deeplink_ads/conversion_funnel.png' full nofloat alt='Facebook Example Ad' %}


## Conclusion

It's pretty simple! You need to configure the dashboard, generate links for your ads, and setup your app to track installs. You can optionally deep link straight to content based on the ad that the user clicked on!

{% ingredient recipe_preview/recipe_end_intro %}{% endingredient %}
{% ingredient recipe_preview/referral_links_with_incentives %}{% endingredient %}
{% ingredient recipe_preview/personalized_welcome %}{% endingredient %}
{% ingredient recipe_preview/influencers %}{% endingredient %}
{% ingredient recipe_preview/channel_tags %}{% endingredient %}
{% ingredient recipe_preview/contact_us %}{% endingredient %}
