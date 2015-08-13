<!--- $deeplink_path -->
{% section deeplink_path %}

### Specify a custom deeplink path - $deeplink_path

The value of the deeplink path that you'd like us to append to your URI. For example, you could specify "$deeplink_path": "radio/station/456" and we'll open the app with the URI "yourapp://radio/station/456?link_click_id=branch-identifier". **This is primarily for supporting legacy deeplinking infrastructure.**

<!---    iOS -->
{% if page.ios %}

You can make this platform specific by replacing **$deeplink_path** with **$ios_deeplink_path** or **$android_deeplink_path**. 

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[[Branch getInstance] getShortURLWithParams:@{@"$deeplink_path": @"radio/station/456"} andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
Branch.getInstance().getShortURLWithParams(["$deeplink_path": "radio/station/456"], andCallback: { (url: String?, error: NSError?) -> Void in
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

You can make this platform specific by replacing **$deeplink_path** with **$android_deeplink_path** or **$ios_deeplink_path**. 

{% highlight java %}
JSONObject params = new JSONObject();
try {
    params.put("$deeplink_path", "radio/station/456");
} catch (JSONException ex) { }
Branch.getInstance(getApplicationContext()).getShortUrl(params, new BranchLinkCreateListener() {
    @Override
    public void onLinkCreate(String url, BranchError error) {
        if (error == null) {
            Log.i("Branch", "created a URL with a custom $deeplink_path");
        }
    }
})
{% endhighlight %}

{% endif %}
<!---    /Android -->

 {% endsection %}
 <!--- /$deeplink_path -->