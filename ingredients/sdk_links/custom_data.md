### Attaching Custom Data to Links

Branch links allow you to attach any information you want to links. Custom data can be information about an ad campaign, referring user, promotion, or content being shared. You use it to build a personalized referral system so users never see a generic onboarding screen again. You can take users straight to the content they wanted to see when they clicked the link in the first place.

Imagine how URLs are used on the Internet... now you have the same power inside your native mobile apps.

This data is stored on our backend and presented again when the user clicks on a link via the `deepLinkHandler` -- it's not simply appended to the end of the URL. 

Tip: Because we don't store data in the URL, you can create pretty links, like `yourapp.com/bob`. For information on custom aliases for links, [TODO] [click here]().

{% section sdk_links_custom_data_example_explanation %}Store data about both the sharing user and the content shared in the data dictionary. Attaching information is as simple as including a dictionary at link creation time. If, for example, James is inviting friends to check out your app, you could do the following:{% endsection %}

<!--- iOS -->
{% if page.ios %}

~~~objc
[[Branch getInstance] getShortURLWithParams:{% section sdk_links_custom_data_example_code %}@{@"referringUsername": @"James", @"referringUserId": @"1234", @"contentId": @"0987"}{% endsection %} andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
~~~

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}


{% endif %}
<!--- /Android -->
