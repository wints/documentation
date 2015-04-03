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


<!---    6. Custom Data -->
{% section links_and_sharing_custom_data %}

{% section links_and_sharing_custom_data_header %}### Custom Data{% endsection %}

This is one of the most powerful tools that Branch offers you--you can attach any data you want to a link.

One possibility is to use this for users sharing invitations or content. For example, when Mario wants to invite his friends to your app, you can give him a unique link with custom data about him and his content in it.

The power of this is that the data will appear when Mario's friends use the app. So as soon as a user he refers opens the app, you can show a custom welcome, offer to go straight to Mario's profile or shared content, or even reward both Mario and the user he referred.

Example:

{% if page.dashboard %}
![picture here]()
{% endif %}
{% if page.ios %}
~~~ objc
NSDictionary *params = @{@"referringUsername": @"Mario",
                         @"referringUserId": @"1234",
                         @"pictureId": @"987666",
                         @"pictureURL": @"http://yoursite.com/pics/987666",
                         @"pictureCaption": @"The princess and the plumber"};
NSString *channel = @"sms"; // or @"facebook" or @"twitter", etc.
NSString *feature = BRANCH_FEATURE_TAG_SHARE;
[[Branch getInstance] getShortURLWithParams:params andChannel:channel andFeature:feature andCallback:^(NSString *url, NSError *error) {
    if (!error) {
        // url is available for sharing!
        NSLog(@"url is: %@", url);
    }
}];
~~~
{% endif %}
{% if page.android %}
~~~
Code here
~~~
{% endif %}
{% if page.web %}
~~~
Code here
~~~
{% endif %}
{% if page.http %}
~~~
Code here
~~~
{% endif %}

{% endsection %}
<!---    /6. Custom Data -->


<!---    7. OG Tags -->
{% section links_and_sharing_og_tags %}

{% section links_and_sharing_og_tags_header %}### OG Tags{% endsection %}

[TODO] Explanation

Example:

{% if page.dashboard %}
![picture here]()
{% endif %}
{% if page.ios %}
~~~ objc
NSDictionary *params = @{@"$og_title": @"MyApp is awesome",
                         @"$og_description": @"going crazy viral!",
                         @"$og_image_url": @"http://yoursite.com/pics/987666"};
NSString *channel = @"facebook"; // or @"twitter", etc.
NSString *feature = BRANCH_FEATURE_TAG_SHARE;
[[Branch getInstance] getShortURLWithParams:params andChannel:channel andFeature:feature andCallback:^(NSString *url, NSError *error) {
    if (!error) {
        // url is available for sharing!
        NSLog(@"url is: %@", url);
    }
}];
~~~
{% endif %}
{% if page.android %}
~~~
Code here
~~~
{% endif %}
{% if page.web %}
~~~
Code here
~~~
{% endif %}
{% if page.http %}
~~~
Code here
~~~
{% endif %}

Here is a full list of OG tags recognized by Branch:

| Key | Value
| --- | ---
| "$og_title" | The title you'd like to appear for the link in social media
| "$og_description" | The description you'd like to appear for the link in social media
| "$og_image_url" | The URL for the image you'd like to appear for the link in social media
| "$og_video" | The URL for the video
| "$og_url" | The URL you'd like to appear
| "$og_app_id" | Your OG app ID. Optional and rarely used.


{% endsection %}
<!---    /7. OG Tags -->


<!---    8. Customizing URL -->
{% section links_and_sharing_customizing_url %}

{% section links_and_sharing_customizing_url_header %}### Customizing the URL{% endsection %}

<!---       $ios_url -->
{% section links_and_sharing_customizing_url_ios_url %}
#### $ios_url

For users who don't have your iOS app (or if you don't have an iOS app), you can specify on a link-by-link basis where the user should end up if they click one of your links. You can specify this parameter for any link generated anywhere.

Otherwise, this defaults to the value you specified on the Dashboard. You can see instructions on how to change it [here](/ingredients/configuring_the_dashboard/ios/index.html#store_or_custom_url).

Example:

{% if page.dashboard %}
![picture here]()
{% endif %}
{% if page.ios %}
~~~ objc
NSDictionary *params = @{ @"$ios_url": @"http://example.com/your-custom-page-instead-of-the-app-store" };
[[Branch getInstance] getShortURLWithParams:params andCallback:^(NSString *url, NSError *error) {
    if (!error) {
        // url is available for sharing!
        NSLog(@"url is: %@", url);
    }
}];
~~~
{% endif %}
{% if page.android %}
~~~
Code here
~~~
{% endif %}
{% if page.web %}
~~~
Code here
~~~
{% endif %}
{% if page.http %}
~~~
Code here
~~~
{% endif %}

{% endsection %}
<!---       /$ios_url -->

<!---       $android_url -->
{% section links_and_sharing_customizing_url_android_url %}
#### $android_url

For users who don't have your Android app (or if you don't have an Android app), you can specify on a link-by-link basis where the user should end up if they click one of your links. You can specify this parameter for any link generated anywhere.

Otherwise, this defaults to the value you specified on the Dashboard. You can see instructions on how to change it [here](/ingredients/configuring_the_dashboard/android/index.html#store_or_custom_url).

Example:

{% if page.dashboard %}
![picture here]()
{% endif %}
{% if page.ios %}
~~~ objc
NSDictionary *params = @{ @"$android_url": @"http://example.com/your-custom-page-instead-of-the-play-store" };
[[Branch getInstance] getShortURLWithParams:params andCallback:^(NSString *url, NSError *error) {
    if (!error) {
        // url is available for sharing!
        NSLog(@"url is: %@", url);
    }
}];
~~~
{% endif %}
{% if page.android %}
~~~
Code here
~~~
{% endif %}
{% if page.web %}
~~~
Code here
~~~
{% endif %}
{% if page.http %}
~~~
Code here
~~~
{% endif %}

{% endsection %}
<!---       /$android_url -->


<!---       $desktop_url -->
{% section links_and_sharing_customizing_url_desktop_url %}
#### $desktop_url

Inevitably users will click on your link on the Desktop. By default, we take the user to a Text-Me-The-App page. You can specify a different default behavior on the Dashboard under Settings > [Link Settings](https://dashboard.branch.io/#/settings/link) if you scroll down to Desktop ([TODO]!! [more info here](/ingredients/configuring_the_dashboard/{{page.platform}}/))

If you want to override this app-wide behavior, you can set $desktop_url on a per-link basis. When creating the data dictionary to attach to the link, simply include $deeplink_path as a key and a URL as the value.

Example:

{% if page.dashboard %}
![picture here]()
{% endif %}
{% if page.ios %}
~~~ objc
NSDictionary *params = @{ @"$desktop_url": @"http://example.com/your-custom-page-instead-of-a-text-me-the-app-screen" };
[[Branch getInstance] getShortURLWithParams:params andCallback:^(NSString *url, NSError *error) {
    if (!error) {
        // url is available for sharing!
        NSLog(@"url is: %@", url);
    }
}];
~~~
{% endif %}
{% if page.android %}
~~~
Code here
~~~
{% endif %}
{% if page.web %}
~~~
Code here
~~~
{% endif %}
{% if page.http %}
~~~
Code here
~~~
{% endif %}

{% endsection %}
<!---       /$desktop_url -->


<!---       $always_deeplink -->
{% section links_and_sharing_customizing_url_always_deeplink %}
#### $always_deeplink

Always open the app explanation, blah blah blah.

[TODO]

If you want to override this app-wide behavior, you can set $always_deeplink on a per-link basis. When creating the data dictionary to attach to the link, simply include $always_deeplink as a key and either the string "true" or "false" as the value.

Example:

{% if page.dashboard %}
![picture here]()
{% endif %}
{% if page.ios %}
~~~ objc
NSDictionary *params = @{ @"$always_deeplink": @"true" };
[[Branch getInstance] getShortURLWithParams:params andCallback:^(NSString *url, NSError *error) {
    if (!error) {
        // url is available for sharing!
        NSLog(@"url is: %@", url);
    }
}];
~~~
{% endif %}
{% if page.android %}
~~~
Code here
~~~
{% endif %}
{% if page.web %}
~~~
Code here
~~~
{% endif %}
{% if page.http %}
~~~
Code here
~~~
{% endif %}

{% endsection %}
<!---       /$always_deeplink -->


{% endsection %}
<!---    /8. Customizing URL -->



<!---    9. Match Duration -->
{% section links_and_sharing_match_duration %}

{% section links_and_sharing_match_duration_header %}### Match Duration{% endsection %}

[TODO] some explanation

Example:

{% if page.dashboard %}
![picture here]()
{% endif %}
{% if page.ios %}
~~~ objc
[[Branch getInstance] getShortURLWithParams:nil andTags:nil andChannel:@"iOS" andFeature:BRANCH_FEATURE_TAG_SHARE andStage:nil andMatchDuration:(60*60*1) andCallback:^(NSString *url, NSError *error) {
    if (!error) {
        // url is available for sharing!
        NSLog(@"url is: %@", url);
    }
}];
~~~
{% endif %}
{% if page.android %}
~~~
Code here
~~~
{% endif %}
{% if page.web %}
~~~
Code here
~~~
{% endif %}
{% if page.http %}
~~~
Code here
~~~
{% endif %}

{% endsection %}
<!---    /9. Match Duration -->


{% endsection %}
<!--- /OPTIONS -->

