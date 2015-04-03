{% section configuring_the_client_installing_the_sdk_header %}
### Installing the SDK
{% endsection %}

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
[TODO]
{% endif %}
<!---       /Android-specific installing the SDK -->
