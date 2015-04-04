### Custom Events

You can track any custom user actions you wish. This is useful for analytics. From these events you can construct conversion funnels on the Dashboard's [Summary](https://dashboard.branch.io/#) page at the bottom. You can also be notified via a postback to your server every time that an event happens. Visit the [TODO] [Webhooks]() reference for more information on receiving postbacks.

<!--- iOS -->
{% if page.ios %}

To track custom events, you can make a simple call to the SDK.

~~~objc
[[Branch getInstance] userCompletedAction:@"customAction"];
~~~

You can also include other information about the action, which is useful for [TODO] [rewarding user actions]() or receiving additional information via our [TODO] [Webhooks](). To include custom information, pass it up via the state dictionary:

~~~objc
[[Branch getInstance] userCompletedAction:@"purchase" withState:@{@"item":@"123-AB-456"}];
~~~

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}


{% endif %}
<!--- /Android -->
