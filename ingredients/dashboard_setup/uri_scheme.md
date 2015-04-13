{% section header %}
### URI Scheme
{% endsection %}

{% section optional %}{% endsection %}

Setting the URI scheme is not strictly required if you are only going to use Branch to measure the number of clicks. To obtain the number of installs, to deeplink to your app, or to do anything else that Branch enables you to do, you need to choose a URI scheme and make sure it is consistent between the Dashboard.

URI schemes are particular to the platform. {% if page.ios %}For iOS apps, the URI scheme can be specified in the .plist file under URL Types. If you haven't added one to your iOS app yet, be sure to check out [TODO] [Configuring the Client]().{%endif%}{% if page.android %}For Android apps, the URI scheme can be specified in your project's manifest file. If you haven't added one to your Android app yet, be sure to check out [TODO] [Configuring the Client]().{%endif%}

When you know or have decided on which URI scheme your app is going to use, add the base URL to the Branch Dashboard under Settings > [http://dashboard.branch.io/#/settings/link](Link Settings).

<!---       Screenshot of URI scheme -->
![Store](/img/ingredients/configuring_the_dashboard/{{%page.platform%}}_uri.png)
