{% section header %}
### URI Scheme
{% endsection %}

{% section optional %}{% endsection %}

Setting the URI scheme is not strictly required if you are only going to use Branch to measure the number of clicks. To obtain the number of installs, to deeplink to your app, or to do anything else that Branch enables you to do, you need to choose a URI scheme and make sure it is consistent between the Dashboard.

URI schemes are particular to the platform. {% if page.ios %}For iOS apps, the URI scheme can be specified in the .plist file under URL Types.{%endif%}{% if page.android %}For Android apps, the URI scheme can be specified in your project's manifest file.{%endif%} If you haven't added one to your {{page.platform_formatted}} app yet, you should choose a unique identifier for your app that no one else will use (e.g. `com.yourapp://`).

For more details on finding/setting your URI scheme in the client, {%section client_uri %}see Configuring the Client's section on [setting the URI scheme](/domains/configuring_client_apps/{{page.platform}}/#uri-scheme).{%endsection%}

When you know or have decided on which URI scheme your app is going to use, add the base URL to the Branch Dashboard under Settings > [http://dashboard.branch.io/#/settings/link](Link Settings).

<!---       Screenshot of URI scheme -->
![Store](/img/ingredients/configuring_the_dashboard/{{%page.platform%}}_uri.png)
