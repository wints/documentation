
### Use different user Ids

This is especially relevant if you are trying to test **[rewards](/recipes/advanced_referral_incentives/{{page.platform}}/#rewards)**. Another challenge is that we do a lot of magic (identity merging, etc) to ensure that a single user doesn't get unique rewards multiple times. You should beware that if you're calling `setIdentity` with a user id that had previously been rewarded a unique reward, you will not see his credit balance increment.

Make sure to use a different user id with the `setIdentity` call if you want to be sure credits will be properly rewarded.
