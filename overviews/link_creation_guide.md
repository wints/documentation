---
type: overview
title: Deep link creation guide
page_title: How to create mobile deep links for apps
description: Learn how to create fully customized deep links for apps in Android and iOS and what properties and customizations are available when using Branch Metrics.
keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, Google App Indexing, Google App Invites, Apple Universal Links, Apple Spotlight Search, Facebook App Links, AppLinks, Deepviews, Deep views, Link Properties, Redirect Customization, Mobile SDK, Web SDK, HTTP API
---

Regardless of how the link gets created, all links behave the same way.

## General properties of all links

The following sections describe properties and customizations that are available in nearly all methods of link creation. In every method listed below this section, there is a way to customize these individual properties.

### Analytics labels for data organization

Use our analytics tags to help _organize your data_. Track updates, run A/B tests and measure the effectiveness of different channels using these labels.

- **channel**: Use channel to tag the _route_ that your link reaches users. For example, tag links with ‘Facebook’ or ‘LinkedIn’ to help track clicks and installs through those paths separately.

- **feature**: This is the feature of the customer’s product that the link might be associated with. For example, if you had built a referral program, you would label links with the feature ‘referral’.

- **campaign** :Use this field to organize the links by actual campaign. For example, if you launched a new feature or product and want to run a campaign around that.

- **stage**: Use this to categorize the progress or category of a user when the link was generated. For example, if you had an invite system accessible on level 1, level 3 and 5, you could differentiate links generated at each level with this parameter

- **tags**: This is more a free form entry with unlimited values. Use it to organize your link data with labels that don't fit within the bounds of the above.


### Redirect customization

Every link that you create is completely customizable from a functionality perspective. Here are the key variables for customization.

#### Endpoint customization

- **$desktop_url**: Change the redirect endpoint on desktops. Default is set to a Branch hosted SMS to download page.

- **$ios_url**: Change the redirect endpoint for iOS. Default is set to the App Store page for your app.

- **$android_url**: Change the redirect endpoint for Android. Default is set to the Play Store page for your app.

- **$windows_phone_url**: Change the redirect endpoint for Windows OS. Default is set to the default URL set [on the dashboard](https://dashboard.branch.io/#/settings/link).

- **$blackberry_url**:  Change the redirect endpoint for Blackberry OS. Default is set to the default URL set [on the dashboard](https://dashboard.branch.io/#/settings/link).

- **$fire_url**:  Change the redirect endpoint for Amazon Fire OS. Default is set to the default URL set [on the dashboard](https://dashboard.branch.io/#/settings/link).

#### Deep link customization

- **$deeplink_path**:  With this key, use value of the deep link path that you'd like us to append to your URI. For example, you could specify "$deeplink_path": "radio/station/456" and we'll open the app with the URI "yourapp://radio/station/456?link_click_id=branch-identifier". Default is 'open?link_click_id=1234'.

- **duration**: Lets you control the fingerprinting match timeout (the time that a click will wait for an app open to match) also known as attribution window. Default is 2 hours.

#### Advanced control parameters

- **$query_param_passthrough**: Set value to 'true' so make sure that any query parameters appended to the Branch link will pass through to the redirect endpoint. Default is off.

- **$always_deeplink**: A value to indicate if we should try to open up the app on mobile link click. Default is set to 'true'.

- **$android_deeplink_path**: Same as normal deeplink path but only for Android clicks

- **&ios_deeplink_path**: Same as normal deeplink path but only for iOS clicks

- **$ios_redirect_timeout**: Control the timeout in ms that the client side JS waits after trying to open up the app before redirecting to the App Store. Default is 750 ms.

- **$android_redirect_timeout**: Control the timeout in ms that the client side JS waits after trying to open up the app before redirecting to the Play Store. Default is 750 ms.

### Display customization

If no open graph tags are specified in the links, we will redirect to the desktop URL to retrieve them. 

- **$og_title**: Set the title of the link as it will be seen in social media displays.

- **$og_description**: Set the description of the link as it will be seen in social media displays.

- **$og_image_url**: Set the image of the link as it will be seen in social media displays.

- **$og_video**: Set a video as it will be seen in social media displays.

- **$og_url**: Set the base URL of the link as it will be seen in social media displays.

- **$og_type**: Set the type of custom card format link as it will be seen in social media displays.

- **$og_redirect**: Set a custom URL that we redirect the social media robots to in order to retrieve all the appropriate tags.

## Mobile SDKs

- [iOS documentation](https://github.com/BranchMetrics/Branch-iOS-SDK#shortened-links)
- [Android documentation](https://github.com/BranchMetrics/Branch-Android-SDK#shortened-links)
- [Cordova/Ionic documentation](https://github.com/BranchMetrics/Web-SDK/blob/master/CORDOVA_GUIDE.md#linkdata-callback)
- [Xamarin documentation](https://github.com/BranchMetrics/Branch-Xamarin-SDK#shortened-links)
- [Unity documentation](https://github.com/BranchMetrics/Branch-Unity-SDK#shortened-links)
- [Titanium documentation](https://github.com/BranchMetrics/Web-SDK/blob/master/TITANIUM_GUIDE.md#linkdata-callback)

Here is an example URL creation call in iOS. This would be called after using the initSession call with the appropriate app key to register the native library for your app.

{% highlight objc %}
NSMutableDictionary *params = [[NSMutableDictionary alloc] init];

[params setObject:@"1234" forKey:@"user_id"];
[params setObject:@"https://s3-us-west-1.amazonaws.com/myapp/joes_pic.jpg" forKey:@"profile_pic" forKey:@"user_pic"];

[params setObject:@"Joe's referral link" forKey:@"$og_title"];
[params setObject:@"https://s3-us-west-1.amazonaws.com/myapp/joes_pic.jpg" forKey:@"profile_pic" forKey:@"$og_image_url"];
[params setObject:@"Joe likes long walks on the beach..." forKey:@"$og_description"];

Branch *branch = [Branch getInstance:@"Your app key"];
[branch getShortURLWithParams:params andChannel:@"sms" andFeature:BRANCH_FEATURE_TAG_SHARE andStage:@"added_to_cart" andCallback:^(NSString *url, NSError *error) {
	if(!error) {
		// embed the link into an SMS for sharing
	}
}];
{% endhighlight %}

## Appending parameters

- [More detailed docs](https://github.com/BranchMetrics/Branch-Public-API#structuring-a-dynamic-deeplink)

If you'd like to just build a Branch link by appending query parameters, we support that too. Here's an example of how to do that:

1. Start with your Branch domain, http://bnc.lt (or your white labeled one). 
2. Append /a/your_Branch_key.
3. Append the start of query params '?' 
4. [optional] Append the Branch analytics tag feature=marketing&channel=email&tags[=drip1&tags[]=welcome 
5. [optional] Append any custom deep link parameters &user_id=4562&name=Alex&article_id=456
6. [optional] You can append the data parameter (base64 encoded) filled with your Branch _$_ control parameters

Here's an example of a finalized one:

	https://bnc.lt/a/key_live_jbgnjxvlhSb6PGH23BhO4hiflcp3y7ky?has_app=yes&channel=facebook&stage=level4&feature=affiliate&deeplinkdata=mydata

## Web SDK

- [Web link documentation](https://github.com/BranchMetrics/Web-SDK/blob/master/WEB_GUIDE.md#linkdata-callback)
- [Smart banner documentation](https://github.com/BranchMetrics/Web-SDK/blob/master/WEB_GUIDE.md#banneroptions-data)
- [SMS link documentation](https://github.com/BranchMetrics/Web-SDK/blob/master/WEB_GUIDE.md#sendsmsphone-linkdata-options-callback)

Here's some example code to show the smart banner on your mobile website.

{% highlight javascript %}
branch.banner({
    icon: 'http://icons.iconarchive.com/icons/wineass/ios7-redesign/512/Appstore-icon.png',
    title: 'Branch Demo App',
    description: 'The Branch demo app!',
    openAppButtonText: 'Open',              // Text to show on button if the user has the app installed
    downloadAppButtonText: 'Download',      // Text to show on button if the user does not have the app installed
    sendLinkText: 'Send Link',              // Text to show on desktop button to allow users to text themselves the app
    phonePreviewText: '+44 9999-9999',      // The default phone placeholder is a US format number, localize the placeholder number with a custom placeholder with this option
    showiOS: true,                          // Should the banner be shown on iOS devices?
    showAndroid: true,                      // Should the banner be shown on Android devices?
    showDesktop: true,                      // Should the banner be shown on desktop devices?
    iframe: true,                           // Show banner in an iframe, recomended to isolate Branch banner CSS
    disableHide: false,                     // Should the user have the ability to hide the banner? (show's X on left side)
    forgetHide: false,                      // Should we show the banner after the user closes it? Can be set to true, or an integer to show again after X days
    position: 'top',                        // Sets the position of the banner, options are: 'top' or 'bottom', and the default is 'top'
    mobileSticky: false,                    // Determines whether the mobile banner will be set `position: fixed;` (sticky) or `position: absolute;`, defaults to false *this property only applies when the banner position is 'top'
    desktopSticky: true,                    // Determines whether the desktop banner will be set `position: fixed;` (sticky) or `position: absolute;`, defaults to true *this property only applies when the banner position is 'top'
    customCSS: '.title { color: #F00; }',   // Add your own custom styles to the banner that load last, and are gauranteed to take precedence, even if you leave the banner in an iframe
    make_new_link: false                    // Should the banner create a new link, even if a link already exists?
}, {
    feature: 'mobile_web',
    stage: 'logged_in',
    data: {
        deeplinkdata: 'something',
        referring_page: 'bar',
    }
});
{% endhighlight %}

## HTTP API

- [URL endpoint](https://github.com/BranchMetrics/Branch-Public-API#creating-a-deep-linking-url)
- [Bulk link endpoint](https://github.com/BranchMetrics/Branch-Public-API#bulk-creating-deep-linking-urls)

Here is an example CURL call to create a link with some example parameters. You would specify the Branch key received by going through the start.branch.io configuration.

    curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"branch_key":"key_live_jfdweptNITtAY5HVY3mBSojopgfGf8qQ", 
    "campaign":"announcement",
    "feature":"invite",
    "channel":"email",
    "tags":["4"],
    "data":"{\"name\":\"Alex\",\"email\":\"alex@branch.io\",\"$desktop_url\":\"https://branch.io\"}"
    }' \
    https://api.branch.io/v1/url

This will return a dictionary like so, with your specific link.

	{'url’ : ‘https://bnc.lt/ADaEf23-0’}

## Dashboard

{% ingredient dashboard_links/creating_links %}
	{% override title %}{% endoverride %}
	{% override description %}{% endoverride %}
{% endingredient %}