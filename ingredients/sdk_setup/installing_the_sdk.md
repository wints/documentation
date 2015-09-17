{% section header %}
### Installing the SDK files
{% endsection %}

{% if page.ios %}
For iOS, the easiest way to install the SDK is via Cocoapods. Add `pod "Branch"` to your podfile and run `pod install` from the command line.

However, if you don't use Cocoapods, you can easily download and install our SDK.

- To download an open-source copy, [grab the zip here](https://github.com/BranchMetrics/Branch-ios-sdk) or [clone our repo here](https://github.com/BranchMetrics/branch-ios-sdk).
- You will need to drag and drop the Branch.framework file that you downloaded into your project. Be sure that "Copy items if needed" is selected.
- Import the following frameworks under `Build Phases` for your app target: `AdSupport.framework`, `CoreTelephony.framework`, `CoreSpotlight.framework`, `MobileCoreServices.framework`, `SafariServices.framework`

{% endif %}
<!---       /iOS-specific installing the SDK -->


{% if page.android %}
Just add `compile 'io.branch.sdk.android:library:1.+'` to the dependencies section of your `build.gradle` file.

_alternative #1 - use our .jar:_ In case you'd like to use our .jar instead, here's a [link](https://s3-us-west-1.amazonaws.com/branchhost/Branch-Android-SDK.zip) that always points to our latest. 

_alternative #2 - download our code:_ In case you'd like full control, here is our [Android SDK](https://github.com/BranchMetrics/branch-android-sdk) project, including a full test-suite. Feel free to submodule and import into your workspace.
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

[optional] If you would rather build and reference the assemblies directly, you can clone this repository to your local machine and add:

- Add the BranchXamarinSDK project to your solution and reference it from your Android, iOS and Forms (if applicable) project.
- Add the BranchXamarinSDK.Droid project to your solution and reference it from your Android project, if any.
- Add the BranchXamarinSDK.iOS project and reference it from you iOS project, if any.
{% endif %}

{% if page.unity %}

- You download the package from our [filehost on S3 here](https://s3-us-west-1.amazonaws.com/branchhost/BranchUnityWrapper.unitypackage). Or clone [our repository](https://github.com/BranchMetrics/Unity-Deferred-Deep-Linking-SDK) and access the package from there.
- Add the package to your Unity project by clicking `Assets -> Import Package`.

- Due to Unity requirements, our UnityPackage file must have all of its contents in a single folder. This means that you'll have to manually move the Plugins folder out of our Branch folder, and into the root of your Assets folder. If you have an existing Plugins folder, just merge our contents into it.

{% image src='/img/ingredients/sdk_setup/unity_plugins_move.gif' half center alt='unity plugins' %}


#### Enable Objective C exceptions

If you're creating an iOS app for your Unity project, you must enable Objective C exceptions in the Build Settings in order for Branch to compile.

{% image src='/img/ingredients/sdk_setup/unity_enable_exceptions.png' half center alt='unity plugins' %}

#### iOS + Unity 4.6

There seem to be some issues with 4.6 pulling all of the Branch-SDK files into the Xcode project. A simple solution is to pull all of the files from the `Branch-SDK` folder directly into the `Assets/Plugins/iOS` folder as siblings to the `BranchiOSWrapper.mm` file.

Additionally, the Xcode project template for Unity 4.6.x (tested with 4.6.1, but may be all the way up through 4.6.6) does not use ARC. Branch requires ARC, and we don't intend to add if checks thoughout the SDK to try to support pre-ARC. However, you can add flags to the project to compile the Branch files with ARC, which should work fine for you. Simple add `-fobjc-arc` to all Branch files in the `Compile Sources` region under `Build Phases` within your target.

{% image src='/img/ingredients/sdk_setup/unity_ios_compile_source_flags.png' half center alt='unity plugins' %}
{% endif %}

{% if page.adobe %}
- You download the package from our [filehost on Github here](https://github.com/BranchMetrics/Branch-AIR-ANE-SDK/archive/master.zip). Or clone [our repository](https://github.com/BranchMetrics/AIR-ANE-Deferred-Deep-Linking-SDK) and access the package from there.
- Import the `Branch.ane` into your project. Depending your IDE you might need to import the `Branch.swc` as well.
- Inside your `*-app.xml` be sure to add this line `<extensionID>io.branch.nativeExtensions.Branch</extensionID>`
{% endif %}

{% if page.titanium %}
#### Acquire the files

All the files you need are included in [our repository](https://github.com/BranchMetrics/Titanium-Deferred-Deep-Linking-SDK), so go ahead and clone it.

#### Building the SDK modules

The iOS and Android Branch SDK Titanium modules can be built from their respective src/ directories: src/titanium/BranchSDK/iphone src/titanium/BranchSDK/android

To build the modules in Appcelerator Studio, they must first be imported into your project, or into a new project.

1. Open the App Explorer view on the left (`Window -> Show View -> App Explorer`), then click `Import Project`.
2. Appcelerator Studio will show a variety of import options. Open the `General` folder, and select `Existing Folder as New Project`.
3. Select the Branch Titanium SDK folder by clicking `Browse`, and choose `src/titanium/BranchSDK/`, then click `Finish`.
4. Select the desired module (iOS or Android) in top left of the Appcelerator Studio, above the App Explorer, and click the green play button.
5.Titanium modules can be built to 3 different output locations. The first option (Titanium SDK), publishes the module to your specific Titanium SDK location. Either wise, you can publish the module to an existing Mobile App project, or a specific location. Publishing the module to a specific location will produce a .zip file.

#### Installing the modules

1. Import the testbed app as an existing mobile project: `File -> Import`, then in the dialog open the `Appcelerator` folder and chose "Existing Mobile Project".
2. The Branch Titanium testbed: `testbeds/titanium/Branch-Sdk-Testbed/`, requires the built Branch SDK modules prior to running. If you would like to add these to the testbed app, simply chose the testbed app or your local Titanium SDK as the output location (see above for building instructions).
3. Browse to the testbed app directory: `testbeds/titanium/Branch-Sdk-Testbed/`, leave the default settings, and chose `Finish`.
4. To launch the testbed app simply select the Android or iOS simulator in the top left of Appcelerator studio, above the App Explorer, then click the green play button.

This will build and launch the testbed app in the respective simulator, and log output to the Appcelerator console.
{% endif %}