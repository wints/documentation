---
type: recipe
title: Deeplinked Ads
platforms:
- ios
- android
---

# Deeplink Ads

------

## Basic Setup
{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}

That's the end of the required setup for the Dashboard! The dashboard is incredibly powerful, so if you want to dive in deeper, definitely check out [TODO] [Configuring the Dashboard](/ingredients/configuring_the_dashboard/{{ page.platform }}/index.html#advanced)'s advanced configurations.
<!--- /Basic Setup -->

## Creating your Link

{% ingredient dashboard_links/creating_links %}{% endingredient %}
{% ingredient dashboard_links/tags %}{% endingredient %}
{% ingredient dashboard_links/alias %}{% endingredient %}
{% ingredient dashboard_links/custom_redirects %}{% endingredient %}
{% ingredient dashboard_links/og_tags %}{% endingredient %}
{% ingredient dashboard_links/end %}{% endingredient %}
{% ingredient dashboard_links/end %}{% endingredient %}
<!--- /Creating your Link -->


## Configuring your app to track installs

Based on what you've built so far, you will be able to track your ad campaign's clicks by device -- how many people on each platform (desktop, iOS, Android) have clicked your ads.

If you integrate our SDK into your app, you can:

1. See exactly how many people are installing your app based on each of your ads.
2. Personalize a user's experience after clicking on an ad. This works regardless of whether the user previously had your app installed. Examples include:
   i. display a campaign-specific message
   ii. automatically take the user to the same pair of shoes that were featured in the ad that was clicked on
   iii. apply a certain coupon towards a purchase of a new pair of shoes, with a coupon icon at the top of the screen
3. Track events and create funnels so you can see which ads are performing best on concrete measures such as # of completed signups or number/type of purchases even if the app was not previously installed.

{% ingredient sdk_setup/installing_the_sdk %}{% endingredient %}
{% ingredient sdk_setup/branch_key %}{% endingredient %}
{% ingredient sdk_setup/uri_scheme %}{% endingredient %}
{% ingredient sdk_setup/init_session %}{% endingredient %}
{% ingredient sdk_setup/handle_deep_link %}{% endingredient %}
<!--- /Creating your Link -->


## Example: Facebook Ads

Navigate to [https://www.facebook.com/ads/create](https://www.facebook.com/ads/create) while logged in to your Facebook page. (If you don't yet have a Facebook page, you will need to create one before advertising on Facebook.)

Choose "Send people to your website". Unfortunately due to a bug with Facebook's API, you cannot currently run campaigns for app downloads through the option "Get installs of your app."

![Description](/img/recipes/deeplink_ads/facebook_ad_1.png)

On the next page, you need to enter the Branch link that was generated in the last step. Here's a gif to help:

![Description](/img/recipes/deeplink_ads/facebook_ad_2.gif)

You can now customize your ad per the usual Facebook ad creation interface.

Notice that any OG tag information your provided has prepopulated in the interface.

![Description](/img/recipes/deeplink_ads/facebook_ad_3.png)

Last step is to make sure you target the mobile app, not the desktop! If you need help, see the gif below:

![Description](/img/recipes/deeplink_ads/facebook_ad_4.gif)

Now make sure you have a picture of the appropriate size, then order up that ad!

