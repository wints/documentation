
## Structuring a 'dynamic' Deeplink

Again, this should be used for situations where the longer link is okay and you want to create links quickly without a POST to the API.

### Endpoint

	GET https://bnc.lt/a/<branch_key>?AnyOptionalQueryParamsBelow

### Example:

```
https://bnc.lt/a/key_live_jbgnjxvlhSb6PGH23BhO4hiflcp3y7ky?data=ExampleBase64EncodedString&has_app=no&channel=facebook&stage=level4&feature=affiliate
```

### Parameters

**branch_key** _required_
: The Branch key of the originating app

#### Functional

**data**  _optional_ : Default is { }. Base 64 Encoded JSON dictionary of parameters to pass into the app. Default redirects can be overridden with $ios_url, $android_url and $desktop_url. The appearance in social media can be customized with the $og_title, $og_description and $og_image_url keys.

**has_app** _optional_ : Default is 'no'. Possible values are 'yes' or 'no'. If you specify 'yes', we'll try to open up the app immediately instead of sending the clicker to the app store.

**duration** _optional_ : ADVANCED: In seconds. Only set this key if you want to override the match duration for deep link matching. This is the time that Branch allows a click to remain outstanding and be eligible to be matched with a new app session. This is default set to 7200 (2 hours)

**type** _optional_ : ADVANCED: Default is 0. Possible values are 0 or 1. A type of 0 means that the link will pass parameters through install any time that it is clicked and followed by an app session. A type of 1 is a security measure, which prevents the link from passing parameters into the app after the first successful deep link.

#### Tracking

**tags** _optional_ (each max 64 characters) : An array of strings, which are custom tags in which to categorize the links by. Recommended syntax: ?tags=a&tags=b&tags=c

**campaign** _optional_ (max 128 characters) : The campaign in which the link will be used. eg: "new_product_launch", etc.

**feature** _optional_ (max 128 characters) : The feature in which the link will be used. eg: "invite", "referral", "share", "gift", etc.

**channel** _optional_ (max 128 characters) : The channel in which the link will be shared. eg: "facebook", "text_message".

**stage** _optional_ (max 128 characters) : A string value that represents the stage of the user in the app. eg: "level1", "logged_in", etc.
