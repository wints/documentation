
{% section header %}## Common issues with Facebook Authentication{% endsection %}

If you are having trouble authenticating with Facebook, please check the following:

#### Be sure you have the correct App ID and Client Secret

Be sure you have the correct App ID and Client Secret. This is the number one source of issues.


#### Client Secret embedded?

If you have entered the correct App ID and Secret but are still getting issues, it may be related to how you are using your Secret. Visit the Settings > Advanced page and check that you don't have the toggle enabled for "Is your App Secret embedded?" You will only have this option if you have enabled "Native or desktop app?" on this page.

So if you have enabled "Native or desktop app", then your advanced options should appear like the following:

{% image src='/img/recipes/deeplink_ads/facebook_secret.png' 2-thirds center alt='Client Secret' %}

