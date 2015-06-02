### Adding Tags

Are you a tag person? You can add as many simply tags as you want to a link. Note that these are **not** key-value pairs -- those belong in the [custom data dictionary](/recipes/links_and_sharing/{{page.platform}}/#attaching-custom-data-to-links).

<!--- iOS -->
{% if page.ios %}

No mysteries here:

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[[Branch getInstance] getShortURLWithParams:@{}
                                    andTags:@[@"any", @"other", @"tags", @"you", @"want"]
                                 andChannel:nil
                                 andFeature:nil
                                   andStage:nil
                                   andAlias:nil
                                andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
Branch.getInstance().getShortURLWithParams( ["foo": "bar"],
                                            andTags: ["any", "other", "tags", "you", "want"],
                                            andChannel: nil,
                                            andFeature: nil,
                                            andStage: nil,
                                            andCallback: { (url: String?, error: NSError?) -> Void in
    if error == nil {
        NSLog(@"got my Branch link to share: %@", url!);
    }
})
{% endhighlight %}
{% endtab %}
{% endtabs %}


{% highlight objc %}
{% endhighlight %}

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}

You'll want to use any of the `getShortUrl` methods that accept the paramter of type `Collection<String>` for tags. Check the following example:

{% highlight java %}
ArrayList<String> tags = new ArrayList<String>();
tags.add("tag1");
tags.add("tag2");
Branch.getInstance(getApplicationContext()).getShortUrl(tags, "channel1", null /*params dictionary */, new BranchLinkCreateListener() {
	@Override
	public void onLinkCreate(String url, BranchError error) {
		if (error == null) {
		    Log.d("MyTag", "Url = " + url);
		}
	}
});
{% endhighlight %}

{% endif %}
<!--- /Android -->
