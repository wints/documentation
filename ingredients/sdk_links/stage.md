### Adding Stage

Stage is one of our lesser used options but is useful nonetheless. Useful for tracking at what stage in your app a link was created. Stage is fully determined by you and is specific to each app. Sample stages include:

* pre_signup
* mid_signup
* post_signup
* viewing_content
* on_home_screen

If your app is a game, stage could require to the user's current level.

<!--- iOS -->
{% if page.ios %}

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[[Branch getInstance] getShortURLWithParams:nil andTags:nil andChannel:nil andFeature:nil andStage:@"4" andAlias:nil andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
Branch.getInstance().getShortURLWithParams( nil,
                                            andChannel: nil,
                                            andFeature: nil,
                                            andStage: "4",
                                            andCallback: { (url: String?, error: NSError?) -> Void in
    if let urlToShare = url {
        NSLog("got my Branch link to share: %@", urlToShare)
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
Branch.getInstance(getApplicationContext()).getShortUrl("", "", "stage_four", null, new BranchLinkCreateListener() {
	@Override
	public void onLinkCreate(String url, BranchError error) {
		if (error == null) {
			Log.i("Branch", ""have a link with stage!");
		}
	}
})
{% endhighlight %}

{% endif %}
<!--- /Android -->
