{% section header %}
### Starting a Branch Session
{% endsection %}

The Branch session starts every single time your app opens up, and checks if the user came from a link. You register a callback method here that will return any deep link parameters upon link click. Please note that the callback function is called 100% of the time, even when the network is out. 

We also bundle in a [bunch of other stuff](#branch-provided-data-parameters-in-callback) that you might find useful.

<!---    iOS -->
{% if page.ios %}

There are a few pieces of code that must be in place. First, open your project's **AppDelegate.m** (or **AppDelegate.swift**) file.

* Add `#import "Branch.h"` at the top of the file (Objective-C only)
* Find the line which reads:

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions:
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
For **Swift, you will need to add a bridging header in order to use Branch in your project. For help on adding a bridging header, see [this StackOverflow answer](http://stackoverflow.com/a/28486246/1914567).

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

**NOTE** If you are seeing a "Branch.h file not found" error but you've imported the SDK, or it's breaking during compiling--and you're **using Xcode 6.3 or newer**--[click here](http://support.branch.io/customer/portal/articles/1964901-xcode-error---branch-not-found).

{% endif %}
<!---    /iOS -->

{% if page.android %}

Open up your **splash activity** (or the activity you registered the intent for above), then add the onStart lifecycle method:

{% highlight java %}
@Override
public void onStart() {
{% endhighlight %}

Initialize the session and register your deep link router:

{% highlight java %}
Branch branch = Branch.getInstance(getApplicationContext());
branch.initSession(new Branch.BranchReferralInitListener(){
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

Next, you'll need to hook into the `onNewIntent` method specified inside the Activity lifecycle and set the intent. This is required for conformity with Facebook's AppLinks.

{% highlight java %}
@Override
public void onNewIntent(Intent intent) {
    this.setIntent(intent);
}
{% endhighlight %}

{% endif %}

{% if page.cordova %}

Initialize the session and register your deep link router. The callback here will contain the deeplink data associated with the link you clicked.

{% highlight js %}
branch.init("YOUR BRANCH KEY HERE", function(err, data) {
    if (!err && data.data_parsed['+clicked_branch_link']) {
        // data_parsed are the deep linked params associated with the link that the user clicked -> was re-directed to this app
        // data_parsed will be empty if no data found
        // ... insert custom routing logic here ...
    } 
});
{% endhighlight %}

Structure of the callback `data` object:

{% highlight js %}
{
    data_parsed: { 
        '+clicked_branch_link': true | false,
        '+is_first_session': true | false,
        // If the user was referred from a link, and the link has associated data, the data is passed in here.
    },
    referring_identity: '12345',      // If the user was referred from a link, and the link was created by a user with an identity, that identity is here.
}
{% endhighlight %}
{% endif %}

{% if page.xamarin %}

- [Click here](#generic-init-with-forms) if you're using Xamarin Forms
- [Click here](#xamarin-without-forms) if you're not using Xamarin Forms

#### Generic Init with Forms

The following code will make a request to the Branch servers to initialize a new session, and retrieve any referring link parameters if available. Think of `InitSessionComplete` as your "deep link router". If your app opens with some data, you want to route the user depending on the data you passed in. Otherwise, send them to a generic install flow.

This deep link routing callback is called 100% of the time when the app opens, with your link params or an empty dictionary if none present.

{% highlight c# %}
public class App : Application, IBranchSessionInterface
{
    protected override void OnResume ()
    {
        Branch branch = Branch.GetInstance ();
        branch.InitSessionAsync (this);
    }

    protected override async void OnSleep ()
    {
        Branch branch = Branch.GetInstance ();
        // Await here ensure the thread stays alive long enough to complete the close.
        await branch.CloseSessionAsync ();
    }

    #region IBranchSessionInterface implementation

    public void InitSessionComplete (Dictionary<string, object> data)
    {
        // Do something with the referring link data...
    }

    public void CloseSessionComplete ()
    {
        // Handle any additional cleanup after the session is closed
    }

    public void SessionRequestError (BranchError error)
    {
        // Handle the error case here
    }

    #endregion
}
{% endhighlight %}

#### Xamarin Android with Forms

For Android add the call to the `onCreate` of either your Application class or the first Activity you start. This just creates the singleton object with the appropriate Branch key but does not make any server requests. Note also the addition of `OnNewIntent`. This is needed to get the latest link identifier when the app is opened from the background by following a deep link.

{% highlight c# %}
public class MainActivity : global::Xamarin.Forms.Platform.Android.FormsApplicationActivity
{
    protected override void OnCreate (Bundle savedInstanceState)
    {
        base.OnCreate (savedInstanceState);

        global::Xamarin.Forms.Forms.Init (this, savedInstanceState);

        BranchAndroid.Init (this, "your branch key here", Intent.Data);

        LoadApplication (new App ());
    }

    // Ensure we get the updated link identifier when the app is opened from the
    // background with a new link.
    protected override void OnNewIntent(Intent intent) {
        BranchAndroid.GetInstance().SetNewUrl(intent.Data);
    }
}
{% endhighlight %}

#### Xamarin iOS with Forms

For iOS add the code to your AppDelegate. This just creates the singleton object with the appropriate Branch key but does not make any server requests. Note also the addition of the `OpenUrl` method. This is needed to get the latest link identifier when the app is opened from the background by following a deep link.

{% highlight c# %}
[Register ("AppDelegate")]
public class AppDelegate : global::Xamarin.Forms.Platform.iOS.FormsApplicationDelegate
{
    public override bool FinishedLaunching (UIApplication uiApplication, NSDictionary launchOptions)
    {
        global::Xamarin.Forms.Forms.Init ();

        NSUrl url = null;
        if ((launchOptions != null) && launchOptions.ContainsKey(UIApplication.LaunchOptionsUrlKey)) {
            url = (NSUrl)launchOptions.ValueForKey (UIApplication.LaunchOptionsUrlKey);
        }

        BranchIOS.Init ("your branch key here", url);

        LoadApplication (new App ());
        return base.FinishedLaunching (uiApplication, launchOptions);
    }

    // Ensure we get the updated link identifier when the app is opened from the
    // background with a new link.
    public override bool OpenUrl(UIApplication application,
        NSUrl url,
        string sourceApplication,
        NSObject annotation)
    {
        Console.WriteLine ("New URL: " + url.ToString ());
        BranchIOS.getInstance ().SetNewUrl (url);
        return true;
    }
}
{% endhighlight %}
{% endif %}

{% if page.unity %}
Called when app first initializes a session, ideally in a *class that is initiated with the start of your scene*. The callback here will contain the deeplink data associated with the link you clicked. This deep link routing callback is called 100% of the time on init, with your link params or an empty dictionary if none present.

{% highlight c# %}
using UnityEngine;
using System.Collections.Generic;

public class MyCoolBehaviorScript : MonoBehaviour {
    void Start () {
        Branch.initSession(delegate(Dictionary<string, object> parameters, string error) {
            if (error != null) {
                System.Console.WriteLine("Oh no, something went wrong: " + error);
            }
            else if (parameters.Count > 0) {
                System.Console.WriteLine("Branch initialization completed with the following params: " + parameters.Keys);
            }
        });
    }
}
{% endhighlight %}
{% endif %}

{% if page.adobe %}
Inside your `Main.as` make the following import:

{% highlight java %}
import io.branch.nativeExtensions.branch.Branch;
import io.branch.nativeExtensions.branch.BranchEvent;
{% endhighlight %}

Then create a Branch instance:
`var branch:Branch = new Branch();`
Note that Branch is a Singleton, it can only have one instance which can also be used thanks to a static:
`Branch.getInstance();`

{% highlight java %}
branch.addEventListener(BranchEvent.INIT_FAILED, initFailed);
branch.addEventListener(BranchEvent.INIT_SUCCESSED, initSuccessed);

private function initFailed(bEvt:BranchEvent):void {
    trace("BranchEvent.INIT_FAILED", bEvt.informations);
}

private function initSuccessed(bEvt:BranchEvent):void {
    trace("BranchEvent.INIT_SUCCESSED", bEvt.informations);

    // params are the deep linked params associated with the link that the user clicked before showing up
    // params will be empty if no data found
    var referringParams:Object = JSON.parse(bEvt.informations);

    //trace(referringParams.user);
}
{% endhighlight %}

Once is done, initialize the SDK:

{% highlight java %}
branch.init();
{% endhighlight %}

Be sure to have the INIT_SUCCESSED event called, otherwise read the bEvt.informations from the INIT_FAILED event.
{% endif %}

{% if page.titanium %}
Initialize the session and register your deep link router. The callback here will contain the deeplink data associated with the link you clicked.

{% highlight js %}
branch.init("YOUR BRANCH KEY HERE", function(err, data) {
    if (!err && data.data_parsed['+clicked_branch_link']) {
        // data_parsed are the deep linked params associated with the link that the user clicked -> was re-directed to this app
        // data_parsed will be empty if no data found
        // ... insert custom routing logic here ...
    } 
});
{% endhighlight %}

Structure of the callback `data` object:

{% highlight js %}
{
    data_parsed: { 
        '+clicked_branch_link': true | false,
        '+is_first_session': true | false,
        // If the user was referred from a link, and the link has associated data, the data is passed in here.
    },
    referring_identity: '12345',      // If the user was referred from a link, and the link was created by a user with an identity, that identity is here.
}
{% endhighlight %}
{% endif %}
