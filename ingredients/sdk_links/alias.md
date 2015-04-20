### Alias - The Custom Ending

Do you want prettier links -- perhaps customized to the user?

Utilize the appropriate short/long URL method with the parameter `alias` to set a custom ending. We have left the other parameters blank intentionally. You may customize them as you see fit.

<!--- iOS -->
{% if page.ios %}
{% highlight objc %}
[[Branch getInstance] getShortURLWithParams:@{}
                                 andChannel:nil
                                 andFeature:nil
                                   andStage:nil
                                   andAlias:@"custom_ending"
                                andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
{% endhighlight %}
{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}
{% highlight java %}
branch.getInstance(getApplicationContext()).getShortUrlSync("exciting_path", "", "", "", null)
{% endhighlight %}
{% endif %}
<!--- /Android -->
