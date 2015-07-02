 <!--- $ios_url -->
{% section ios_url %}
### iOS App Store override - $ios_url

When a user doesn't have your app and clicks a link on iOS, by default the user is taken to the App Store or Custom URL that you specified on the Dashboard's [Link Settings](https://dashboard.branch.io/#/settings/link) page. If you want to specify a different destination on a per-link basis, include a value for the `$ios_url`.

<!---    iOS -->
{% if page.ios %}

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[[Branch getInstance] getShortURLWithParams:@{@"$ios_url": @"http://myawesomesite.com/ios-app-landing-page"} andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url)
}];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
Branch.getInstance().getShortURLWithParams(["$ios_url": "http://myawesomesite.com/ios-app-landing-page"], andCallback: { (url: String?, error: NSError?) -> Void in
    if error == nil {
        NSLog(@"got my Branch link to share: %@", url!)
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
    params.put("$ios_url", "http://myawesomesite.com/ios-app-landing-page");
} catch (JSONException ex) { }
Branch.getInstance(getApplicationContext()).getShortUrl(params, new BranchLinkCreateListener() {
    @Override
    public void onLinkCreate(String url, BranchError error) {
        if (error == null) {
            Log.i("Branch", "created a URL with a custom $ios_url");
        }
    }
})
{% endhighlight %}

{% endif %}
<!---    /Android -->

 {% endsection %}
 <!--- /$ios_url -->