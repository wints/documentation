{% section header %}
### URI Scheme
{% endsection %}

{% if page.ios %}

To set up your URI Scheme, you'll need to open your project in XCode and complete the following.

1. Click on YourProject-Info.plist on the left (or in Swift, Info.plist).
1. Find URL Types and click the right arrow. (If it doesn't exist, right click anywhere and choose Add Row. Scroll down and choose URL Types)
1. Add `myapp`, where _myapp_ is a unique string for your app, as an item in URL Schemes as below:


![Setting Key in PList Demo](/img/ingredients/configuring_the_client/ios_uri_scheme.png)

Go do a quick double-check that this is the same URI scheme listed on the Dashboard, where it should be `myapp://`). For more info on setting up a URI scheme on the Dashboard, [click here](/ingredients/configuring_the_dashboard/ios/index.html#uri_scheme).
{% endif %}
<!---       /iOS-specific URI Scheme -->

{% if page.android %}
#### Here's how to do it on Android

[TODO]

Go do a quick double-check that this is the same URI scheme listed on the Dashboard, where it should be `myapp://`). For more info on setting up a URI scheme on the Dashboard, [click here](/ingredients/configuring_the_dashboard/android/index.html#uri_scheme).
{% endif %}
<!---       /Android-specific URI Scheme -->

