<!--- $desktop_url -->
{% section desktop_url %}

### Desktop override - $desktop_url

When a user clicks a Branch link from a desktop, by default the user is taken to a text-me-the-app page or whichever custom page you specify on the Dashboard's [Link Settings](https://dashboard.branch.io/#/settings/link) page. If you want to specify a different web page on a per-link basis, include a value for $desktop_url.

This is especially useful if you want to serve up content on the web for users who don't have your mobile app.

<!---    iOS -->
{% if page.ios %}

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[[Branch getInstance] getShortURLWithParams:@{@"$desktop_url": @"http://myawesomesite.com/content/the-desired-content"} andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
Branch.getInstance().getShortURLWithParams(["$desktop_url": "http://myawesomesite.com/content/the-desired-content"], andCallback: { (url: String?, error: NSError?) -> Void in
    if let urlToShare = url {
        NSLog(@"got my Branch link to share: %@", urlToShare)
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
    params.put("$desktop_url", "http://myawesomesite.com/the-desired-content");
} catch (JSONException ex) { }
Branch.getInstance(getApplicationContext()).getShortUrl(params, new BranchLinkCreateListener() {
    @Override
    public void onLinkCreate(String url, BranchError error) {
        if (error == null) {
            Log.i("Branch", "created a URL with custom $desktop_url");
        }
    }
})
{% endhighlight %}

{% endif %}
<!---    /Android -->

 {% endsection %}
 <!--- /$desktop_url -->