---
type: recipe
title: "Marketing: Kahuna"
platforms:
- ios
- android
---

# Sending Branch Install Data to Kahuna

We've partnered with Kahuna to provide an easy way to match Branch installs and attributions to your Kahuna dashboard. This is great for segmenting your users and providing higher granularity for your organic cohorts vs paid cohorts.

{% protip title="Still need to integrate Branch?" %}This guide assumes that you have already integrated Branch. If you need to integrate Branch still, jump to "[Integrating the SDK](/recipes/quickstart_guide/ios/)".
{% endprotip %}

## How It Works

Through webhooks, we can attribute all Branch-involved installs by matching user identifiers on the Branch side to those in Kahuna. On top of webhooks, we have built a custom integration to automatically send said data without any extra work on your side (besides integrating both SDKs). We just need some configuration information from your Kahuna account, and we'll take care of the rest.

Before you can start sending data, we'll walk you through a minimum of what is needed.

## Set Up Kahuna

This guide assumes you have an account with Kahuna already. First, navigate to your account on Kahuna, register your application, and grab the sdk.

After {% if page.ios %}[integrating the SDK](https://app.usekahuna.com/tap/getstarted/ios/){% endif %}{% if page.android %}[integrating the SDK](https://app.usekahuna.com/tap/getstarted/android/){% endif %}, we'll need your API and Secret keys to allow us to send data to Kahuna. Find your keys [here](https://app.usekahuna.com/tap/getstarted/userattributeapi/) or on any of the other API documentation pages.

Once you can verify the Kahuna SDK is integrated, and you have your API and Secret keys ready, we can start the Branch portion of the integration process.

## Configure Dashboard

Now that you have all the required information, you'll need to navigate to the *Webhooks* tab in the Branch dashboard. Click the Kahuna button and paste the API and Secret keys from your Kahuna account into the appropriate fields. Then select whether you would like this data to be sent to your production or sandbox dashboard (default is production).

{% image src="/img/recipes/kahuna/kahuna_webhook_edit.png" 3-quarters center alt="Edit Kahuna Webhook" %}

## Configure Branch SDK

One of the necessary components of our integration with Kahuna is that we need to be able to access the same user credential you track users by in Kahuna. Therefore in your Branch SDK, {% if page.ios %}[set up a custom *register* event](https://dev.branch.io/references/ios_sdk/#register-custom-events){% endif %}{% if page.android %}[set up a custom *register* event](https://dev.branch.io/references/android_sdk/#register-custom-events){% endif %}. This custom _register_ event allows us to collect user credentials passed in by you as parameters.

{% if page.ios %}
{% highlight objc %}
[[Branch getInstance] userCompletedAction:@"register" withState:@{ @"kahuna_id": @"mike@branch.io" }];
{% endhighlight %}
{% endif %}
{% if page.android %}
{% highlight java %}
JSONObject appState = new JSONObject();
try {
    appState.put("kahuna+id", "max@branch.io");
} catch (JSONException e) { }
branch.userCompletedAction("register", appState);
{% endhighlight %}
{% endif %}

You should pass into the event a key value pair of the string `"kahuna_id"` and a string of your user credential whether you decided on an email (alex@branch.io), a username (alex123), or an anonymous ID (12345678).

That's it! You have configured an integration between Branch and Kahuna!

## Testing

Now that your Branch account is configured to send data to Kahuna, we'll tell you the best strategy to test.

Inside XCode's iOS Simulator, you'll want to simulate fresh installs by clicking `Reset Content and Settings` under `File`. Then, anytime you run your application after, it'll simulate a new install. You'll need to continually do this every time you want to test an attribution.

### To Test Branch Attribution

Grab a Branch link from your dashboard, paste it in mobile safari, and hit go. Once the click is registered, run (Command+R) your application. This will allow Branch's SDK to match the "link-click" from earlier and confirm a Branch install just occurred (instead of another type of install) Proceed to where the *register* event was set so the user credential will be generated. This will trigger the webhook to fire.

Navigate back to the *Webhooks* section of our dashboard, and click your Kahuna webhook you're testing. If it worked, you'll notice a successful webhook sent, with a response code of `202`. This is what it would look like:

{% image src="/img/recipes/kahuna/kahuna_webhook_records.png" 3-quarters center alt="Kahuna Webhook Records" %}