### Custom Redirects

The default behavior for where links lead to is specified on the Dashboard -- you can read more about it [TODO] [here](). 

If, however, you want to override the default behavior, you can specify redirect behavior on a per-link basis.

 <!--- $ios_url -->
{% section links_and_sharing_custom_redirects_ios_url %}
#### iOS App Store override - $ios_url

<!---    iOS -->
{% if page.ios %}

When a user doesn't have your app and clicks a link on iOS, by default the user is taken to the [TODO] [App Store or Custom URL]() that you specified on the Dashboard. If you want to specify a different destination on a per-link basis, include a value for $ios_url. 

~~~objc
[[Branch getInstance] getShortURLWithParams:@{@"$ios_url": @"http://myawesomesite.com/ios-app-landing-page"} andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
~~~

{% endif %}
<!---    /iOS -->


<!---    Android -->
{% if page.android %}


{% endif %}
<!---    /Android -->

 {% endsection %}
 <!--- /$ios_url -->




  <!--- $android_url -->
{% section links_and_sharing_custom_redirects_android_url %}
#### Android Play Store override - $android_url

<!---    iOS -->
{% if page.ios %}

When a user doesn't have your app and clicks a link on Android, by default the user is taken to the [TODO] [Play Store or Custom URL]() that you specified on the Dashboard. If you want to specify a different destination on a per-link basis, include a value for $android_url. 

~~~objc
[[Branch getInstance] getShortURLWithParams:@{@"$android_url": @"http://myawesomesite.com/android-app-landing-page"} andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
~~~

{% endif %}
<!---    /iOS -->


<!---    Android -->
{% if page.android %}


{% endif %}
<!---    /Android -->

 {% endsection %}
 <!--- /$android_url -->




<!--- $desktop_url -->
{% section links_and_sharing_custom_redirects_desktop_url %}

#### Desktop override - $desktop_url

When a user clicks a Branch link from a desktop, by default the user is taken to a text-me-the-app page or whichever custom page you specify on the [TODO] [Dashboard](). If you want to specify a different web page on a per-link basis, include a value for $desktop_url. 

This is especially useful if you want to serve up content on the web for users who don't have your mobile app. 

<!---    iOS -->
{% if page.ios %}

~~~objc
[[Branch getInstance] getShortURLWithParams:@{@"$desktop_url": @"http://myawesomesite.com/content/the-desired-content"} andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
~~~

{% endif %}
<!---    /iOS -->


<!---    Android -->
{% if page.android %}


{% endif %}
<!---    /Android -->

 {% endsection %}
 <!--- /$desktop_url -->




<!--- $always_deeplink -->
{% section links_and_sharing_custom_redirects_always_deeplink %}

<!---    iOS -->
{% if page.ios %}

On iOS, attaching information is as simple as including a dictionary at link creation time. If, for example, James is inviting friends to check out your app, you could do the following:

~~~objc
[[Branch getInstance] getShortURLWithParams:@{@"referringUsername": @"James", @"referringUserId": @"1234"} andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
~~~

{% endif %}
<!---    /iOS -->


<!---    Android -->
{% if page.android %}


{% endif %}
<!---    /Android -->

 {% endsection %}
 <!--- /$always_deeplink -->
