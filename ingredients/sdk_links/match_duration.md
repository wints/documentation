### Match Duration

When we see a link click, we generate a fingerprint for users and store that fingerprint for a limited time -- 2 hours by default. That *browser fingerprint* includes IP address, OS, OS version, etc. Then when that same user who clicked the link opens up an app with the Branch SDK, Branch creates a *device fingerprint* based on the same parameters and checks with the server to see if a matching browser fingerprint exists.

It's possible, albeit rare, for collisions to occur where two people on the same network have identical hardware, are running identical software, and click a link at the same time (and neithe of them have ever used an app with Branch before). One way to avoid these collisions is to shorten the time window that a *browser fingerprint* is stored on our servers waiting for a matching *device fingerprint*.

You can adjust how long the browser fingerprint is stored in the browser by setting a *duration* when you click the link.

<!--- iOS -->
{% if page.ios %}

~~~ objc
[[Branch getInstance] getShortURLWithParams:@{} andChannel:@"SMS" andFeature:nil andStage:nil andMatchDuration:(60*60*2) andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
~~~

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}


{% endif %}
<!--- /Android -->
