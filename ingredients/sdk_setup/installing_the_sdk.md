{% section header %}
### Installing the SDK
{% endsection %}

{% if page.ios %}
For iOS, the easiest way to install the SDK is via Cocoapods. Add `pod "Branch"` to your podfile and run `pod install` from the command line.

However, if you don't currently use Cocoapods, you can easily download and install our SDK. To download an open-source copy, [grab the zip here](https://github.com/BranchMetrics/Branch-ios-sdk).

You will need to drag and drop the Branch.framework file that you downloaded into your project. Be sure that "Copy items if needed" is selected.

{% image src='/img/ingredients/configuring_the_client/ios_importing.gif' alt='importing SDK' %}

**You also need to import CoreTelephony**. See the graphic {% section telephony %}below:

{% image src='/img/ingredients/configuring_the_client/ios_core_telephony.gif' alt='importing Core Telephony' %}
{% endsection %}


{% protip title="Most accurate matching" %}
To get the best experience with Branch, you should import AdSupport.framework. This allows us to leverage the IDFA for more accurate matching, and we can also identify users who return later after uninstalling the app.
{% endprotip %}

{% endif %}
<!---       /iOS-specific installing the SDK -->




{% if page.android %}
For Android, the easiest way to add the SDK to your project is by adding the Branch SDK inside your project structure as a library dependency. Here are the steps:

- Right click on the main module within your project (this is called 'app' by default).
- Select `Open Module Settings`.
- Within the Dependencies tab, click the + button at the bottom of the window and select Library Dependency.
- Type branch, and hit the enter key to search Maven Central for the Branch SDK Library.
- Select the latest io.branch.sdk.android:library item listed.

In case you'd like to use our .jar instead, here's a [link](https://s3-us-west-1.amazonaws.com/branchhost/Branch-Android-SDK.zip) that always points to our latest.

Finally, you can always clone our [Android SDK](https://github.com/BranchMetrics/branch-android-sdk) project and import it into your workspace for maximum visibility.
{% endif %}
<!---       /Android-specific installing the SDK -->
