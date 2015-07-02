{% if page.android %}
### Initialization to support Android pre-14

If you want to support pre-14 this method, you should include Branch SDK methods in both `onStart()` and `onStop()`. If you don't close the Branch session, you'll see strange behaviors like deep link parameters not showing up after clicking a link the second time. Branch must know when the app opens or closes to properly handle the deep link parameters retrieval.

#### Init Session

Please add this for every Activity for pre-14 support.

{% highlight java %}
@Override
protected void onStart() {
    super.onStart();
    Branch.getInstance(getApplicationContext()).initSession();
}
{% endhighlight %}


#### Close session

Please add this for every Activity for pre-14 support.

{% highlight java %}
@Override
protected void onStop() {
    super.onStop();
    branch.closeSession();
}
{% endhighlight %}
{% endif %}