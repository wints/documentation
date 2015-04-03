### Attaching Custom Data to Links

Branch links allow you to attach any information you want to links. Custom data can mean information about the ad campaign, referring user, promotion, or content being shared. You use it to build a personalized referral system so users never see a generic onboarding screen again. You can take users straight to the content they wanted to see when they clicked the link in the first place.

Imagine how URLs are used on the Internet... now you have the same power inside your native mobile apps.

This data is stored on our backend and presented again when the user clicks on a link via the `deepLinkHandler` -- it's not simply appended to the end of the URL. This allows you to create pretty links, like yourapp.com/derrick. For information on custom aliases for links, [TODO] [click here]().

<!--- iOS -->
{% if page.ios %}

On iOS, attaching information is as simple as including a dictionary at link creation time. If, for example, James is inviting friends to check out your app, you could do the following:

~~~objc
[[Branch getInstance] getShortURLWithParams:@{@"referringUsername": @"James", @"referringUserId": @"1234"} andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
~~~

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}


{% endif %}
<!--- /Android -->
