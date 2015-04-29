{% section sdk_links_custom_data_header %}### Attaching Custom Data to Links{% endsection %}

Branch links allow you to attach any information you want to links. Custom data can be information about an ad campaign, referring user, promotion, or content being shared. You use it to build a personalized referral system so users never see a generic onboarding screen again. You can take users straight to the content they wanted to see when they clicked the link in the first place.

Imagine how URLs are used on the Internet... now you have the same power inside your native mobile apps.

This data is stored on our backend and presented again when the user clicks on a link via the `deepLinkHandler` -- it's not simply appended to the end of the URL.

{% protip title="Tip: Aliasing Links" %}
Because we don't store data in the URL, you can create pretty links, like `bnc.lt/bob`. For information on custom aliases for links, {%section alias_protip %}see the section below, [Alias -- The Custom Ending](/domains/links_and_sharing/ios/#alias---the-custom-ending){% endsection %}.
{% endprotip %}

{% section example_explanation %}Store data about both the sharing user and the content shared in the data dictionary. Attaching information is as simple as including a dictionary at link creation time. If, for example, James is inviting friends to check out your app, you could do the following:{% endsection %}

<!--- iOS -->
{% if page.ios %}
{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[[Branch getInstance] getShortURLWithParams:@{  @"referringUsername": @"James",
                                                @"referringUserId": @"1234",
                                                @"contentId": @"0987"} andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);    
}];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
Branch.getInstance().getShortURLWithParams(["referringUsername": "James",
                                            "referringUserId": "1234",
                                            "contentId": "0987"], andCallback: { (url: String?, error: NSError?) -> Void in
    if let urlToShare = url {
        NSLog("got my Branch link to share: %@", urlToShare);
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
{% section example_code %}
{% endsection %}
Branch.getInstance(getApplicationContext()).getShortUrl(obj, new BranchLinkCreateListener() {
	@Override
	public void onLinkCreate(String url, BranchError error) {
	    Log.i("Branch", "Got a link with custom data!");
	}
});
{% endhighlight %}

{% endif %}
<!--- /Android -->
