{% section header %}
### Installing the SDK files
{% endsection %}

{% if page.ios %}
For iOS, the easiest way to install the SDK is via Cocoapods. Add `pod "Branch"` to your podfile and run `pod install` from the command line.

However, if you don't currently use Cocoapods, you can easily download and install our SDK.

- To download an open-source copy, [grab the zip here](https://github.com/BranchMetrics/Branch-ios-sdk) or [clone our repo here](https://github.com/BranchMetrics/branch-ios-sdk).
- You will need to drag and drop the Branch.framework file that you downloaded into your project. Be sure that "Copy items if needed" is selected.
- Please import CoreTelephony.framework and AdSupport.framework
{% endif %}
<!---       /iOS-specific installing the SDK -->


{% if page.android %}
For Android, the easiest way to add the SDK to your project is by adding the Branch SDK inside your project structure as a library dependency. Here are the steps:

- Right click on the main module within your project (this is called 'app' by default).
- Select `Open Module Settings`.
- Within the Dependencies tab, click the + button at the bottom of the window and select Library Dependency.
- Type branch, and hit the enter key to search Maven Central for the Branch SDK Library.
- Select the latest `io.branch.sdk.android:library` item listed.

In case you'd like to use our .jar instead, here's a [link](https://s3-us-west-1.amazonaws.com/branchhost/Branch-Android-SDK.zip) that always points to our latest.

Finally, you can always clone our [Android SDK](https://github.com/BranchMetrics/branch-android-sdk) project and import it into your workspace for maximum visibility.
{% endif %}
<!---       /Android-specific installing the SDK -->

{% if page.cordova %}
For Cordova/Ionic, the easiest way to install the SDK is via the Cordova plugin command line tool. 

- cd into your project directory
- Run `cordova plugin add https://github.com/BranchMetrics/Cordova-Ionic-PhoneGap-Deferred-Deep-Linking-SDK` from the command line

If you're on PhoneGap, you'll need to use us NPM now:

- cd into your project directory
- Run `npm install branch-cordova-sdk` from the command line
{% endif %}

{% if page.xamarin %}
The Branch Xamarin SDK is available as a [NuGet package](https://www.nuget.org/packages/Branch-Xamarin-Linking-SDK). You will need to add the package to your Android, iOS and Forms (if applicable) projects.

- Right click on each project and select Add->Add NuGet Package or double click on the Packages folder to bring up the NuGet package dialog in Xamarin Studio.
- Find the `Branch Xamarin Linking SDK` and select it. This will add the required assemblies to your projects. 
- You need to do this for each project that will use Branch calls. This include the Android and iOS projects even if this is a Forms based app since an initialization call needs to be added to each of the platform specific projects.

If you would rather build and reference the assemblies directly, you can clone this repository to your local machine and add:

- Add the BranchXamarinSDK project to your solution and reference it from your Android, iOS and Forms (if applicable) project.
- Add the BranchXamarinSDK.Droid project to your solution and reference it from your Android project, if any.
- Add the BranchXamarinSDK.iOS project and reference it from you iOS project, if any.
{% endif %}

{% if page.unity %}

{% endif %}

{% if page.adobe %}

{% endif %}

{% if page.titanium %}

{% endif %}