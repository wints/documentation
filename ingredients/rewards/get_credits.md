
### Viewing Credits

Once users have credits, they should be able to redeem them. 

Checking the balance involves loading the most recent balance from the server and then checking the balance. These can be two separate steps but for the sake of simplicity we have combined them into one example:

{%if platform.ios %}
{% highlight obj-c %}
[[Branch getInstance] loadRewardsWithCallback:^(BOOL changed, NSError *err) {
    if (!err) {
        NSLog(@"credit: %lu", [[Branch getInstance] getCredits]);
    }
}];
{% endhighlight %}
{%endif%}
{%if platform.android %}
[TODO]
{%endif%}


{% section different_bucket %}
If you want to see the number of credits in a custom bucket you've specified, such as `myBucket`, then you can do the following:

{%if platform.ios %}
{% highlight obj-c %}
[[Branch getInstance] loadRewardsWithCallback:^(BOOL changed, NSError *err) {
    if (!err) {
        NSString *bucket = @"myBucket";
        NSLog(@"credit for %@ bucket: %lu", bucket, [[Branch getInstance] getCreditsForBucket:bucket]);
    }
}];
{% endhighlight %}
{%endif%}
{%if platform.android %}
[TODO]
{%endif%}

{% endsection %}