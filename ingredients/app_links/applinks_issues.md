
{% section header %}## An Issue With App Links{% endsection %}

{% image src='/img/recipes/appinvites/missing_applinks.png' quarter right alt='troubleshooting' %}

If Facebook is having trouble reading the AppLinks from the Branch link, you might see this message while trying to test out the flow. This means that there is something corrupted in the OG tags causing Facebook to not parse it. You can test the OG tags using the following tool provided by Facebook:

[OG tag tester](https://developers.facebook.com/tools/debug/og/object) If your OG tags look fine and you're still getting this error, please reach out to support@branch.io immediately.

#### Known issue with Country Restrictions

We recently discovered a bug within the Facebook system that prevents App Links from being read by the robot if _Country Restricted_ is set to _Yes_. Please **disable** _Country Restricted_ in your Advanced Facebook App Settings tab.

It cannot look like this:
{% image src='/img/recipes/appinvites/country_restricted.png' third center alt='troubleshooting' %}