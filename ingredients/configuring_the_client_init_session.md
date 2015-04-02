---
type: ingredient
title: Configuring the Client - InitSession
platforms:
- ios
- android
- web
---

{% section configuring_the_client_init_session %}### Starting a Branch Session{% endsection %}

This is required for any SDK call. There is a lot of magic packed into the initSession call and corresponding deepLinkHandler.

<!---    iOS -->
{% if page.ios %}

<!---       iOS explanation -->
{% section configuring_the_client_init_session_ios_expl %}
The deepLinkHandler is a block of code that executes when a Branch session is successfully initialized, as well as anytime a user clicks a link to your app. This is the central place where you define how your app should respond to links.

When a user clicks a Branch link and your app opens, the Branch SDK contacts the Branch servers to see whether this user opening your app is the same one who just clicked the link. If it is, then the params dictionary that you see below will be populated with any data attached to a Branch link if a user just clicked one.

The `initSession` call is an asynchronous call and any other calls will be queued up to complete after the server returns a response.

Here's an example of the initSession call that you should make. This **must** be placed inside your app delegate's `application:didFinishLaunchingWithOptions`.
{% endsection %}
<!---       /iOS explanation -->

<!---       iOS code -->
{% section configuring_the_client_init_session_ios_code %}
~~~ objc
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	// anything else you need to do in this method
	// ...

	Branch *branch = [Branch getInstance];
	[branch initSessionWithLaunchOptions:launchOptions andRegisterDeepLinkHandler:^(NSDictionary *params, NSError *error) {
        if (!error) {
			// params are the deep linked params associated with the link that the user clicked -> was re-directed to this app
			// params will be empty if no data found
			// ... insert custom logic here ...
        }
	}];
}
~~~
{% endsection %}
<!---       /iOS code -->

{% endif %}
<!---    /iOS -->


{% if page.android %}
[TODO], don't forget the closeSession as well
{% endif %}