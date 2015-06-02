
### Custom Events

You can track any custom user actions you wish. This is useful for analytics. From these events you can construct [conversion funnels](/recipes/dashboard_pro_tips/ios/#funnels) on the Dashboard's [Summary](https://dashboard.branch.io/#) page at the bottom. You can also be notified via a postback to your server every time that an event happens. Visit the [Webhooks](/recipes/webhooks_and_exporting_data/) page for more information on receiving postbacks.

Examples of what you may want to track:

* sign up (especially if you have multiple steps)
* purchases
* content shares
* referrals sent
* any other engagement, etc.


To track custom events, you can make a simple call to the SDK.

{% if page.ios %}

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[[Branch getInstance] userCompletedAction:@"customAction"];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
Branch.getInstance().userCompletedAction("customAction")
{% endhighlight %}
{% endtab %}
{% endtabs %}

{% endif %}
<!--- /iOS -->

{% if page.android %}

Branch.getInstance(getApplicationContext()).userCompletedAction("custom_action_1");

{% endif %}
<!--- /Android -->

You can also include other information about the action, which is useful for [rewarding user actions](/recipes/advanced_referral_incentives/{{page.platform}}/#rewards) or receiving additional information via our [webhooks](/recipes/webhooks_and_exporting_data/). To include custom information, pass it up via the state dictionary:

{% if page.ios %}

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[[Branch getInstance] userCompletedAction:@"purchase" withState:@{@"item":@"123-AB-456"}];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
Branch.getInstance().userCompletedAction("purchase", withState: ["item" : "123-AB-456"])
{% endhighlight %}
{% endtab %}
{% endtabs %}

{% endif %}
<!--- /iOS -->

{% if page.android %}
JSONObject metaData = new JSONObject();
metaData.put("key", "value");
Branch.getInstance().userCompletedAction("custom_action_with_data", metaData);

{% endif %}
<!--- /Android -->
