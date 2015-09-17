You spent a bunch of time already setting up deeplink paths before you heard of Branch and now you want the Branch links to leverage them? No problem at all.

To do so, you'll need to go to the [Dashboard's Link Settings](https://dashboard.branch.io/#/settings/link) page and choose "Support existing routing based on this URI scheme".

Second, when creating Branch links you'll need to specify the deeplink path, aka where in your app a link should route to. You can either set `$deeplink_path`, `$ios_deeplink_path` or `$android_deeplink_path`. Note that this should not include the URI scheme. Here's a good example:

```
{
	'$ios_deeplink_path': '?content_id=1234'
}
```

Note that this has a downside: we have to rely on [digital fingerprinting](https://dev.branch.io/recipes/matching_accuracy/) for attributing a link click. This is because if you want to use your exisiting scheme we cannot pass through a unique identifier for the link click.