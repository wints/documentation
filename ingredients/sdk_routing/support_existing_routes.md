You spent a bunch of time already setting up deeplink paths before you heard of Branch and now you want the Branch links to leverage them? No problem at all. When creating Branch links you'll need to specify the deeplink path, aka where in your app a link should route to. You can either set `$deeplink_path`, `$ios_deeplink_path` or `$android_deeplink_path`. Note that this should not include the URI scheme. 

Here's a good example that will cause us to trigger `myapp://content/1234`:

```
{
	'$ios_deeplink_path': 'content/1234'
}
```