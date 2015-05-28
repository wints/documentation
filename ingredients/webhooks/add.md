
## Register Webhook on Dashboard

To register a webhook on the Dashboard, open the [Webhooks](https://dashboard.branch.io/#/webhook) page.

Click Add a new webhook to get started.

{% image src='/img/ingredients/webhooks/add.png' half alt='add a new webhook button' %}

<div class="full-width">We've layed out the webhook registration in a sentence format. The format is:</div>

<div class="attention-grabber">Send a webhook to [ WEBHOOK URL ] [ EVERY TIME / THE FIRST TIME ] users trigger the event [ EVENT ].</div>

{% image src='/img/ingredients/webhooks/edit.png' half center alt='add a new webhook' %}


### Enter your webhook URL

First, enter the webhook URL in your own web server URL that you would like the events to be posted to.

For testing, you can try out using a URL from [RequestBin](http://requestb.in/). More information on that [below](/recipes/webhooks_and_exporting_data/#example-using-requestbin-to-test).


### Choose frequency of webhook

There are two options for frequency (as seen above). Either you can receive a webhook for every single event called or can receive it the first time only for each user.


### Choose event for which to receive webhook calls

The first step is to register for which events you`d like to receive a webhook for. These can be tailored to:

1. [Branch-provided events](/recipes/analytics_and_custom_events/{{page.platform}}/#standard-events): `install`, `open`, `referred session`, and `web session start`
1. Specific, [custom events](/recipes/analytics_and_custom_events/{{page.platform}}/#custom-events), like `purchase` or `share`
1. a wildcard event `*` which will return every single event tracked through Branch

(Branch automatically tracks `installs`, `opens`, `referred session` and `web session start` events as soon the native library is run on a device. Any other events will be recorded through the userCompletedAction function of the native library.)

The example above shows a wildcard webhook with event name `*`.


### Add filters (optional)

Filters are a set of advanced features where basically you can choose to only receive a webhook call when a matching key/value pair is found in the event metadata. Event metadata is passed via the SDK with userCompletedAction withState, where state is a dictionary of key/value pairs. For example, let's say you only want a webhook to be called when someone signs up in Chicago. You can specify `"city":"Chicago"` in the "Filters" section of the webhook. Then, in app, whenever `"city":"Chicago"` is passed in the state dictionary, it will trigger the webhook.

This is typically used for advanced integrations.


### Add templates (optional)

If you depend on branch links with certain query parameters appended such as unique IDs, we can send webhooks based off said ID.

For example, let's say you have a click ID for one of your ad campaigns--dynamically generated, of course:

*http://bnc.lt/l/campaignstuff?clickId=12345*

And want to send a webhook using a `GET` with the same clickId inside the URL, you would use our Passthrough feature to make it happen:

![template webhook](/img/ingredients/webhooks/templates.png)

**What you can specify**

Any query parameter you add to Branch Links will be captured and stored. You will need to follow this format: *session.link_click.query* and specify the key from the query string to pass through the value, as shown in the example above.


### Save and Confirm


After you press `Add webhook`, you should see the webhook in the list of your reward rules.

{% image src='/img/ingredients/webhooks/added.png' 2-thirds alt='save and confirm' %}
