### Alias - The Custom Ending

Do you want prettier links -- perhaps customized to the user?

Utilize the appropriate short/long URL method with the parameter `alias` to set a custom ending. We have left the other parameters blank intentionally. You may customize them as you see fit.

<!--- iOS -->
{% if page.ios %}
{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[[Branch getInstance] getShortURLWithParams:nil
                                 andChannel:nil
                                 andFeature:nil
                                   andStage:nil
                                   andAlias:@"custom_ending"
                                andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
Branch.getInstance().getShortURLWithParams( nil,
                                            andChannel: nil,
                                            andFeature: nil,
                                            andStage: nil,
                                            andAlias: "custom_ending",
                                            andCallback: { (url: String?, error: NSError?) -> Void in
    if let urlToShare = url {
        NSLog("got my Branch link to share: %@", urlToShare)
    }
})
{% endhighlight %}
{% endtab %}
{% endtabs %}

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}
{% highlight java %}
branch.getInstance(getApplicationContext()).getShortUrlSync("exciting_path", "", "", "", null)
{% endhighlight %}
{% endif %}
<!--- /Android -->
