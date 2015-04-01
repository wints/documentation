---
type: ingredient
title: Configuring the Dashboard
platforms:
- ios
- android
- web
---

<!--- HEADER -->
## {% section configuring_the_dashboard_header %}Configuring the Dashboard{% endsection %}
<!--- /HEADER -->


<!--- REQUIRED -->
{% section configuring_the_dashboard_required %}

<!---    1. App Name -->
{% section configuring_the_dashboard_app_name %}
### 1. App Name

Our dashboard is the starting point for adding apps as well as tracking users of your app. 

To get started, point your browser to [https://dashboard.branch.io/](https://dashboard.branch.io/). If you haven't created an account before, you can signup and get taken through the basic setup right away. If you've signed up already, simply navigate to the [Summary](https://dashboard.branch.io/#) page and click the dropdown button in the top right. Choose "Create new app."

![Dashboard Screenshot Adding App](/img/ingredients/configuring_the_dashboard/add_app.png)

You will be prompted to enter a name for your new app. Do so and press "Create."

![Dashboard Screenshot App Name](/img/ingredients/configuring_the_dashboard/app_name.png)

<!---       Tip1 -->
{% section configuring_the_dashboard_app_name_tip1 %}
Tip: We recommend keeping production and development versions of your app as completely separate apps.
{% endsection %}
<!---       /Tip1 -->


{% endsection %}
<!---    /1. App Name -->


<!---    2. Web URL -->
{% section configuring_the_dashboard_web_url %}

### 2. Web URL

Next, to configure the Web URL on an existing app, you will need to navigate to the Settings > [http://dashboard.branch.io/#/settings/link](Link Settings) page on the Dashboard. Scroll down to _Default URL_ and enter your website.   

![Dashboard Screenshot Web URL](/img/ingredients/configuring_the_dashboard/web_url.png)

This is where we will take users who click a Branch link if we don't know where else to take them. For example, if you don't have an Android app released yet, Android users will be taken to this link. Don't forget to Save!

<!---       Tip2 -->
{% section configuring_the_dashboard_app_name_tip2 %}
Tip: You can customize this fallback URL on a per-platform or even per-link basis. After completing setup, you may want to check out [TODO] [links-and-sharing.VIII-customizing-URL](http://example.com).
{% endsection %}
<!---       /Tip2 -->


{% endsection %}
<!---    /2. Web URL -->


<!---    3. Store or custom URL -->
{% section configuring_the_dashboard_store_or_custom_url %}

{% if page.ios %}### 3. App Store or custom URL{%endif%}
{% if page.android %}### 3. Play Store or custom URL{%endif%}

Part of the magic of Branch Links is that you can have different configurations for iOS, Android, Fire... -- and it just works! In this section, you need to specify where the user can download your app.

When setting up {% if page.ios %}an iOS{%endif%}{% if page.android %}an Android{%endif%} app, you need to locate your app in the {% if page.ios %}App{%endif%}{% if page.android %}Play{%endif%} Store. Start typing the name of your app and it should show up in the box.

<!---       Screenshot of App Store / Play Store -->
{% if page.ios %}![App Store](/img/ingredients/configuring_the_dashboard/ios_app_store.png){%endif%}
{% if page.android %}![Play Store](/img/ingredients/configuring_the_dashboard/android_play_store.png){%endif%}

You may be wondering--what if I can't find my app, or it isn't on the {% if page.ios %}App{%endif%}{% if page.android %}Play{%endif%} Store yet? Good news: you can specify any location you want. {% if page.ios %}For iOS apps, you can put in the URL provided by Apple on iTunesConnect (if you anticipate going live soon) or you can specify a custom URL to wherever the app is hosted remotely.{%endif%}{% if page.android %}For Android Apps, you can specify the URL of your APK file.{%endif%}

Tip: Please note that this field is __required__. If you are in the early stages of testing, you can enter a Custom URL (http://google.com works). Then when you click a Branch link, instead of navigating to the {% if page.ios %}App{%endif%}{% if page.android %}Play{%endif%} Store, it will go to this URL. Then you can simulate an install by running the app from {% if page.ios %}Xcode{%endif%}{% if page.android %}Eclipse or Android Studio{%endif%}.

{% endsection %}
<!---    /3. Store or custom URL -->


<!---    4. URI Scheme -->
<a id="uri_scheme" />
{% section configuring_the_dashboard_uri_scheme %}

{% if page.ios %}### 4. URI Scheme{%endif%}
{% if page.android %}### 4. URI Scheme{%endif%}

Setting the URI scheme is not strictly required if you are only going to use Branch to measure the number of clicks. To obtain the number of installs, to deeplink to your app, or to do anything else that Branch enables you to do, you need to choose a URI scheme and make sure it is consistent between the Dashboard.

URI schemes are particular to the platform. {% if page.ios %}For iOS apps, the URI scheme can be specified in the .plist file under URL Types. If you haven't added one to your iOS app yet, be sure to check out [TODO] [Configuring the Client]().{%endif%}{% if page.android %}For Android apps, the URI scheme can be specified in your project's manifest file. If you haven't added one to your Android app yet, be sure to check out [TODO] [Configuring the Client]().{%endif%}

When you know or have decided on which URI scheme your app is going to use, add the base URL to the Branch Dashboard under Settings > [http://dashboard.branch.io/#/settings/link](Link Settings).

<!---       Screenshot of URI scheme (Android/iOS) -->
{% if page.ios %}![App Store](/img/ingredients/configuring_the_dashboard/ios_uri.png){%endif%}
{% if page.android %}![Play Store](/img/ingredients/configuring_the_dashboard/android_uri.png){%endif%}

{% endsection %} 
<!---    /4. URI Scheme -->

<!---    end required comment  -->
{% section configuring_the_dashboard_end_required %}
That's the end of the required setup for the Dashboard! The dashboard is incredibly powerful, so the sections below will help you get acquainted with everything it can do. Otherwise feel free to head on over to {% if page.ios %}[TODO] [Configuring the Client]() to set up your iOS app{%endif%}{% if page.android %}[TODO] [Configuring the Client]() to set up your Android app{%endif%}.
{% endsection %} 
<!---    /end required comment -->

{% endsection %} 
<!--- /REQUIRED -->


<!--- ADVANCED -->
<a id="advanced" />
{% section configuring_the_dashboard_advanced %} 

## Advanced Dashboard Setup

{% endsection %} 
<!--- /ADVANCED -->
