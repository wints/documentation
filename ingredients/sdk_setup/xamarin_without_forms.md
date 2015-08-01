{% if page.xamarin %}
{% section header %}
### Xamarin without Forms
{% endsection %}

This section will describe how to initialize Branch if you're not using the new Forms mechanism.


#### Xamarin Android without Forms

For Android add the call to the `onCreate` of either your Application class or the first Activity you start. This just creates the singleton object on Android with the appropriate Branch key but does not make any server requests.

Make sure to add the call to `onStop` as well. This call will clear the deep link parameters when the app is closed, so they can be refreshed after a new link is clicked or the app is reopened.

{% highlight c# %}
public class MainActivity
{
    protected override void OnCreate (Bundle savedInstanceState)
    {
        base.OnCreate (savedInstanceState);

        global::Xamarin.Forms.Forms.Init (this, savedInstanceState);

        BranchAndroid.Init (this, "your branch key here", Intent.Data);

        Branch branch = Branch.GetInstance ();
        branch.InitSessionAsync (this);

        LoadApplication (new App ());
    }

    protected override void OnStop (Bundle savedInstanceState)
    {
        base.OnStop (savedInstanceState);

        Branch branch = Branch.GetInstance ();
        // Await here ensure the thread stays alive long enough to complete the close.
        await branch.CloseSessionAsync ();
    }

    // Ensure we get the updated link identifier when the app is opened from the
    // background with a new link.
    protected override void OnNewIntent(Intent intent) {
        BranchAndroid.GetInstance().SetNewUrl(intent.Data);
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

#### Xamarin iOS without Forms

The iOS device specific code can register notification listeners to handle the init and close of sessions when the app is sent to the background or resumed. The BranchIOS.Init call takes an optional third parameter that will enable this automatic close session behavior if the parameter is set to true. If your iOS app is not a Forms app, use the following device specific init.

{% highlight c# %}
[Register ("AppDelegate")]
public class AppDelegate
{
    public override bool FinishedLaunching (UIApplication uiApplication, NSDictionary launchOptions)
    {
        NSUrl url = null;
        if ((launchOptions != null) && launchOptions.ContainsKey(UIApplication.LaunchOptionsUrlKey)) {
            url = (NSUrl)launchOptions.ValueForKey (UIApplication.LaunchOptionsUrlKey);
        }

        BranchIOS.Init ("your branch key here", url, true);

        Branch branch = Branch.GetInstance ();
        branch.InitSessionAsync (this);

        // Do your remaining launch stuff here...
    }

    // Ensure we get the updated link identifier when the app is opened from the
    // background with a new link.
    public override bool OpenUrl(UIApplication application,
        NSUrl url,
        string sourceApplication,
        NSObject annotation)
    {
        BranchIOS.getInstance ().SetNewUrl (url);
        return true;
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

{% endif %}