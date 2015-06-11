---
type: recipe
title: "Analytics: Localytics"
hide_platform_selector: true
---

# Sending Branch Install Data to Localytics

We've partnered with Localytics to provide an easy way to deliver Branch install data to your Localytics dashboard.

## How It Works

Through webhooks, we can send all install data that Branch is responsible for. Building on top of Webhooks, we have built a custom integration to automatically send said data without any extra work on your side. We just need some configuration information, and we'll take care of the rest.

Note: We rely on the device ID to filter an install between Branch, so if a Branch link click leads to an install, that user (or device) will be sent to Localytics.

## Getting Started and Setup

Before you can start sending data, we'll walk you through a minimum of what is needed.

### Set Up Localytics

This guide assumes you have an account with Localytics already. First, navigate to your account on Localytics, and grab the SDK, and register an application.

After [integrating the SDK](http://docs.localytics.com/), we'll need your API key to allow us to attribute. Navigate to the `Attribution` section, and click the `...` (overflow) section, and select `Settings`:

![overflow](img/recipes/localytics/localytics-more.png)

Once there, you'll need to add your **iTunes ID**, and under the section `Ad Tracking Setup`, check the box labeled `Third-party Attribution`. This will enable an Attribution ID for you. Copy it, and have it handy for the next steps:

![settings](img/recipes/localytics/localytics-attr-settings.png)

## Configure Dashboard

Now that you have all the required information, you'll need to navigate to our *Webhooks* tab. Click the Localytics button. You'll need to create a rule for each platform (iOS, Android). For each property, input your Profile API key. Hit submit.

That's it! You're good to go now!

## Testing

## Troubleshooting
