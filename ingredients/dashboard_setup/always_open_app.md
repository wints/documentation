
### "Always try to open the app"

By default, Branch will take users to the {% if page.ios %}App{% endif %}{% if page.android %}Play{% endif %} Store if we do not know that the user has your app. So the first time a user clicks a link, we take him or her to the Store (or, on {{page.platform_formatted}}, {% if page.ios %}$ios_url{% endif %}{% if page.android %}$android_url{% endif %}).

The reason we do this is to avoid an ugly error message if the URI scheme fires and fails. By tracking users we've seen before with a cookie, we can know whether or not they have your app installed.

If you want to override the behavior and try the URI scheme first every time (with a fallback to the {% if page.ios %}App{% endif %}{% if page.android %}Play{% endif %} Store after .5 seconds), you can turn on the option "Always try to open the app." You can see it in the screenshot below or on the [Link Settings](https://dashboard.branch.io/#/settings/link) page.

![always open app](/img/ingredients/dashboard_setup/always_open_app.png)
