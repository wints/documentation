
### Redeeming Flow

Building out a credit redemption flow is super easy and painless, but there are a few important factors to keep in mind in terms of UX.

  * Users should know their total balance before commiting to a redemption.
  * Users should be aware of how many points they are agreeing to spend.
  * Since this is a one way, non-reversable transaction, confirmation is appropriate.
  * Users should see a progress indicator so they're aware the transaction is taking place.
  * Users should not be able to resubmit while the redemption is occuring (progress indicator can handle this).
  * Upon completion, users should receive confirmation of success, and see their updated balance.

Fortunately, this is all fairly simple to accomplish with Branch. You really only need to take four steps:

1. Ensure Credits are loaded.
1. Show a confirmation dialog before redeeming credits.
1. Call the `redeemRewards` method and show a progress dialog.
1. Show a completion dialog and reflect updates in balance.

{% if page.ios %}
{% highlight objc %}
- (IBAction)redeemCredits:(id)sender {
    [[Branch getInstance] loadRewardsWithCallback:^(BOOL changed, NSError *error) {
        if (!error) {
            [[[UIAlertView alloc] initWithTitle:@"Redeem 5 credits?" message:nil delegate:self cancelButtonTitle:@"Cancel" otherButtonTitles:@"OK", nil] show];
        }
    }];
}

- (void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex {
    if (buttonIndex) {
        [self showLoadingMask]; // impl not shown

        [[Branch getInstance] redeemRewards:5 callback:^(BOOL success, NSError *error) {
            [self hideLoadingMask]; // impl not shown

            if (!err) {
                NSInteger newBalance = [[Branch getInstance] getCredits];
                NSString *successMsg = [NSString stringWithFormat:@"You redeemed 5 credits! You have %ld remaining.", (long)newBalance];
                [[[UIAlertView alloc] initWithTitle:@"Success" message:successMsg delegate:nil cancelButtonTitle:@"OK" otherButtonTitles:nil] show];

                self.creditCountLabel.text = [NSString stringWithFormat:@"%ld credits available", (long)newBalance]; // impl not shown
            }
        }];
    }
}
{% endhighlight %}

Here's a super simple example:  
![Redeem Flow](/img/ingredients/rewards/redeem_flow.gif)
{% endif %}
{% if page.android %}
{% highlight java %}
    Branch.getInstance(getApplicationContext()).redeemRewards(5);
{% endhighlight %}
{% endif %}
