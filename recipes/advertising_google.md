---
type: recipe
title: "Advertising: Google AdWords Ads"
hide_platform_selector: true
---

{% protip title="Still need to integrate Branch?" %}This guide assumes that you have 1. already [integrated Branch](/recipes/quickstart_guide/ios/) and 2. configured your app to [send IDFA or GAID](/recipes/submitting_apps/ios/). These are prerequisites to install ads, so please do them first.
{% endprotip %}

##Getting Started with Google AdWords

NOTE: This step can be skipped if you already have a mobile install AdWords campaign setup with ads and keywords.

Google AdWords can be a powerful platform for reaching users through Google's search network ads and services. To get started with creating deep linked AdWords ads, first create a campaign.

First create a campaign and ad group. Set keywords that will trigger your ad to show when people are searching using Google. When setting display URLs and final URLs for ads, makes sure to link to either your Google Play Store page (Android) or your App Store page (iOS). The rest of the settings are up to you! 

After your campaign and ad group are created, proceed to the 'Ads' tab to create your first ad. Again, make sure to make your display URL and Final URL link to your download page. Check off the box for 'mobile' next to 'Device preference'.

Under 'Ad URL options (advanced)' copy and paste in the URL `http://www.branch.io/?branchlink={_branchlink}`in to the tracking template. For 'Custom parameter' you want to add 'branchlink' in the name box and your Branch link in the value box. Then save the ad. Google has a process of reviewing ads for certain guidelines that can take up to 1 business day. Once approved, hover your mouse over the text bubble under status in the ads tab. This will show whether based on your bid per keyword and the ads quality, whether it is currently being shown to users. If it is not, follow their guidelines to amend the situation.

The next step is to go to the 'conversions' section under 'Tools'. There, you need to create a conversion that tracks installs. Select 'App' as the source of conversion and 'App downloads' as well as your chosen app platform.

##Configuring your Branch Dashboard for AdWords

Go to the Google AdWords section and input your 'Conversion Label' and 'Conversion ID' that we saved in the last step.