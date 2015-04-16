
### Redeeming Credits

When users spend credits, you can make a simple call to redeem their credits. On your dashboardm this will fall under the `default` bucket.

{%if page.ios %}
~~~ objc
[[Branch getInstance] redeemRewards:5];
~~~
{%endif%}
{%if page.android %}
~~~ java
Branch.getInstance(getApplicationContext()).redeemRewards(5);
~~~
{%endif%}

{% section different_bucket %}

If you want to redeem credits in a custom bucket you've specified, such as `myBucket`, then you can do the following:

<!-- iOS -->
{%if page.ios %}
~~~ objc
[[Branch getInstance] redeemRewards:5 forBucket:@"myBucket"];
~~~
{%endif%}
<!-- end iOS -->

<!-- Android -->
{%if page.android %}
~~~ java
Branch.getInstance(getApplicationContext()).redeemRewards("myBucket", 5)
~~~
{%endif%}
<!-- end Android -->

{% endsection %}