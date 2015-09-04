
Add the following code somewhere inside the `<head> </head>` tags on your website. Be sure to replace `YOUR-BRANCH-KEY` with your Branch Key inside the `init()` call. You can find your Branch Key on the Dashboard's [Settings page](https://dashboard.branch.io/#/settings).

{% highlight html %}
<script type="text/javascript">
  {% ingredient web_sdk/_src %}{% endingredient %}
  branch.init('YOUR-BRANCH-KEY');
{% section post_init %}{% endsection %}
</script>
{% endhighlight %}

