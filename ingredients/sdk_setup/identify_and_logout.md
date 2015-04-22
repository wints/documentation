{% section header %}### Identifying Your Users{% endsection %}


{% section pre_explanation %}{% endsection %}

Branch automatically tracks unique devices. However, to make full use of our powerful API, you should also identify users with whichever form of unique identification your app uses. The usefulness of this is hard to understate. When making future queries, when scanning through data on the dashboard, and when combing through anything you choose to export, you'll see your app's user Id alongside the Branch-provided user Id. If you want to know that User A shared with User B, add this code.

The good news is that your app only needs the addition of two lines of code.

{% if page.ios %}

Add a `setIdentity:` call wherever you create or login a user.

{% highlight objc %}
[[Branch getInstance] setIdentity:@"1234"]; // your app's userId
{% endhighlight %}

**NOTE:** Please keep the string to less than 127 characters.

Add a `logout` call anywhere you allow the user to logout. 

{% highlight objc %}
[[Branch getInstance] logout];
{% endhighlight %}

{% endif %}
<!--- iOS identify and logout -->

{% if page.android %}
Invoke the `setIdentity` call whenever you create or login a user.

{% highlight java %}
Branch.getInstance(getApplicationContext()).setIdentity("your user identity");
{% endhighlight %}

**NOTE:** Please keep the string to less than 127 characters.

Add a `logout` call anywhere you allow the user to logout. 

{% highlight java %}
Branch.getInstance(getApplicationContext()).logout();
{% endhighlight %}
{% endif %}
<!--- Android identify and logout -->

{% protip title='Note:'  %}
`Logout` should only be called when the user logs out. Calling it at other times could lead to hard-to-discover errors. Failing to call `logout` can likewise lead to bugs if multiple users log in on the same device.
{% endprotip %}

