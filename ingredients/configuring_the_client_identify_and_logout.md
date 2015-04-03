---
type: ingredient
title: Configuring the Client - Identity and Logout
platforms:
- ios
- android
- web
---


{% section configuring_the_client_identify_and_logout_header %}### Identifying your users{% endsection %}

{% section configuring_the_client_identify_and_logout_pre_explanation %}{% endsection %}

{% section configuring_the_client_identify_and_logout_explanation %}
Branch automatically tracks unique devices. However, to make full use of our powerful API, you should also identify users with form of unique identification your app uses. The usefulness of this is hard to understate. When making future queries, when scanning through data on the dashboard, and when combing through anything you choose to export, you'll see your app's user Id alongside the Branch-provided [TODO] user Id. If you want to know that User A shared with User B, add this code.

The good news is that your app only needs the addition of two lines of code.
{% endsection %}<!--- /Explanation -->


{% if page.ios %}
{% section configuring_the_client_identity_and_logout_ios_code %}

Add a `setIdentity:` call wherever you create or login a user.

~~~ objc
[[Branch getInstance] setIdentity:@"1234"]; // your app's userId
~~~

Add a `logout` call anywhere you allow the user to logout.

~~~ objc
[[Branch getInstance] logout];
~~~

It's that simple!
{% endsection %}
{% endif %}<!--- iOS identify and logout -->

{% if page.android %}
[TODO] Android setIdentity and logout
{% endif %}<!--- Android identify and logout -->

