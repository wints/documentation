{% section header %}
### Starting a Branch Session
{% endsection %}

<!---    iOS -->
{% if page.ios %}
This is required for any SDK call. There is a lot of magic packed into the `initSession` call and corresponding `deepLinkHandler`.

<!---       iOS explanation -->
The `deepLinkHandler` is a block of code that executes when a Branch session is successfully initialized, as well as anytime a user clicks a link to your app. This is the central place where you define how your app should respond to links.

When a user clicks a Branch link and your app opens, the Branch SDK contacts the Branch servers to see whether this user opening your app is the same one who just clicked the link. If it is, then the params dictionary that you see below will be populated with any data attached to a Branch link if a user just clicked one.

The `initSession` call is an asynchronous call and any other calls will be queued up to complete after the server returns a response.

For **Swift**, you will need to add a bridging header in order to use Branch in your project's files. For help on adding a bridging header, see [this StackOverflow answer](http://stackoverflow.com/a/28486246/1914567).

There are a few pieces that **must** be in place. First, open your project's **AppDelegate.m** (or **AppDelegate.swift**) file.

* Add `#import "Branch.h"` at the top of the file (Objective-C only)
* Find the line which reads:

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
{% endhighlight %}
{% endtab %}
{% endtabs %}

and paste the following right below it:

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
Branch *branch = [Branch getInstance];
[branch initSessionWithLaunchOptions:launchOptions andRegisterDeepLinkHandler:^(NSDictionary *params, NSError *error) {
    if (!error) {
        // params are the deep linked params associated with the link that the user clicked -> was re-directed to this app
        // params will be empty if no data found
        // ... insert custom logic here ...
        NSLog(@"params: %@", params.description)
    }
}];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
let branch: Branch = Branch.getInstance()
branch.initSessionWithLaunchOptions(launchOptions, andRegisterDeepLinkHandler: { params, error in
    if (error == nil) {
        // params are the deep linked params associated with the link that the user clicked -> was re-directed to this app
        // params will be empty if no data found
        // ... insert custom logic here ...
        NSLog("params: %@", params.description)
    }
})
{% endhighlight %}
{% endtab %}
{% endtabs %}

{% protip title="initSession is called 100% of the time" %}
`initSession` is always called, whether or not the user clicked on a Branch link. If no Branch link was clicked, `params` will come back empty. Plan your application logic accordingly!
{% endprotip %}

**NOTE** If you are seeing a "Branch.h file not found" error but you've imported the SDK, or it's breaking during compiling--and you're **using Xcode 6.3 or newer**--[click here](http://support.branch.io/customer/portal/articles/1964901-xcode-error---branch-not-found).

#### Branch-provided data parameters in callback

Previously, Branch did not return any information to the app if `initSession` was called but the user hadn't clicked on a link. Now Branch returns explicit parameters every time. Here is a list, and a description of what each represents.

* `~` denotes analytics
* `+` denotes information added by Branch
* (for the curious, `$` denotes reserved keywords used for controlling how the Branch service behaves)


| **Parameter** | **Meaning**
| ~channel | The channel on which the link was shared, specified at link creation time
| ~feature | The feature, such as `invite` or `share`, specified at link creation time
| ~tags | Any tags, specified at link creation time
| ~campaign | The campaign the link is associated with, specified at link creation time
| ~stage | The stage, specified at link creation time
| ~creation_source | Where the link was created ('API', 'Dashboard', 'SDK', 'iOS SDK', 'Android SDK', or 'Web SDK')
| +referrer | The referrer for the link click, if a link was clicked
| +phone_number | The phone number of the user, if the user texted himself/herself the app
| +is_first_session | Denotes whether this is the first session (install) or any other session (open)
| +clicked_branch_link | Denotes whether or not the user clicked a Branch link that triggered this session


{% endif %}
<!---    /iOS -->


{% if page.android %}

Branch must be notified when the app opens and when it closes, so that we know when to query the API for a new deep link. We recently discovered an Android mechanism that was exposed in version 14, that allows us to track behind-the-scenes when the app is opened and closed. It makes the integration **a lot** easier, so we've split it out from the legacy integration.

If you support below 14, you'll want to skip this section and head to [this one right below](initialization-to-support-android-pre-14-harder).

### Initialization to support Android 14+ (4.0+) (easy)

To receive the deep link parameters from the Branch SDK, call initSession and pass in the BranchReferralInitListener. This will return the dictionary of referringParams associated with the link that was just clicked. You can call this anywhere at any time to get the params.

#### Initialize Branch lifecycle

Starting from Branch SDK version 1.5.7, there is no need for initialising and closing session with the new _automatic session management_. Automatic session management can work only with API level 14 and above, so make sure that your `minSdkVersion` is 14 or above.

{% highlight xml %}
<uses-sdk android:minSdkVersion="14"/>
{% endhighlight %}

Once you do any of the below, there is no need to close or init sessions in your Activities. Branch SDK will do all that for you. You can get your Branch instance at any time as follows.

Branch SDK can do session management for you if you do one of the following:

{% tabs %}
{% tab common %}
If you are not creating or using an Application class throughout your project, all you need to do is declare `BranchApp` as your application class in your manifest.

{% highlight xml %}
 <application
    android:name="io.branch.referal.BranchApp">
{% endhighlight %}
{% endtab %}
{% tab uncommon %}
If you already have an Application class then extend your application class with `BranchApp`.

{% highlight java %}
public class YourApplication extends BranchApp
{% endhighlight %}
{% endtab %}
{% tab rare %}
If you already have an Application class and don\'t want to extend it from `BranchApp` then create a Branch instance in your Application\'s `onCreate()` method.

{% highlight java %}
public void onCreate() {
    super.onCreate();
    Branch.getInstance(this);
}
{% endhighlight %}
{% endtab %}
{% endtabs %}

#### Register deep link router

{% highlight java %}
Branch branch = Branch.getInstance(getApplicationContext());
branch.initSession(new BranchReferralInitListener(){
    @Override
    public void onInitFinished(JSONObject referringParams, BranchError error) {
        if (error == null) {
            // params are the deep linked params associated with the link that the user clicked -> was re-directed to this app
            // params will be empty if no data found
            // ... insert custom logic here ...
        } else {
            Log.i("MyApp", error.getMessage());
        }
    }
}, this.getIntent().getData(), this);
{% endhighlight %}

**NOTE** if you're calling this inside a fragment, please use getActivity() instead of passing in `this`. Also, `this.getIntent().getData()` refers to the data associated with an incoming intent.

Next, you'll need to hook into the `onNewIntent` method specified inside the Activity lifecycle and set the intent. This is required for conformity with Facebook's AppLinks. Verify that the activity you're implementing has *launchMode* set to *singleTask* inside the Manifest declaration. Once that'd done, go to said activity and do something like the following:

{% highlight java %}
@Override
public void onNewIntent(Intent intent) {
    this.setIntent(intent);
}
{% endhighlight %}

Side note: This is a requirement because of the new Facebook AppLinks change. Facebook doesn't open up the browser anymore and just calls the URI to open the app directly. This prevented Branch clicks from being registered. To support it, we pass that link click id through the URI scheme to Branch, and send that back to the app, creating a 'click' without actually seeing a click. Android does a very poor job of clearing out intents that were previously called, so this helps ensure that once a URI scheme is called and consumed, it won't trigger deep linking anymore.

### Initialization to support Android pre-14 (harder)

Note: There is no need to use this section if you use _automatic session management_ as described above and only support minSdkVersion >= 14. Please skip to the [next section](#identifying-your-users-optional-but-recommended) and proceed. This section is only needed if you want to support pre-14.

If you choose this method, you must call initSession and closeSession in onStart and onStop of _every Activity_ in your app. If you don't close the Branch session, you'll see strange behaviors like deep link parameters not showing up after clicking a link the second time. Branch must know when the app opens or closes to properly handle the deep link parameters retrieval.

#### Init Session

**NOTE** This guide assumes that you’re familiar with the Android UI lifecycle. A single Branch object instance is used per Activity or Fragment, so declare an object at the class-level, and you can call this in every Activity or Fragment where you need to interact with Branch; if it has already be initialised elsewhere in your app, the same instance will be returned.

Inside your onStart, do the following, where the variable branch is created in your base activity class (of type Branch). This will initialize a Branch session and return the deep link parameters associated with the link that was just clicked, or an empty dictionary if not.

{% highlight java %}
@Override
protected void onStart() {
    super.onStart();
    Branch branch = Branch.getInstance(getApplicationContext());
    branch.initSession(new BranchReferralInitListener(){
        @Override
        public void onInitFinished(JSONObject referringParams, BranchError error) {
            if (error == null) {
                // params are the deep linked params associated with the link that the user clicked -> was re-directed to this app
                // params will be empty if no data found
                // ... insert custom logic here ...
            } else {
                Log.i("MyApp", error.getMessage());
            }
        }
    }, this.getIntent().getData(), this);
}
{% endhighlight %}

**NOTE** if you're calling this inside a fragment, please use getActivity() instead of passing in `this`. Also, `this.getIntent().getData()` refers to the data associated with an incoming intent.

Next, you'll need to hook into the `onNewIntent` method specified inside the Activity lifecycle and set the intent. This is required for conformity with Facebook's AppLinks. Verify that the activity you're implementing has *launchMode* set to *singleTask* inside the Manifest declaration. Once that'd done, go to said activity and do something like the following:

{% highlight java %}
@Override
public void onNewIntent(Intent intent) {
    this.setIntent(intent);
}
{% endhighlight %}

#### Close session

Note: There is no need to use this method if you use _automatic session management_ as described above and only support minSdkVersion >= 14

Every activity that will use Branch in some way should include Branch SDK methods in both `onStart()` and `onStop()`. Don't forget `closeSession()` in every activity with Branch! If you don't close the Branch session, you'll see strange behaviors like deep link parameters not showing up after clicking a link the second time.

{% highlight java %}
@Override
protected void onStop() {
    super.onStop();
    branch.closeSession();
}
{% endhighlight %}

### Branch-provided data parameters in initSession callback

Previously, Branch did not return any information to the app if `initSession` was called but the user hadn't clicked on a link. Now Branch returns explicit parameters every time. Here is a list, and a description of what each represents.

* `~` denotes analytics
* `+` denotes information added by Branch
* (for the curious, `$` denotes reserved keywords used for controlling how the Branch service behaves)


| **Parameter** | **Meaning**
| ~channel | The channel on which the link was shared, specified at link creation time
| ~feature | The feature, such as `invite` or `share`, specified at link creation time
| ~tags | Any tags, specified at link creation time
| ~campaign | The campaign the link is associated with, specified at link creation time
| ~stage | The stage, specified at link creation time
| ~creation_source | Where the link was created ('API', 'Dashboard', 'SDK', 'iOS SDK', 'Android SDK', or 'Web SDK')
| +referrer | The referrer for the link click, if a link was clicked
| +phone_number | The phone number of the user, if the user texted himself/herself the app
| +is_first_session | Denotes whether this is the first session (install) or any other session (open)
| +clicked_branch_link | Denotes whether or not the user clicked a Branch link that triggered this session


{% endif %}
