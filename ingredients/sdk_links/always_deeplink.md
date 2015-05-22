<!--- $always_deeplink -->
{% section always_deeplink %}

## Always try to open the app - $always_deeplink

In certain cases you may want to override the default Branch behavior, which uses cookies and communication with our backend to determine whether to open an app. Branch knows that a user has the app if that user has clicked a Branch link and opened the app. This means that the first time a user clicks a Branch link, even if the app is installed, we will direct the user to the App Store.

To override this behavior, you can either select "Always try to open the app" on the [Dashboard](/domains/configuring_the_dashboard/{{page.platform}}/#always-try-to-open-the-app), or you can specify "$always_deeplink" : "true" on a per-link basis.

<!---    iOS -->
{% if page.ios %}

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[[Branch getInstance] getShortURLWithParams:@{@"$always_deeplink": @"true"} andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
Branch.getInstance().getShortURLWithParams(["$always_deeplink": "true"], andCallback: { (url: String?, error: NSError?) -> Void in
    if let urlToShare = url {
        NSLog("got my Branch link to share: %@", urlToShare)
    }
})
{% endhighlight %}
{% endtab %}
{% endtabs %}


{% endif %}
<!---    /iOS -->


<!---    Android -->
{% if page.android %}
{% highlight java %}
JSONObject params = new JSONObject();
try {
    params.put("$always_deeplink", true);
} catch (JSONException ex) { }
Branch.getInstance(getApplicationContext()).getShortUrl(params, new BranchLinkCreateListener() {
	@Override
	public void onLinkCreate(String url, BranchError error) {
		if (error == null) {
			Log.i("Branch", "created a URL with $always_deeplink set to true");
		}
	}
})
{% endhighlight %}

{% endif %}
<!---    /Android -->

 {% endsection %}
 <!--- /$always_deeplink -->