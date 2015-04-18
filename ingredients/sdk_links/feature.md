### Specifying Feature

The more analytics the better. If you want to track whether personalized invites, content shares or gift offers are driving more installs, you can optionally specify a `feature` tag.

By default we provide some suggestions for filling in feature when creating a link. Those are:

* share
* referral
* invite
* deal
* gift

You should feel free to specify any other "features" as you see fit.

<!--- iOS -->
{% if page.ios %}

Again, the code is straightforward:

{% highlight objc %}
[[Branch getInstance] getShortURLWithParams:@{} andChannel:@"SMS" andFeature:@"invite" andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
{% endhighlight %}

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}

{% highlight java %}
Branch.getInstance(getApplicationContext()).getShortUrl("sms", "invite_feature", "", null, new BranchLinkCreateListener() {
	@Override
	public void onLinkCreate(String url, BranchError error) {
		if (error == null) {
			Log.i("Branch", ""have a link with feature!");
		}
	}
})
{% endhighlight %}
{% endif %}
<!--- /Android -->
