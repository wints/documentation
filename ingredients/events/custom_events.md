
### Custom Events

You can track any custom user actions you wish. This is useful for analytics. From these events you can construct conversion funnels on the Dashboard's [Summary](https://dashboard.branch.io/#) page at the bottom. You can also be notified via a postback to your server every time that an event happens. Visit the [Webhooks](/domains/webhooks/{{page.platform}}/) page for more information on receiving postbacks.

Examples of what you may want to track:

* signup (especially if you have multiple steps)
* purchases
* content shares
* referrals sent
* any other engagement, etc.


To track custom events, you can make a simple call to the SDK.

{% if page.ios %}
~~~ objc
[[Branch getInstance] userCompletedAction:@"customAction"];
~~~
{% endif %}
<!--- /iOS -->

{% if page.android %}
[TODO]

{% endif %}
<!--- /Android -->

You can also include other information about the action, which is useful for [rewarding user actions](/domains/rewards_and_buckets/{{page.platform}}/) or receiving additional information via our [webhooks](/domains/webhooks/{{page.platform}}/). To include custom information, pass it up via the state dictionary:

{% if page.ios %}
~~~ objc
[[Branch getInstance] userCompletedAction:@"purchase" withState:@{@"item":@"123-AB-456"}];
~~~
{% endif %}
<!--- /iOS -->

{% if page.android %}
[TODO]

{% endif %}
<!--- /Android -->
