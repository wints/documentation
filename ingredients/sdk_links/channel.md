### Specifying Channel

If you want a breakdown of your best performing channels--whether you measure best performing by most installs, most actual signups, or any other custom events you want to track--you should specify the channel. This can be done both for marketing links on the dashboard and for links created programmatically.

<!--- iOS -->
{% if page.ios %}

On iOS, it's a rather simple method call.

{% highlight objc %}
[[Branch getInstance] getShortURLWithParams:@{ @"foo": @"bar" } andChannel:@"SMS" andFeature:nil andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
{% endhighlight %}

You can safely pass in `nil` for any options you don't wish to specify.

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}

In Android, you will need to use a method call that accepts a `String channel` type parameter, for all URL generation calls.

{% highlight java %}
Branch.getInstance(getApplicationContext()).getContentUrl("sms",  null, new BranchLinkCreateListener() {
    @Override
    public void onLinkCreate(String url, BranchError error) {
    }
});
{% endhighlight %}
{% endif %}
<!--- /Android -->
