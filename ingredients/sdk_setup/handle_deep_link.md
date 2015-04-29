### Handle Deep Link

{% if page.ios %}

In order for your app to properly handle deep links, and to allow Branch to work its magic and call the deepLinkHandler, you will need to add the following code within `application:openURL:sourceApplication:annotation:`:

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
    // pass the url to the handle deep link call
    if (![[Branch getInstance] handleDeepLink:url]) {
        // do other deep link routing for the Facebook SDK, Pinterest SDK, etc
    }
    return YES;
}
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
func application(application: UIApplication, openURL url: NSURL, sourceApplication: String?, annotation: AnyObject?) -> Bool {
    // pass the url to the handle deep link call
    if (!Branch.getInstance().handleDeepLink(url)) {
        // do other deep link routing for the Facebook SDK, Pinterest SDK, etc
    }
    
    return true
}
{% endhighlight %}
{% endtab %}
{% endtabs %}

{% endif %}


{% if page.android %}
Inside Android, allow us to hook into your activities where you have declared and intent filter for deeplinking. During the `onCreate` portion of execution, you can add something like the following: 

{% highlight java %}


branch.initSession(new BranchReferralInitListener() {
	@Override
	public void onInitFinished(JSONObject referringParams, BranchError error) {
		try {
			Iterator<?> keys = referringParams.keys();
			while (keys.hasNext()) {
				String key = (String) keys.next();
				Log.i("Branch Link", key + ", " + referringParams.getString(key));
				
				// iterate through keys and start an Activity.
			}
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
}, this.getIntent().getData(), this);
{% endhighlight %}
{% endif %}

