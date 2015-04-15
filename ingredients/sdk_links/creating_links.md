### Creating Links

{% section explanation %}
Links are the foundation to everything Branch offers. Branch's links offer the ability to deep link directly to content, to pass data through the install process, and to tell where users are coming from. With Branch links, you can tell whether a user installed your app thanks to a Facebook ad, an email campaign or a personal invite from a friend.

On the world wide web, URLs allow users to go straight to content rather than wading through an entire site. You can send your friend a link to a specific radio station -- [http://www.iheart.com/live/wild-949-305/](http://www.iheart.com/live/wild-949-305/) -- and other users will be taken straight to that station. Branch links work the same way. The link [https://bnc.lt/l/3mN6Lak-2u](https://bnc.lt/l/3mN6Lak-2u) will open the Wild 94.9 station *even if you didn't have the app installed previously.*

Here's how to create your own Branch Links.
{% endsection %}

<!--- iOS -->
{% if page.ios %}

On iOS, it's a rather simple method call.

~~~ objc
[[Branch getInstance] getShortURLWithParams:{% section params %}@{@"foo": @"bar"}{%endsection%} andCallback:^(NSString *url, NSError *error) {
    if (!error) NSLog(@"got my Branch link to share: %@", url);
}];
~~~

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}

~~~ java
{% section params %}JSONObject obj = new JSONObject(); obj.putString("foo", "bar");{% endsection %}
branch.getShortUrl(obj, new BranchLinkCreateListener() {
	@Override
	public void onLinkCreate(String url, BranchError error) {
		Log.i(TAG, "Ready to share my link = " + url);
	}
});
~~~

{% endif %}
<!--- /Android -->
