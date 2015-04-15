
### Example: Using RequestBin to test

If you're not sure whether one of our webhooks is configured correctly, take a look at [requestb.in](http://requestb.in/). RequestBin gives you a URL that collects requests, such as our webhook's requests, to see what the client (aka Branch) is sending.

To get started, navigate to their website and click "+ Create a RequestBin".

![requestbin create](/img/ingredients/webhooks/requestbin_create.png)

Now you should have a dedicated URL that you can use to simulate your own servers. For example:

![requestbin inspect](/img/ingredients/webhooks/requestbin_inspect.png)

You can test it out using cURL, which is pretty sweet. Give it a shot if you want.

The next step is to setup your postback with Branch. Navigate to the Dashboard's Webhooks page and click "+ Add a new webhook".

Now you should copy your URL from RequestBin into the textfield following the label "Send a webhook to".

![requestbin inspect](/img/ingredients/webhooks/requestbin_add_webhook.png)

Choose `Install` for the event.

Now every time someone opens the app, the webhook you've configured on Branch will send a request to your RequestBin. Give it a shot!

After tapping a marketing link (visit our [Deeplinked Ads](/recipes/deeplink_ads/{{page.platform}}/) guide to see how this link was constructed), RequestBin shows the following response:

![requestbin inspect](/img/ingredients/webhooks/requestbin_response.png)

There is a ton of information here. Check it out and let us know if you have questions!

