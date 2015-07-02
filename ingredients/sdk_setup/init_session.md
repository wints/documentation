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
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:...
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions:...
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

Next, you'll need to hook into the `onNewIntent` method specified inside the Activity lifecycle and set the intent. This is required for conformity with Facebook's AppLinks.

{% highlight java %}
@Override
public void onNewIntent(Intent intent) {
    this.setIntent(intent);
}
{% endhighlight %}

{% endif %}
