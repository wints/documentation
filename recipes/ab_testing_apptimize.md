---
type: recipe
title: "AB Testing: Apptimize"
page_title: Deep link users through install, and test the best user flow automatically.
description: Branch has partnered with Apptimize to seamlessly A/B test user flows after a deeplink click from Branch. 
keywords: abtesting, apptimize
platforms:
- ios
- android
---

# Apptimize and Branch

We've partnered with Apptimize to seamlessly provide different onboarding flows for users arriving through Branch links. You can design and test different user flows based off the data a Branch deeplink returns to you. 

Have a theory that users clicking Branch links right into a product page convert better than users clicking Branch links but must authenticate first? With our integration, you can define, measure, and prove your hypothesis.

{% protip title="Still need to integrate Branch?" %}This guide assumes that you have already integrated Branch. If you need to integrate Branch still, jump to "[Integrating the SDK](/recipes/quickstart_guide/ios/)".
{% endprotip %}

## How It Works

Currently, both the Branch and Apptimize SDK are required to be integrated inside your mobile application. What happens is that you pre-define different routes through the Apptimize SDK, and when certain data surfaces through the Branch callback, Apptimize will trigger the code block tied to it, accordingly. 

## Set Up Apptimize

This guide assumes you have an account with Apptimize already. If not, please go to the [Apptimize dashboard](https://apptimize.com/admin/sign-up?p=20) and register for an account. Once there, [install](https://apptimize.com/admin/help) the SDK.

### Configure An Apptimize Campaign

Now that you've imported the Apptimize SDK into your project, it's time to think through and define what your users will see when they click a Branch link and get taken to your app.

![campaign](/img/recipes/apptimize/campaign-creation.png)

*You'll notice the campaign name as Branch Experiment, and different variants. Each variant corresponds to a different piece of code executed, e.g. someone sees a full listing of products instead of a single product*

### Set Targeting (from Branch deeplink data)

Next, you'll need to segment users based off *custom attributes* on the Apptimize dashbaord. This is done using `[Apptimize setUserAttributeString: forKey:]`. In the future, Apptimize will import Branch data, so that you may bypass this step. Per the image below, we have set a **custom attribute** of channel, and value of **facebook**, meaning that if someone comes from a Branch link with the channel set to Facebook, they will automatically be a part of your campaign, and subject to different flows you've defined.

![targeting](/img/recipes/apptimize/campaign-targeting.png)