### Handle Deep Link

{% if page.ios %}

In order for your app to properly handle deep links, and to allow Branch to work its magic and call the deepLinkHandler, you will need to add the following code within `application:openURL:sourceApplication:annotation:`:

~~~ objc
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
  // pass the url to the handle deep link call
  if (![[Branch getInstance] handleDeepLink:url]) {
    // do other deep link routing for the Facebook SDK, Pinterest SDK, etc
  }
    return YES;
}
~~~

{% endif %}


{% if page.android %}
Inside Android, allow us to hook into your activities where you have declared and intent filter for deeplinking. During the `onCreate` portion of execution, you can add something like the following: 

~~~java
branch.initSession(new BranchReferralInitListener() {
	@Override
	public void onInitFinished(JSONObject referringParams, BranchError error) {
		Log.i(TAG, "Branch Initialized! Routing to content...");
		try {
			MonsterPreferences prefs = MonsterPreferences.getInstance(getApplicationContext());
			Intent i;
			if (referringParams.has("monster")) {
				prefs.setMonsterName(referringParams.getString("monster_name"));
				prefs.setFaceIndex(referringParams.getInt("face_index"));
				prefs.setBodyIndex(referringParams.getInt("body_index"));
				prefs.setColorIndex(referringParams.getInt("color_index"));
				i = new Intent(getApplicationContext(), MonsterViewerActivity.class);
			} else {
				if (prefs.getMonsterName() == null) {
					prefs.setMonsterName("");
					i = new Intent(getApplicationContext(), MonsterCreatorActivity.class);
				} else {
					i = new Intent(getApplicationContext(), MonsterViewerActivity.class);
			    }
			}
			startActivity(i);
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
}, this.getIntent().getData(), this);
~~~
{% endif %}

