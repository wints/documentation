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
{% ingredient configuring_the_dashboard/app_name %}{% endingredient %}
{% ingredient configuring_the_dashboard/store_or_custom_url %}{% endingredient %}

That's the end of the required setup for the Dashboard! The dashboard is incredibly powerful, so if you want to dive in deeper, definitely check out [TODO] [Configuring the Dashboard](/ingredients/configuring_the_dashboard/{{ page.platform }}/index.html#advanced)'s advanced configurations.
<!--- /Basic Setup -->


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

