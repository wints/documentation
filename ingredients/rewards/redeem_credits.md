
### Redeeming Credits

When users spend credits, you can make a simple call to redeem their credits. On your dashboard, this will fall under the `default` bucket.

{% if page.ios %}
{% highlight objc %}
[[Branch getInstance] redeemRewards:5 callback:^(BOOL success, NSError *error) {
    if (success) {
        NSLog(@"Redeemed 5 credits!");
    }
    else {
        NSLog(@"Failed to redeem credits: %@", error);
    }
}];
{% endhighlight %}
{% endif %}
{% if page.android %}
{% highlight java %}
Branch.getInstance(getApplicationContext()).redeemRewards(5);
{% endhighlight %}
{% endif %}

{% section different_bucket %}

If you want to redeem credits in a custom bucket you've specified, such as `myBucket`, then you can do the following:

<!-- iOS -->
{% if page.ios %}
{% highlight objc %}
[[Branch getInstance] redeemRewards:5 forBucket:@"myBucket" callback:^(BOOL success, NSError *error) {
    if (success) {
        NSLog(@"Redeemed 5 credits for myBucket!");
    }
    else {
        NSLog(@"Failed to redeem credits: %@", error);
    }
}];
{% endhighlight %}
{% endif %}
<!-- end iOS -->

<!-- Android -->
{% if page.android %}
{% highlight java %}
Branch.getInstance(getApplicationContext()).redeemRewards("myBucket", 5)
{% endhighlight %}
{% endif %}
<!-- end Android -->

{% endsection %}
