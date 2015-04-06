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


{% endif %}
<!--- /Android -->
