{% section header %}
### Starting a Branch Session
{% endsection %}

This is required for any SDK call. There is a lot of magic packed into the `initSession` call and corresponding `deepLinkHandler`.

<!---    iOS -->
{% if page.ios %}

<!---       iOS explanation -->
{% section ios_explanation %}
The `deepLinkHandler` is a block of code that executes when a Branch session is successfully initialized, as well as anytime a user clicks a link to your app. This is the central place where you define how your app should respond to links.

When a user clicks a Branch link and your app opens, the Branch SDK contacts the Branch servers to see whether this user opening your app is the same one who just clicked the link. If it is, then the params dictionary that you see below will be populated with any data attached to a Branch link if a user just clicked one.

The `initSession` call is an asynchronous call and any other calls will be queued up to complete after the server returns a response.

There are a few pieces that **must** be in place. First, find **AppDelegate.m** in the left sidebar and begin editing it:
{% endsection %}

* Add `#import "Branch.h"` at the top of the file
* Find the line which reads: 
{% highlight objc %}
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
{% endhighlight %}
and paste the following right below it: 

{% highlight objc %}
	Branch *branch = [Branch getInstance];
	[branch initSessionWithLaunchOptions:launchOptions andRegisterDeepLinkHandler:^(NSDictionary *params, NSError *error) {
        if (!error) {
			// params are the deep linked params associated with the link that the user clicked -> was re-directed to this app
			// params will be empty if no data found
			// ... insert custom logic here ...
        }
	}];
{% endhighlight %}
* Ensure that this method is closed with `return YES;`.


{% endif %}
<!---    /iOS -->


{% if page.android %}

**NOTE** This guide assumes that you're familiar with the Android UI lifecycle. A single Branch object instance is used per Activity or Fragment, so declare an object at the class-level, and you can call this in every Activity or Fragment where you need to interact with Branch; if it has already be initialised elsewhere in your app, the same instance will be returned.

Inside your `onStart`, do the following, where the variable `branch` is created in your base activity class (of type `Branch`).


{% highlight java %}
@Override
protected void onStart() {
    super.onStart();

    branch = Branch.getInstance(this.getApplicationContext());
    ...
}
{% endhighlight %}

Next, initialize a session via the `initSession` call. We notify you via callback of type `BranchReferralInitListener`. Go ahead and create that first as follows: 

{% highlight java %}
Branch branchReferralInitListener = new BranchReferralInitListener() {
    @Override
    public void onInitFinished(JSONObject referringParams, BranchError error) {

        // Do this when a response is returned.
        ...

    }
}
{% endhighlight %}

Next, you'll need to hook into the `onNewIntent` method specified inside the Activity lifecycle and set the intent. This is required for conformity with Facebook's AppLinks. Verify that the activity you're implementing has *launchMode* set to *singleTask* inside the Manifest declaration. Once that'd done, go to said activity and do something like the folllowing:

{% highlight java %}
@Override
public void onNewIntent(Intent intent) {
    this.setIntent(intent);
}
{% endhighlight %}

Finally, init the session back inside `onStart`!

{% highlight java %}
branch.initSession(branchReferralInitListener, this.getIntent().getData(), this);
{% endhighlight %}

**NOTE** if you're calling this inside a fragment, please use getActivity() instead of passing in `this`. Also, `this.getIntent().getData()` refers to the data associated with an incoming intent.

As a quick reminder, make sure to properly close the session inside `onStop` with a `branch.closeSession()`.

{% endif %}