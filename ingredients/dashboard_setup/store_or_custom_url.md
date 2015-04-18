{% section header %}
{% if page.ios %}### App Store or custom URL{%endif%}
{% if page.android %}### Play Store or custom URL{%endif%}
{% if page.web %}### [TODO] Doesn't work for web{%endif%}
{% endsection %}

Part of the magic of Branch Links is that you can have different configurations for iOS, Android, Fire... -- and it just works! In this section, you need to specify where the user can download your app.

When setting up {% if page.ios %}an iOS{%endif%}{% if page.android %}an Android{%endif%} app, you need to locate your app in the {% if page.ios %}App{%endif%}{% if page.android %}Play{%endif%} Store. Start typing the name of your app and it should show up in the box.

<!---       Screenshot of App Store / Play Store -->
![Store](/img/ingredients/configuring_the_dashboard/{{page.platform}}_store.png)

You may be wondering--what if I can't find my app, or it isn't on the {% if page.ios %}App{%endif%}{% if page.android %}Play{%endif%} Store yet? Good news: you can specify any location you want. {% if page.ios %}For iOS apps, you can put in the URL provided by Apple on iTunesConnect (if you anticipate going live soon) or you can specify a custom URL to wherever the app is hosted remotely.{%endif%}{% if page.android %}For Android Apps, you can specify the URL of your APK file.{%endif%}

{% protip title='Note:'  %}
This field is __required__. If you are in the early stages of testing, you can enter a Custom URL (http://google.com works). Then when you click a Branch link, instead of navigating to the {% if page.ios %}App{%endif%}{% if page.android %}Play{%endif%} Store, it will go to this URL. Then you can simulate an install by running the app from {% if page.ios %}Xcode{%endif%}{% if page.android %}Eclipse or Android Studio{%endif%}.
{% endprotip %}
