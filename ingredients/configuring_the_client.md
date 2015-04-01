---
type: ingredient
title: Configuring the Client
platforms:
- ios
- android
- web
---

<!--- HEADER -->
## {% section configuring_the_client_header %}Configuring the Client{% endsection %}
<!--- /HEADER -->


<!--- REQUIRED -->
{% section required %}

<!---    1. Installing the SDK -->
{% section configuring_the_client_installing_the_sdk %}
### 1. Installing the SDK



{% if page.ios %}
For iOS, the easiest way to install the SDK is via Cocoapods. Add `pod "Branch"` to your podfile and run `pod install` from the command line.

However, if you don't currently use Cocoapods, you can easily download and install our SDK. To download an open-source copy, [grab the zip here](https://github.com/BranchMetrics/Branch-ios-sdk). 

You will need to drag and drop the Branch.framework file that you downloaded into your project. Be sure that "Copy items if needed" is selected.

![importing SDK](/img/ingredients/configuring_the_client/ios_importing.gif)

**You also need to import CoreTelephony**. See the graphic below:

![importing Core Telephony](/img/ingredients/configuring_the_client/ios_core_telephony.gif)

{% endif %}
<!---       /iOS-specific installing the SDK -->

{% if page.android %}
TODO
{% endif %}
<!---       /Android-specific installing the SDK -->

{% endsection %}
<!---    /1. Installing the SDK -->


<!---    2. Branch Key -->
{% section configuring_the_client_branch_key %}

### 2. Branch Key

{% if page.ios %}
Now you need to add the Branch Key that you received on the Dashboard into your app.

[TODO] Updated screenshots when we have the next version.

Your app key can be retrieved on the [Settings](https://dashboard.branch.io/#/settings) page of the dashboard. Now you need to add it to YourProject-Info.plist (Info.plist for Swift).

1. In plist file, mouse hover "Information Property List" which is the root item under the Key column.
1. After about half a second, you will see a "+" sign appear. Click it.
1. In the newly added row, fill in "bnc_app_key" for its key, leave type as String, and enter your app key obtained in above steps in its value column.
1. Save the plist file.

#### Screenshot
![Setting Key in PList Demo](https://s3-us-west-1.amazonaws.com/branch-guides/10_plist.png)

#### Animated Gif
![Setting Key in PList Demo](https://s3-us-west-1.amazonaws.com/branch-guides/9_plist.gif)

{% endif %}
<!---       /iOS-specific Branch Key -->


{% if page.android %}
Now you need to add the Branch Key that you received on the Dashboard into your app.

[TODO]

{% endif %}
<!---       /Android-specific Branch Key -->


{% endsection %}
<!---    /2. Branch Key -->


<!---    3. URI Scheme -->
{% section configuring_the_client_uri_scheme %}

### 3. URI Scheme

{% if page.ios %}
#### Here's how to do it on iOS

Next, you'll need to open your project in XCode and complete the following.

1. Click on YourProject-Info.plist on the left (or in Swift, Info.plist).
1. Find URL Types and click the right arrow. (If it doesn't exist, right click anywhere and choose Add Row. Scroll down and choose URL Types)
1. Add `myapp`, where _myapp_ is a unique string for your app, as an item in URL Schemes as below:


![Setting Key in PList Demo](/img/ingredients/configuring_the_client/ios_uri_scheme.png)

Go do a quick double-check that this is the same URI scheme listed on the Dashboard, where it should be `myapp://`). For more info on setting up a URI scheme on the Dashboard, [click here](/ingredients/configuring_the_dashboard/ios/index.html#uri_scheme).
{%endif%}
<!---       /iOS-specific URI Scheme -->

{% if page.android %}
#### Here's how to do it on Android

[TODO]

Go do a quick double-check that this is the same URI scheme listed on the Dashboard, where it should be `myapp://`). For more info on setting up a URI scheme on the Dashboard, [click here](/ingredients/configuring_the_dashboard/android/index.html#uri_scheme).
{%endif%}
<!---       /Android-specific URI Scheme -->

{% endsection %}
<!---    /3. URI Scheme -->


<!---    4. InitSession  -->
{% section configuring_the_client_init_session %} 

### 4. Starting a Branch Session

This is required for any SDK call. There is a lot of magic packed into the initSession call and corresponding deepLinkHandler.

{% if page.ios %}
The deepLinkHandler is a block of code that executes when a Branch session is successfully initialized, as well as anytime a user clicks a link to your app. This is the central place where you define how your app should respond to links.

When a user clicks a Branch link and your app opens, the Branch SDK contacts the Branch servers to see whether this user opening your app is the same one who just clicked the link. If it is, then the params dictionary that you see below will be populated with any data attached to a Branch link if a user just clicked one.

The `initSession` call is an asynchronous call and any other calls will be queued up to complete after the server returns a response.

Here's an example of the initSession call that you should make. This **must** be placed inside your app delegate's `application:didFinishLaunchingWithOptions`.

{% section configuring_the_client_init_session_ios %}
```objc
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
```
{% endsection %}
<!---       /iOS initSession call -->

{%endif%}

{% if page.android %}
TODO, don't forget the closeSession as well
{%endif%}

		
{% endsection %} 
<!---    /4. InitSession -->


<!---    5. Handle Deep Link  -->
{% section configuring_the_client_handle_deep_link %}

### 5. Handle Deep Link

{% if page.ios %}
In order for your app to properly handle deep links, and to allow Branch to work its magic and call the deepLinkHandler, you will need to add the following code within `application:openURL:sourceApplication:annotation:`:

```objc
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
	// pass the url to the handle deep link call
	if (![[Branch getInstance] handleDeepLink:url]) {
		// do other deep link routing for the Facebook SDK, Pinterest SDK, etc
	}
    return YES;
}
```
{%endif%}

{% if page.android %}
[TODO]
{%endif%}
	
{% endsection %} 
<!---    /5. Handle Deep Link -->


<!---    end required comment  -->
{% section configuring_the_client_end_required %}
{% endsection %} 
<!---    /end required comment -->


{% endsection %} 
<!--- /REQUIRED -->


<!--- ADVANCED -->
<a id="advanced" />
{% section configuring_the_client_advanced %} 

## Advanced Client Setup








{% endsection %} 
<!--- /ADVANCED -->
