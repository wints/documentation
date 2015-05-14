
## Creating a Deep Linking URL via the HTTP API

The HTTP API allows you to make a POST request and get back a short URL. We include an example for reference, although you will need to specify your own Branch Key.

### Endpoint

    POST /v1/url
    Content-Type: application/json

### Example

You can test this out from the command line. Feel free to swap in your own `branch_key`.

{% highlight sh %}
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
{% endhighlight %}

### Parameters

**branch_key** _required_ : The Branch key of the originating app.

#### Functional

**data** _optional_ : The dictionary to embed with the link. Accessed as session or install parameters from the SDK.

**Note**
You can customize the Facebook OG tags of each URL if you want to dynamically share content by using the following optional keys in the data dictionary. Please use this [Facebook tool](https://developers.facebook.com/tools/debug/og/object) to debug your OG tags!

| Key | Value
| --- | ---
| "$og_title" | The title you'd like to appear for the link in social media
| "$og_description" | The description you'd like to appear for the link in social media
| "$og_image_url" | The URL for the image you'd like to appear for the link in social media
| "$og_video" | The URL for the video 
| "$og_url" | The URL you'd like to appear
| "$og_redirect" | If you want to bypass our OG tags and use your own, use this key with the URL that contains your site's metadata.

Also, you can set custom redirection by inserting the following optional keys in the dictionary:

| Key | Value
| --- | ---
| "$desktop_url" | Where to send the user on a desktop or laptop. By default it is the Branch-hosted text-me service
| "$android_url" | The replacement URL for the Play Store to send the user if they don't have the app. _Only necessary if you want a mobile web splash_
| "$ios_url" | The replacement URL for the App Store to send the user if they don't have the app. _Only necessary if you want a mobile web splash_
| "$ipad_url" | Same as above but for iPad Store
| "$fire_url" | Same as above but for Amazon Fire Store
| "$blackberry_url" | Same as above but for Blackberry Store
| "$windows_phone_url" | Same as above but for Windows Store
| "$after_click_url" | When a user returns to the browser after going to the app, take them to this URL. _iOS only; Android coming soon_

You have the ability to control the direct deep linking of each link as well:

| Key | Value
| --- | ---
| "$deeplink_path" | The value of the deep link path that you'd like us to append to your URI. For example, you could specify "$deeplink_path": "radio/station/456" and we'll open the app with the URI "yourapp://radio/station/456?link_click_id=branch-identifier". This is primarily for supporting legacy deep linking infrastructure. 
| "$always_deeplink" | true or false. (default is not to deep link first) This key can be specified to have our linking service force try to open the app, even if we're not sure the user has the app installed. If the app is not installed, we fall back to the respective app store or $platform_url key. By default, we only open the app if we've seen a user initiate a session in your app from a Branch link (has been cookied and deep linked by Branch).

**alias** _optional_ (max 128 characters) : Instead of our standard encoded short url, you can specify the alias of the link bnc.lt/alexaustin. Aliases are enforced to be unique per domain (bnc.lt, yourapp.com, etc). Be careful, link aliases are _unique_, immutable objects that cannot be deleted.

{% protip title="Aliased links are cached" %}
NOTE: If you POST to the this endpoint with the same alias, and a matching set of other POST parameters to an existing aliased link, the original will be returned to you. If it clashes and you don't specify a match, will return a HTTP 409 error.
{% endprotip %}

**type** _optional_ : ADVANCED: Set type to 1, to make the URL a one-time use URL. It won't deep link after 1 successful deep link.

**duration** _optional_ : ADVANCED: In seconds. Only set this key if you want to override the match duration for deep link matching. This is the time that Branch allows a click to remain outstanding and be eligible to be matched with a new app session. This is default set to 7200 (2 hours)

##### Tracking

**identity**  _optional_ (max 127 characters) : The identity used to identify the user. If the link is not tied to an identity, there's no need to specify an identity.

**tags** _optional_ (each max 64 characters) : An array of strings, which are custom tags in which to categorize the links by. Recommended syntax: "tags":[t1,t2,t3].

**campaign** _optional_ (max 128 characters) : The campaign in which the link will be used. eg: "new_product_launch", etc.

**feature** _optional_ (max 128 characters) : The feature in which the link will be used. eg: "invite", "referral", "share", "gift", etc.

**channel** _optional_ (max 128 characters) : The channel in which the link will be shared. eg: "facebook", "text_message".

**stage** _optional_ (max 128 characters) : A string value that represents the stage of the user in the app. eg: "level1", "logged_in", etc.


### Returns


    {
        'url': 'http://bnc.lt/l/deeplink-randomID'
    }

