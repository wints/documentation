{% section explanation %}
Now you need to add the Branch Key that you received on the Dashboard into your app.
{% endsection %}

{% if page.ios %}
### PList configuration

#### Add your Branch key

Your app key can be retrieved on the [Settings](https://dashboard.branch.io/#/settings) page of the dashboard. Now you need to add it to YourProject-Info.plist (Info.plist for Swift).

1. In plist file, mouse hover "Information Property List" which is the root item under the Key column.
1. After about half a second, you will see a "+" sign appear. Click it.
1. In the newly added row, fill in "branch_key" for its key, leave type as String, and enter your app key obtained in above steps in its value column.
1. Save the plist file.

#### Configure for deep linking

{% endif %}
<!---       /iOS-specific Branch Key -->


{% if page.android %}
### Manifest configuration

#### Add your Branch key

Your app key can be retrieved on the [Settings](https://dashboard.branch.io/#/settings) page of the dashboard. Now you need to add it to your project workspace.

1. Navigate to to res/values/strings.xml
2. Navigate to AndroidManifest.xml and add the following `<meta-data` tag:

{% highlight xml %}
<application>
    <!-- Other existing entries -->

    <meta-data android:name="io.branch.sdk.BranchKey" android:value="key_live_jbgnjxvlhSb6PGH23BhO4hiflcp3y8kx" />
    <meta-data android:name="io.branch.sdk.BranchKey.test" android:value="key_test_jkptOCZtmtxhOMZ11ynbXecdDCd93cbr" />
</application>
{% endhighlight %}

#### Configure for deep linking

Find the Activity you want to open up when a link is clicked (normally your splash Activity) and do the following:

1. Copy in the intent filter as seen below with VIEW/DEFAULT/BROWSABLE in it.
2. Change _yourapp_ to a URI scheme representative of your app

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

#### Subclass the Branch activity

Branch can automatically track the Android app lifecycle on API level 14 and above, so make sure that your `minSdkVersion` is 14. If you need to support pre-14, please see section about [session management below](#initialization-to-support-Android-pre-14).

{% highlight xml %}
 <application
    android:name="io.branch.referral.BranchApp">
{% endhighlight %}

If you already use an Application class or don't want to subclass your Application, you can choose from [the alternatives listed here](alternatives-to-application-subclass).

{% endif %}
<!---       /Android-specific Branch Key -->
