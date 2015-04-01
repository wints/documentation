---
type: ingredient
title: Links and Sharing
platforms:
- dashboard
- ios
- android
- web
- http
---

<!--- HEADER -->
## {% section links_and_sharing_header %}Links and Sharing{% endsection %}
<!--- /HEADER -->

<!--- YOUR FIRST LINK -->
{% section links_and_sharing_your_first_link %}

{% section links_and_sharing_your_first_link_header %}### Your First Link{% endsection %}

{% if page.dashboard %}
Explanation for dashboard

Pics for dashboard
{%endif%}

{% if page.ios %}
Explanation for iOS

Code for iOS
{%endif%}

{% if page.android %}
Explanation for Android

Code for Android
{%endif%}

{% if page.web %}
Explanation for Web

Code for Web
{%endif%}

{% if page.http %}
Explanation for HTTP API

Code for HTTP API
{%endif%}

{% endsection %}
<!--- /YOUR FIRST LINK -->


<!--- OPTIONS -->
{% section links_and_sharing_options %}


<!---    1. Campaign -->
{% section links_and_sharing_campaign %}

{% section links_and_sharing_campaign_header %}### Campaign{% endsection %}

{% endsection %}
<!---    /1. Campaign -->


<!---    2. Tags -->
{% section links_and_sharing_tags %}

{% section links_and_sharing_tags_header %}### Tags{% endsection %}

{% endsection %}
<!---    /2. Tags -->


<!---    3. Feature -->
{% section links_and_sharing_feature %}

{% section links_and_sharing_feature_header %}### Feature{% endsection %}

{% endsection %}
<!---    /3. Feature -->


<!---    4. Alias -->
{% section links_and_sharing_alias %}

{% section links_and_sharing_alias_header %}### Alias{% endsection %}

{% endsection %}
<!---    /4. Alias -->


<!---    5. Channel -->
{% section links_and_sharing_channel %}

{% section links_and_sharing_channel_header %}### Channel{% endsection %}

{% endsection %}
<!---    /5. Channel -->


<!---    6. OG Tags -->
{% section links_and_sharing_og_tags %}

{% section links_and_sharing_og_tags_header %}### OG Tags{% endsection %}

{% endsection %}
<!---    /6. OG Tags -->


<!---    7. Custom Data -->
{% section links_and_sharing_custom_data %}

{% section links_and_sharing_custom_data_header %}### Custom Data{% endsection %}

{% endsection %}
<!---    /7. Custom Data -->


<!---    8. Customizing URL -->
{% section links_and_sharing_customizing_url %}

{% section links_and_sharing_customizing_url_header %}### Customizing the URL{% endsection %}

<!---       $ios_url -->
{% section links_and_sharing_customizing_url_ios_url %}
#### $ios_url

For users who don't have your iOS app (or if you don't have an iOS app), you can specify on a link-by-link basis where the user should end up if they click one of your links. You can specify this parameter for any link generated anywhere.

Otherwise, this defaults to the value you specified on the Dashboard. You can see instructions on how to change it [here](/ingredients/configuring_the_dashboard/ios/index.html#store_or_custom_url)
{% endsection %}
<!---       /$ios_url -->

<!---       $android_url -->
{% section links_and_sharing_customizing_url_android_url %}
#### $android_url

For users who don't have your Android app (or if you don't have an Android app), you can specify on a link-by-link basis where the user should end up if they click one of your links. You can specify this parameter for any link generated anywhere.

Otherwise, this defaults to the value you specified on the Dashboard. You can see instructions on how to change it [here](/ingredients/configuring_the_dashboard/android/index.html#store_or_custom_url)
{% endsection %}
<!---       /$android_url -->

<!---       $desktop_url -->
{% section links_and_sharing_customizing_url_desktop_url %}
#### $desktop_url

Inevitably users will click on your 
{% endsection %}
<!---       /$desktop_url -->

{% endsection %}
<!---    /8. Customizing URL -->


<!---    9. Always Deeplink -->
{% section links_and_sharing_always_deeplink %}

{% endsection %}
<!---    /9. Always Deeplink -->


<!---    10. Match Duration -->
{% section links_and_sharing_match_duration %}

{% endsection %}
<!---    /10. Match Duration -->


{% endsection %}
<!--- /OPTIONS -->

