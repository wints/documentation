{% section header %}
### URI Scheme
{% endsection %}

{% if page.ios %}

To set up your URI Scheme, you'll need to open your project in XCode and complete the following.

1. Click on YourProject-Info.plist on the left (or in Swift, Info.plist).
1. Find URL Types and click the right arrow. (If it doesn't exist, right click anywhere and choose Add Row. Scroll down and choose URL Types)
1. Add `myapp`, where _myapp_ is a unique string for your app, as an item in URL Schemes as below:

![Setting Key in PList Demo](/img/ingredients/configuring_the_client/ios_uri_scheme.png)
{% endif %}
<!---       /iOS-specific URI Scheme -->

{% if page.android %}

Open up Android Studio and navigate to your `AndroidManifest.xml`.

You can register your app to respond to direct deep links (yourapp:// in a mobile browser) by adding the second intent filter block.

{% highlight xml %}
<activity
	android:name="com.yourapp.SplashActivity"
	android:label="@string/app_name" >
	<intent-filter>
		<action android:name="android.intent.action.MAIN" />
		<category android:name="android.intent.category.LAUNCHER" />
	</intent-filter>
	<!-- Add this intent filter below, and change yourapp to your app name -->
	<intent-filter>
		<data android:scheme="yourapp" android:host="open" />
		<action android:name="android.intent.action.VIEW" />
		<category android:name="android.intent.category.DEFAULT" />
		<category android:name="android.intent.category.BROWSABLE" />
	</intent-filter>
</activity>
{% endhighlight %}

However, you can have many `intent-filters`. It all depends on how you architecht receiving intents inside your application.

{% endif %}
<!---       /Android-specific URI Scheme -->

Go do a quick double-check that this is the same URI scheme listed on the Dashboard, where it should be `myapp://`). {%section dashboard_uri %}For more info on setting up a URI scheme on the Dashboard, [click here](/domains/configuring_the_dashboard/{{page.platform}}/#uri-scheme).{%endsection %}
