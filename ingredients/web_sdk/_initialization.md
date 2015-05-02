
After configuring your app on the [Dashboard](https://dashboard.branch.io), you can simply add the following code somewhere inside the `<head> </head>` tags on your website. Note that the *only* thing you need to do is replace `YOUR-BRANCH-KEY` with your Branch Key inside the init() call.

{% highlight html %}
<script type="text/javascript">
(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-v1.4.1.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"init data setIdentity logout track link sendSMS referrals credits redeem banner closeBanner".split(" "),0);

branch.init('YOUR-BRANCH-KEY');
{% section post_init %}{% endsection %}
</script>
{% endhighlight %}

You can find your Branch Key on the Dashboard's [Settings page](https://dashboard.branch.io/#/settings).

![branch key](/img/ingredients/dashboard_setup/branch_key.png)
