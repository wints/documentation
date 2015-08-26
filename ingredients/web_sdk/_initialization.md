
Add the following code somewhere inside the `<head> </head>` tags on your website. Be sure to replace `YOUR-BRANCH-KEY` with your Branch Key inside the `init()` call. You can find your Branch Key on the Dashboard's [Settings page](https://dashboard.branch.io/#/settings).

{% highlight html %}
<script type="text/javascript">
	(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-v1.6.8.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"init data first addListener removeListener setIdentity logout track link sendSMS referrals credits creditHistory applyCode validateCode getCode redeem banner closeBanner".split(" "), 0);

  branch.init('YOUR-BRANCH-KEY');
{% section post_init %}{% endsection %}
</script>
{% endhighlight %}

