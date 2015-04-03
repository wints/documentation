### Adding Tags

Are you a tag person? You can add as many simply tags as you want to a link. Note that these are **not** key-value pairs -- those belong in the [TODO] [data dictionary]().

<!--- iOS -->
{% if page.ios %}

No mysteries here:

~~~objc
[[Branch getInstance] getShortURLWithParams:@{} andTags:@[@"any", @"other", @"tags", @"you", @"want"] andChannel:nil andFeature:nil andStage:nil andAlias:nil andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
~~~

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}


{% endif %}
<!--- /Android -->
