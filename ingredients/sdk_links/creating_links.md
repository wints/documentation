{% section header %}### Creating links in your app{% endsection %}

{% section explanation %}
Links are the foundation to everything Branch offers. There are many different aspects to creating links but the most important are:

- Embed key/value deep link metadata. We'll make sure this gets delivered to the app with the clicking user
- Label feature and channel for analytics on the dashboard

Here's how to create your own Branch Links. In order to share these links, we've built a _native share sheet for Android_ and implemented a simple way to use _UIActivityViewController on iOS_. Check out the section on [**content sharing**](/recipes/content_sharing/{% section platform %}{{page.platform}}{% endsection %}).
{% endsection %}

<!--- iOS -->
{% if page.ios %}

On iOS, it's a rather simple method call.

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
[[Branch getInstance] getShortURLWithParams:{% section params %}@{@"article_id": @"1234", @"$og_title": @"Hot off the presses!", @"$og_image_url": @"mysite.com/image.png", @"$desktop_url": @"mysite.com/article1234"}{% endsection %} andChannel:@"sms" andFeature:BRANCH_FEATURE_TAG_SHARE andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
Branch.getInstance().getShortURLWithParams(["article_id": "1234", "$og_title":"Hot off the presses!", "$og_image_url": "mysite.com/image.png", "$desktop_url": "mysite.com/article1234"], andChannel: "sms", andFeature: BRANCH_FEATURE_TAG_SHARE, andCallback: { (url: String?, error: NSError?) -> Void in
    if error == nil {
        NSLog(@"got my Branch link to share: %@", url!)
    }
})
{% endhighlight %}
{% endtab %}
{% endtabs %}

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}

{% highlight java %}
{% section params %}
JSONObject obj = new JSONObject();
obj.putString("article_id", "1234");
obj.putString("$og_title", "Hot off the presses!");
obj.putString("$og_image_url", "mysite.com/image.png");
obj.putString("$desktop_url", "mysite.com/article1234");
{% endsection %}
branch.getShortUrl(obj, "sms", "share", new BranchLinkCreateListener() {
	@Override
	public void onLinkCreate(String url, BranchError error) {
		Log.i(TAG, "Ready to share my link = " + url);
	}
});
{% endhighlight %}

{% endif %}
<!--- /Android -->

{% if page.cordova %}

{% highlight js %}
branch.link({
    channel: 'sms',
    feature: 'share',
    data: {
		"article_id": "1234",
		"$og_title": "Hot off the presses!",
		"$og_image_url": "mysite.com/image.png",
		"$desktop_url": "mysite.com/article1234"
    }
}, function(err, link) {
	if (!err) {
    	console.log("Ready to share my " + link);
	}
});
{% endhighlight %}
{% endif %}

{% if page.xamarin %}
{% highlight c# %}
var data = new Dictionary<string, object>(); 
data.Add("article_id", "1234");
data.Add("$og_title", "Hot off the presses!");
data.Add("$og_image_url", "mysite.com/image.png");
data.Add("$desktop_url", "mysite.com/article1234");

Branch branch = Branch.GetInstance ();
await branch.GetShortUrlAsync(this, data, "sms", "share");
{% endhighlight %}

After you've registered the class as a delegate of `IBranchUrlInterface`

{% highlight c# %}
#region IBranchUrlInterface implementation

public void ReceivedUrl (Uri uri)
{
    // Do something with the new link...
}
#endregion
{% endhighlight %}
{% endif %}

{% if page.unity %}
{% highlight c# %}
Dictionary<string, object> parameters = new Dictionary<string, object>
{
	{ "article_id", "1234" },
	{ "$og_title", "Hot off the presses!" },
	{ "$og_image_url", "mysite.com/image.png" },
	{ "$desktop_url", "mysite.com/article1234" }
}

string channel = "sms";
string feature = "share";
Branch.getShortURLWithTags(parameters, channel, feature, delegate(string url, string error) {
    // show the link to the user or share it immediately
});
{% endhighlight %}
{% endif %}

{% if page.adobe %}

{% highlight java %}
//be sure to add the event listeners:
branch.addEventListener(BranchEvent.GET_SHORT_URL_FAILED, getShortUrlFailed);
branch.addEventListener(BranchEvent.GET_SHORT_URL_SUCCESSED, getShortUrlSuccessed);

private function getShortUrlSuccessed(bEvt:BranchEvent):void {
    trace("BranchEvent.GET_SHORT_URL_SUCCESSED", "my short url is: " + bEvt.informations);
}

private function getShortUrlFailed(bEvt:BranchEvent):void {
    trace("BranchEvent.GET_SHORT_URL_FAILED", bEvt.informations);
}

var dataToInclude:Object = {
	"article_id": "1234",
	"$og_title": "Hot off the presses!",
	"$og_image_url": "mysite.com/image.png",
	"$desktop_url": "mysite.com/article1234"
};

branch.getShortUrl(tags, "sms", BranchConst.FEATURE_TAG_SHARE, JSON.stringify(dataToInclude));
{% endhighlight %}
{% endif %}

{% if page.titanium %}

{% highlight js %}
branch.link({
    channel: 'sms',
    feature: 'share',
    data: {
		"article_id": "1234",
		"$og_title": "Hot off the presses!",
		"$og_image_url": "mysite.com/image.png",
		"$desktop_url": "mysite.com/article1234"
    }
}, function(err, link) {
	if (!err) {
    	console.log("Ready to share my " + link);
	}
});
{% endhighlight %}
{% endif %}
