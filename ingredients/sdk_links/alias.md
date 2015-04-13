### Alias - The Custom Ending

Do you want prettier links -- perhaps customized to the user?

<!--- iOS -->
{% if page.ios %}

No mysteries here:

~~~ objc
[[Branch getInstance] getShortURLWithParams:@{} andTags:nil] andChannel:nil andFeature:nil andStage:nil andAlias:@"mario" andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
~~~

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}

Utilize the appropriate short/long URL method with the parameter `alias`. We have left the other parameters blank intentionally. You may customize them as you see fit.

~~~ java
branch.getInstance(getApplicationContext()).getShortUrlSync("exciting_path", "", "", "", null)
~~~~
{% endif %}
<!--- /Android -->
