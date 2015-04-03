---
type: ingredient
title: Configuring the Client - HandleDeepLink
platforms:
- ios
- android
- web
---

{% section configuring_the_client_handle_deep_link_header %}### Handle Deep Link{% endsection %}

<!---    iOS -->
{% if page.ios %}

<!---       iOS explanation -->
{% section configuring_the_client_handle_deep_link_ios_explation %}
In order for your app to properly handle deep links, and to allow Branch to work its magic and call the deepLinkHandler, you will need to add the following code within `application:openURL:sourceApplication:annotation:`:
{% endsection %}
<!---       /iOS explanation -->


<!---       iOS code -->
{% section configuring_the_client_handle_deep_link_ios_code %}
~~~ objc
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
	// pass the url to the handle deep link call
	if (![[Branch getInstance] handleDeepLink:url]) {
		// do other deep link routing for the Facebook SDK, Pinterest SDK, etc
	}
    return YES;
}
~~~
{% endsection %}
<!---       /iOS code -->

{% endif %}
<!---    /iOS -->

{% if page.android %}
[TODO]
{% endif %}

