{% section header %}### Creating links in your app{% endsection %}

{% section explanation %}
Links are the foundation to everything Branch offers. There are many different aspects to creating links but the most important are:

- Embed key/value deep link metadata. We'll make sure this gets delivered to the app with the clicking user
- Label feature and channel for analytics on the dashboard

Here's how to create your own Branch Links.
{% endsection %}

<!--- iOS -->
{% if page.ios %}

On iOS, it's a rather simple method call.

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[[Branch getInstance] getShortURLWithParams:{% section params %}@{@"foo": @"bar"}{% endsection %} andChannel:@"sms" andFeature:BRANCH_FEATURE_TAG_SHARE andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
Branch.getInstance().getShortURLWithParams(["foo" : "bar"], andChannel: "sms", andFeature: BRANCH_FEATURE_TAG_SHARE, andCallback: { (url: String?, error: NSError?) -> Void in
    if error == nil {
        NSLog(@"got my Branch link to share: %@", url!)
    }
})
{% endhighlight %}
{% endtab %}
{% endtabs %}

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}

{% highlight java %}
{% section params %}JSONObject obj = new JSONObject(); obj.putString("foo", "bar");{% endsection %}
branch.getShortUrl(obj, new BranchLinkCreateListener() {
	@Override
	public void onLinkCreate(String url, BranchError error) {
		Log.i(TAG, "Ready to share my link = " + url);
	}
});
{% endhighlight %}

{% endif %}
<!--- /Android -->
