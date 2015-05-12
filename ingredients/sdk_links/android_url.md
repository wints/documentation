  <!--- $android_url -->
{% section android_url %}
## Android Play Store override - $android_url

When a user doesn't have your app and clicks a link on Android, by default the user is taken to the [Play Store or Custom URL](/domains/configuring_the_dashboard/android/#play-store-or-custom-url) that you specified on the Dashboard. If you want to specify a different destination on a per-link basis, include a value for the `$android_url`.

<!---    iOS -->
{% if page.ios %}

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[[Branch getInstance] getShortURLWithParams:@{@"$android_url": @"http://myawesomesite.com/android-app-landing-page"} andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
Branch.getInstance().getShortURLWithParams(["$android_url": "http://myawesomesite.com/android-app-landing-page"], andCallback: { (url: String?, error: NSError?) -> Void in
    if let urlToShare = url {
        NSLog("got my Branch link to share: %@", urlToShare)
    }
})
{% endhighlight %}
{% endtab %}
{% endtabs %}

{% endif %}
<!---    /iOS -->


<!---    Android -->
{% if page.android %}

{% highlight java %}
JSONObject params = new JSONObject();
try {
    params.put("$android_url", "http://myawesomesite.com/android-app-landing-page");
} catch (JSONException ex) { }
Branch.getInstance(getApplicationContext()).getShortUrl(params, new BranchLinkCreateListener() {
    @Override
    public void onLinkCreate(String url, BranchError error) {
        if (error == null) {
            Log.i("Branch", "created a URL with a custom $android_url");
        }
    }
})
{% endhighlight %}

{% endif %}
<!---    /Android -->

 {% endsection %}
 <!--- /$android_url -->