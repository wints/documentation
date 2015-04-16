
### Viewing Credits

Once users have credits, they should be able to redeem them. 

Checking the balance involves loading the most recent balance from the server and then checking the balance. These can be two separate steps but for the sake of simplicity we have combined them into one example:

<!-- iOS -->
{%if page.ios %}
~~~ objc
[[Branch getInstance] loadRewardsWithCallback:^(BOOL changed, NSError *err) {
    if (!err) {
        NSLog(@"credit: %lu", [[Branch getInstance] getCredits]);
    }
}];
~~~
{%endif%}
<!-- end iOS -->

<!-- Android -->
{%if page.android %}
~~~ java
Branch.getInstance(getApplicationContext()).loadRewards(new BranchReferralStateChangedListener() {
	@Override
	public void onStateChanged(boolean changed, Branch.BranchError error) {
		// changed boolean will indicate if the balance changed from what is currently in memory

		// will return the balance of the current user's credits
		int credits = branch.getCredits();
	}
});
~~~
{%endif%}
<!-- end Android -->


{% section different_bucket %}
If you want to see the number of credits in a custom bucket you've specified, such as `myBucket`, then you can do the following:

<!-- iOS -->
{%if page.ios %}
~~~ objc
[[Branch getInstance] loadRewardsWithCallback:^(BOOL changed, NSError *err) {
    if (!err) {
        NSString *bucket = @"myBucket";
        NSLog(@"credit for %@ bucket: %lu", bucket, [[Branch getInstance] getCreditsForBucket:bucket]);
    }
}];
~~~
{%endif%}
<!-- end iOS -->
{%if page.android %}
~~~ java
// TODO
~~~
{%endif%}

{% endsection %}