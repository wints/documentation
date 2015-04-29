{% section header %}
### IsReferrable
{% endsection %}


{% section explanation %}
Branch's default behavior is to track which users refer other users. Also by default, a "referral" event is only recorded if a user who clicked on a link has *never* opened the app before. The first time he or she clicks a shared Branch link and opens the app, it counts as a referral.
{% endsection %}

<!--- iOS -->
{% if page.ios %}

<!---    iOS explanation 1 -->
{% section ios_explanation_1 %}
  This default behavior can be overridden by modifying the _initSessionWithLaunchOptions:andRegisterDeepLinkHandler:_ method in _application:didFinishLaunchingWithOptions:_. Replace the method call with the following:
{% endsection %}
<!---    /iOS explanation 1 -->


<!---    iOS code -->
{% section ios_code %}
{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[branch initSessionWithLaunchOptions:launchOptions isReferrable:@YES andRegisterDeepLinkHandler:^(NSDictionary *params, NSError *error) {     // previously initUserSessionWithCallback:withLaunchOptions:
   if (!error) {
       // This can now count as a referred session even if this isn't
       // the first time a user has opened the app (aka an "Install").
       // ... insert custom logic here ...
   }
}];
{% endhighlight %}
{% endtab %}

{% tab swift %}
{% highlight swift %}

branch.initSessionWithLaunchOptions(launchOptions, isReferrable: true, andRegisterDeepLinkHandler: { params, error in
    if (error == nil) {
        // This can now count as a referred session even if this isn't
        // the first time a user has opened the app (aka an "Install").
        // ... insert custom logic here ...
    }
})
{% endhighlight %}
{% endtab %}
{% endtabs %}
{% endsection %}
<!---    /iOS code -->


<!---    iOS explanation 2 -->
{% section ios_explanation_2 %}
You can set _isReferrable_ to **@YES** or **@NO** (Swift: **true** or **false**), and the behavior is as follows:

1. **@YES** (_Swift_ **true**): Now a connection can be established between a referring user and a referred user during _any_ session, not just the very first time a user opens the app. This means that if a user signs up without clicking on a shared Branch link but later clicks on a link, the referring-referred connection is established. (In the example in part 3 below, if Bob's friend Amy had already found and opened the app on her own but later came back to it because Bob sent her a link, Bob is the referring user and Amy is the referred user.) There can only be one referring user for any given user (e.g. as soon as Amy clicks a link from Bob, Bob is her referrer and no subsequent shared Branch links will change that). There are specific use cases where you may want this flexibility--feel free to reach out if you have questions.

2. **@NO** (_Swift_ **false**): If _isReferrable_ is set to **@NO**, your app will never track the relationship between referring users and referred users. While we're not sure why you wouldn't want such valuable information, it is certainly an option.

Note that the default behavior when _isReferrable_ is not set is different from both @YES and @NO. It relates the current user to a referring user ONLY for the very first open (aka "Install").
{% endsection %}
<!---    /iOS explanation 2 -->

{% endif %}
<!--- /iOS -->

{% if page.android %}

{% section android_explanation %}
This default behavior can be overridden by modifying the `initSession` method inside your activities `onStart`. Replace the method call with the following:

{% endsection %}

{% highlight java %}
@Override
public void onStart() {

    Branch branch = Branch.getInstance(getApplicationContext());
    branch.initSession(new BranchReferralInitListener(){
        @Override
        public void onInitFinished(JSONObject referringParams, Branch.BranchError error) {
            // init and routing code
        }
    }, true, this.getIntent().getData(), this);
}
{% endhighlight %}

{% section android_explanation_2 %}
You can set the `isReferrable` argument to **true** or **false**, and the behavior is as follows:

1. **true** Now a connection can be established between a referring user and a referred user during _any_ session, not just the very first time a user opens the app. This means that if a user signs up without clicking on a shared Branch link but later clicks on a link, the referring-referred connection is established. (In the example in part 3 below, if Bob's friend Amy had already found and opened the app on her own but later came back to it because Bob sent her a link, Bob is the referring user and Amy is the referred user.) There can only be one referring user for any given user (e.g. as soon as Amy clicks a link from Bob, Bob is her referrer and no subsequent shared Branch links will change that). There are specific use cases where you may want this flexibility--feel free to reach out if you have questions.

2. **false**: If _isReferrable_ is set to **false**, your app will never track the relationship between referring users and referred users. While we're not sure why you wouldn't want such valuable information, it is certainly an option.

Note that the default behavior when _isReferrable_ is not set is different from both @YES and @NO. It relates the current user to a referring user ONLY for the very first open (aka "Install").
{% endsection %}

{% endif %}
