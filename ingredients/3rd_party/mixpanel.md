## Mixpanel

We have two methods to synchronize data between services. The first is using Branch callbacks to make a call to Mixpanel. This is under Methodology 1. The second is using Templated Webhooks to deliver data to your backend, who then send that data to Mixpanel. This is under Methodology 2.

### Methodology 1

	Pre-Reqs:
    Successful integration of both the Mixpanel and Branch SDKs
    Methods mapped out inside apps that want to event data sent to Mixpanel

The easiest way to send event data that comes in from Branch is to invoke `[Mixpanel track:@”my_event” properties:@{ @”key”: “value }];` inside any Branch callback. 

Example callback: 

    [branch initSessionWithLaunchOptions:launchOptions andRegisterDeepLinkHandler:^(NSDictionary *params, NSError *error) {
        if (!error) {
            // Add Mixpanel call here.
        }
}];

In this specific example, we can unpack the params found after we determine it’s an install and have the same params go to Mixpanel.

### Methodology 2
	
	Pre-Reqs:
    A server that accepts GET or POST commands
    Mixpanel back-end SDK configured to upload data to Mixpanel account

In this methodology, you will need to configure the GET or POST with our webhooks. You will specify what parameter is passed through to your server in addition to the data we provide, which is found below: 

{
"event": "open",
"metadata": {
	"ip": "73.222.120.96",
	"referred": false
},
"session_referring_link_data": {
		"app_id": "98444119008870744",
		"tag": null,
		"campaign": null,
		"channel": null,
		"feature": "marketing",
		"stage": null,
		"tags": null,
	"data": {
		"$marketing_title": "Testing Mixpanel K/V",
		"extra_data": "1234"
	},
		"state": null,
		"alias": null,
		"date": "2015-04-27T18:25:36.402Z",
		"href": "/l/4ix6DwE_4U",
		"branch_id": "121303087695532448"
	},
	"os": "Android",
	"os_version": "19"
}

This is the base body that we send over, but you will use [[Branch getInstance] trackEvent:”@exciting_event” withState:state]] to attach any state variables you need (state being a JSON Dictionary).
