---
type: recipe
title: Link and install attribution
platforms:
- ios
- android
---

## Welcome to your dashboard

You've created a link and integrated the SDK - now it's time to dive into your data with the [Branch Dashboard](https://dashboard.branch.io).

On your dashboard you can see how many installs are being driven by word of mouth versus ad campaigns, and how well Facebook does compared to Twitter and SMS. You can do analysis comparing your marketing links to individualized links shared by your users.

One screenshot is worth a million... dollars on spent on poorly performing ads and expensive tools to track those ads:

{% image src='/img/ingredients/analytics_and_custom_events/dashboard_summary.png' 3-quarters center alt='the goal' %}


{% ingredient dashboard_analytics/install_versus_open %}{% endingredient %}



## Dashboard tips

Here's some handy advice for getting the most out of your dashboard:

* Segment your data using the filters offered to drill down into specific sources

* Use a Branch link for every download you want to drive (looking at you [app download banner](/recipes/app_download_banner/{{page.platform}}/)) so you have context for every source

* Set up [custom events](/recipes/add_custom_link_data_and_routing/{{page.platform}}/#custom-events) to create [conversion funnels](/recipes/dashboard_pro_tips/{{page.platform}}/#funnels)

* See who your power users are by implementing [referral links](/recipes/referral_links_with_incentives/{{page.platform}}/) then viewing [data about your top users](/recipes/dashboard_pro_tips/{{page.platform}}/#influencers-your-best-users)

* Remember you can embed any parameters you want into Branch links, you'll just need to [export them](/recipes/webhooks_and_exporting_data/) if they aren't one of the parameters we show by default in the dashboard




## What's next?
You've got deeplinking (that works through install) and you're tracking link clicks, installs and opens. Let's supercharge your app by implementing more sharing features to help organic and paid growth. Also keep in mind that Branch links are highly customizable since you can embed arbitrary metadata in the links, so there's really no limit to what you can build:

{% ingredient recipe_preview/content_sharing %}{% endingredient %}

{% ingredient recipe_preview/personalized_welcome %}{% endingredient %}

{% ingredient recipe_preview/referral_links_with_incentives %}{% endingredient %}

{% ingredient recipe_preview/app_download_banner %}{% endingredient %}

{% ingredient recipe_preview/text_me_the_app_page %}{% endingredient %}
