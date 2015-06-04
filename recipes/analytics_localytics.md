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

## Getting Started

Before you can start sending data, you need to ensure a few things are completed:

- [Localytics SDK Integrated](http://docs.localytics.com/)
- [Branch SDK Integrated](https://dev.branch.io/recipes/quickstart_guide/ios/)
- Localytics account set up with and a **Localytics Profile API Key**

## Configure Dashboard

Now that you have all the required information, you'll need to navigate to our *Webhooks* tab. Click the Localytics button. You'll need to create a rule for each platform (iOS, Android). For each property, input your Profile API key. Hit submit.

That's it! You're good to go now!

## Testing

## Troubleshooting
