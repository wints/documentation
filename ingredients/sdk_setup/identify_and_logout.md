{% section header %}### Identifying Your Users{% endsection %}


{% section pre_explanation %}{% endsection %}

Branch automatically tracks unique devices. However, to make full use of our powerful API, you should also identify users with form of unique identification your app uses. The usefulness of this is hard to understate. When making future queries, when scanning through data on the dashboard, and when combing through anything you choose to export, you'll see your app's user Id alongside the Branch-provided [TODO] user Id. If you want to know that User A shared with User B, add this code.

The good news is that your app only needs the addition of two lines of code.

{% if page.ios %}

Add a `setIdentity:` call wherever you create or login a user.

~~~ objc
[[Branch getInstance] setIdentity:@"1234"]; // your app's userId
~~~

Add a `logout` call anywhere you allow the user to logout.

~~~ objc
[[Branch getInstance] logout];
~~~

It's that simple!
{% endif %}


{% if page.android %}
Invoke the `setIdentity` call whenever you create or login a user.

~~~java
Branch.getInstance(getApplicationContext()).setIdentity("your user identity"");
~~~

**NOTE** Please keep the string to less than 127 characters.

In case you'd like to clear your user after they have logged out, please use the following:

~~~java
Branch.getInstance(getApplicationContext()).logout();
~~~
{% endif %}<!--- Android identify and logout -->

