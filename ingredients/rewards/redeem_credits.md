
### Redeeming Credits

When users spend credits, you can make a simple call to redeem their credits. 

{% highlight obj-c %}
[[Branch getInstance] redeemRewards:5];
{% endhighlight %}

{% section different_bucket %}
If you want to redeem credits in a custom bucket you've specified, such as `myBucket`, then you can do the following:

{% highlight obj-c %}
[[Branch getInstance] redeemRewards:5 forBucket:@"myBucket"];
{% endhighlight %}
{% endsection %}