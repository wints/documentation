
## Structuring a 'dynamic' Deeplink

This should be used for situations where the longer link is okay and you want to create links quickly without a POST to the API. Here's a list of instructions on how to build a deep link: 

1. Start with your Branch domain, http://bnc.lt (or your white labeled one). 
2. Append /a/your_Branch_key.
3. [optional] Append the start of query params '?' 
4. [optional] Append the Branch analytics tag feature=marketing&channel=email&tags[=drip1&tags[]=welcome 
5. [optional] Append any custom deep link parameters &user_id=4562&name=Alex&article_id=456
6. [optional] You can append your Branch control parameters - see a table of them here: <https://github.com/BranchMetrics/Branch-Public-API#parameters>

#### Endpoint

```sh
  GET https://bnc.lt/a/<branch_key>?AnyOptionalQueryParamsBelow
```

> Example:
https://bnc.lt/a/key_live_jbgnjxvlhSb6PGH23BhO4hiflcp3y7ky?has_app=no&channel=facebook&stage=level4&feature=affiliate

#### Parameters

**branch_key** _required_
: The Branch key of the originating app

##### Functional

**has_app** _optional_
: Default is 'no'. Possible values are 'yes' or 'no'. If you specify 'yes', we'll try to open up the app immediately instead of sending the clicker to the app store.

**duration** _optional_
: ADVANCED: In seconds. Only set this key if you want to override the match duration for deep link matching. This is the time that Branch allows a click to remain outstanding and be eligible to be matched with a new app session. This is default set to 7200 (2 hours)

**type** _optional_
: ADVANCED: Default is 0. Possible values are 0 or 1. A type of 0 means that the link will pass parameters through install any time that it is clicked and followed by an app session. A type of 1 is a security measure, which prevents the link from passing parameters into the app after the first successful deep link.

**any other params** _optional_
: You can tack on any addition query params and they will show up in the initSession callback in the app!

##### Tracking

**tags** _optional_ (each max 64 characters)
: An array of strings, which are custom tags in which to categorize the links by. Recommended syntax: ?tags=a&tags=b&tags=c

**campaign** _optional_ (max 128 characters)
: The campaign in which the link will be used. eg: "new_product_launch", etc.

**feature** _optional_ (max 128 characters)
: The feature in which the link will be used. eg: "invite", "referral", "share", "gift", etc.

**channel** _optional_ (max 128 characters)
: The channel in which the link will be shared. eg: "facebook", "text_message".

**stage** _optional_ (max 128 characters)
: A string value that represents the stage of the user in the app. eg: "level1", "logged_in", etc.

##### Other control params

- **$desktop_url**: Change the redirect endpoint on desktops. Default is set to a Branch hosted SMS to download page.

- **$ios_url**: Change the redirect endpoint for iOS. Default is set to the App Store page for your app.

- **$android_url**: Change the redirect endpoint for Android. Default is set to the Play Store page for your app.

- **$deeplink_path**:  With this key, use value of the deep link path that you'd like us to append to your URI. For example, you could specify "$deeplink_path": "radio/station/456" and we'll open the app with the URI "yourapp://radio/station/456?link_click_id=branch-identifier". Default is 'open?link_click_id=1234'.