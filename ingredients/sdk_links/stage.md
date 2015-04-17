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

~~~ objc
[[Branch getInstance] getShortURLWithParams:nil andTags:nil andChannel:nil andFeature:nil andStage:@"4" andAlias:nil andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
~~~

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}

~~~ java
Branch.getInstance(getApplicationContext()).getShortUrl("", "", "stage_four", null, new BranchLinkCreateListener() {
	@Override
	public void onLinkCreate(String url, BranchError error) {
		if (error != null) {
			Log.i("Branch", ""have a link with stage!");
		}
	}
})
~~~

{% endif %}
<!--- /Android -->
