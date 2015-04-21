### Handle Deep Link

{% if page.ios %}

In order for your app to properly handle deep links, and to allow Branch to work its magic and call the deepLinkHandler, you will need to add the following code within `application:openURL:sourceApplication:annotation:`:

{% highlight objc %}
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
  // pass the url to the handle deep link call
  if (![[Branch getInstance] handleDeepLink:url]) {
    // do other deep link routing for the Facebook SDK, Pinterest SDK, etc
  }
    return YES;
}
{% endhighlight %}

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
				
				// start photo viewing activity if data available.
				if (key.equals("photoId")) {
				    Intent i = new Intent(this, PhotoViewActivity.class);
				    String photoId = referringParams.optString(key, "");
				    i.putExtra(key, photoId)
				}
				// otherwise, default to regular flow.
				else {
					Intent i = new Intent(this, HomeActivity.class)
				}
				startActivity(i);
			}
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
}, this.getIntent().getData(), this);
{% endhighlight %}
{% endif %}

