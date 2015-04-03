{% section configuring_the_client_is_referrable_header %}
### IsReferrable
{% endsection %}


{% section configuring_the_client_is_referrable_explation %}
Branch's default behavior is to track which users refer other users. Also by default, a "referral" event is only recorded if a user who clicked on a link has *never* opened the app before. The first time he or she clicks a shared Branch link and opens the app, it counts as a referral.
{% endsection %}

<!--- iOS -->
{% if page.ios %}

<!---    iOS explanation 1 -->
{% section configuring_the_client_is_referrable_ios_expl_1 %}
This default behavior can be overridden by modifying the _initSessionWithLaunchOptions:andRegisterDeepLinkHandler:_ method in _application:didFinishLaunchingWithOptions:_. Replace the method call with the following:
{% endsection %}
<!---    /iOS explanation 1 -->


<!---    iOS code -->
{% section configuring_the_client_is_referrable_ios_code %}
##### Objective-C
~~~ objc
[branch initSessionWithLaunchOptions:launchOptions isReferrable:@YES andRegisterDeepLinkHandler:^(NSDictionary *params, NSError *error) {     // previously initUserSessionWithCallback:withLaunchOptions:
   if (!error) {
       // This can now count as a referred session even if this isn't
       // the first time a user has opened the app (aka an "Install").
       // ... insert custom logic here ...
   }
}];
~~~

##### Swift
~~~swift
branch.initSessionWithLaunchOptions(launchOptions, isReferrable: true, andRegisterDeepLinkHandler: { params, error in
    if (error == nil) {
        // This can now count as a referred session even if this isn't
        // the first time a user has opened the app (aka an "Install").
        // ... insert custom logic here ...
    }
})
~~~
{% endsection %}
<!---    /iOS code -->


<!---    iOS explanation 2 -->
{% section configuring_the_client_is_referrable_ios_expl_2 %}
You can set _isReferrable_ to **@YES** or **@NO** (Swift: **true** or **false**), and the behavior is as follows:

1. **@YES** (_Swift_ **true**): Now a connection can be established between a referring user and a referred user during _any_ session, not just the very first time a user opens the app. This means that if a user signs up without clicking on a shared Branch link but later clicks on a link, the referring-referred connection is established. (In the example in part 3 below, if Bob's friend Amy had already found and opened the app on her own but later came back to it because Bob sent her a link, Bob is the referring user and Amy is the referred user.) There can only be one referring user for any given user (e.g. as soon as Amy clicks a link from Bob, Bob is her referrer and no subsequent shared Branch links will change that). There are specific use cases where you may want this flexibility--feel free to reach out if you have questions.

2. **@NO** (_Swift_ **false**): If _isReferrable_ is set to **@NO**, your app will never track the relationship between referring users and referred users. While we're not sure why you wouldn't want such valuable information, it is certainly an option.

Note that the default behavior when _isReferrable_ is not set is different from both @YES and @NO. It relates the current user to a referring user ONLY for the very first open (aka "Install").
{% endsection %}
<!---    /iOS explanation 2 -->

{% endif %}
<!--- /iOS -->

{% if page.android %}
[TODO] isReferrable Android
{% endif %}
