{% if page.ios %}
### Showing Referrals

<!-- iOS -->

If you're using the [Branch Invite SDK](https://github.com/BranchMetrics/Branch-iOS-Invite-SDK), displaying referrals, earned credits, and credit transactions to your users is super easy. It handles all the logic of determining which transactions are referrals for you as well, so there is no confusing logic. If desired, you can provide a customized view that will have the data fed into it.

For the most basic integration, using the default Branch styled view, you can add the following controller, which can be shown modally or within a tab / navigation controller. Note that the delegate requires you to provide a User ID that can be used to determine transactions where the current user was the referring user.

{% highlight objc %}
    BranchReferralController *referralController = [BranchReferralController branchReferralControllerWithDelegate:self];
{% endhighlight %}

This will appear as follows  
![View Referral](/img/ingredients/rewards/view_referrals.gif)

If the basic styling doesn't fit the needs of your app, you can provide an entirely custom view with just as little effort. The view should conform to the `BranchReferralView` protocol so that the controller can set the data items on it.

{% highlight objc %}
    BranchReferralController *referralController = [BranchReferralController branchReferralControllerWithView:myCustomView delegate:self];
{% endhighlight %}

{% endif %}
<!-- end iOS -->
