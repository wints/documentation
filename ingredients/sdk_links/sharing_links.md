
<!--- iOS -->
{% if page.ios %}

We realized that creating links is great, but it's incredible hard to create a ton of different links up front for the different channels in the UIActivityViewController. Because of this, we offer a custom UIActivityItemProvider to make your life easier. This will automatically generate a link dynamically when the user presses a button to share.

{% image src='/img/ingredients/sdk_links/ios_share_sheet.jpg' actual center alt='ios share sheet' %}

Here's how to implement it:

{% tabs %}
{% tab objective-c %}
{% highlight objc %}

// Adding text
NSString *shareString = @"Check out these shoes!";

// Adding an image
UIImage *amazingImage = [UIImage imageNamed:@"redshoes.png"];

// Custom data
NSMutableDictionary *params = [[NSMutableDictionary alloc] init];
[params setObject:@"1234" forKey:@"product_id"];
[params setObject:@"Red Shoes" forKey:@"product_name"];
[params setObject:@"Red Shoes $5" forKey:@"$og_title"];
[params setObject:@"https://mysite.com/redshoes.png" forKey:@"$og_image_url"];
[params setObject:@"Check out these awesome red shoes! Only $5." forKey:@"$og_description"];

NSArray *tags = @[@"version_213"];
NSString *feature = @"share";
NSString *stage = @"post_purchase";

// Adding a link -- Branch UIActivityItemProvider
UIActivityItemProvider *itemProvider = [Branch getBranchActivityItemWithParams:params andFeature:feature andStage:stage andTags:tags];

// Pass this in the NSArray of ActivityItems when initializing a UIActivityViewController
UIActivityViewController *shareViewController = [[UIActivityViewController alloc] initWithActivityItems:@[shareString, amazingImage, itemProvider] applicationActivities:nil];

// Present the share sheet!
[self.navigationController presentViewController:shareViewController animated:YES completion:nil];
{% endhighlight %}
{% endtab %}



{% tab swift %}
{% highlight swift %}
var items: Array = [AnyObject]()

// Adding text
let shareString = "Check out these shoes!"

// Adding an image
items.append(shareString)
if let amazingImage: UIImage = UIImage(named: "redshoes.png") {
    items.append(amazingImage)
}

// Custom data
var params = ["product_id": "1234"]
params["product_name"] = "Red Shoes"
params["$og_title"] = "Red Shoes $5"
params["$og_image_url"] = "https://mysite.com/redshoes.png"
params["$og_description"] = "Check out these awesome red shoes! Only $5."

let tags = ["version_213"]
let feature = "share"
let stage = "post_purchase"

// Adding a link -- Branch UIActivityItemProvider
let itemProvider = Branch.getBranchActivityItemWithParams(params, andFeature: feature, andStage: stage, andTags: tags)
items.append(itemProvider)
// Pass this in the NSArray of ActivityItems when initializing a UIActivityViewController
let shareViewController = UIActivityViewController(activityItems: items,
                                                   applicationActivities: nil)
// Present the share sheet
self.navigationController?.presentViewController(shareViewController,
                                                 animated: true,
                                                 completion: nil)
{% endhighlight %}
{% endtab %}
{% endtabs %}

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}

We've realized that Android had some very poor offerings for native share sheet functionality, so we built our own and bundled it into the core SDK. This share sheet it customizable and will automatically generate a link when the user selects a channel to share to.

{% image src='/img/ingredients/sdk_links/android_share_sheet.png' half center alt='ios share sheet' %}

Here's how to implement it:

{% highlight java %}
JSONObject obj = new JSONObject();
try {
	obj.put("product_id", "1234");
	obj.put("product_name", "Red Shoes");
	obj.put("$og_title", "Red Shoes $5");
	obj.put("$og_description", "Check out these awesome red shoes! Only $5.");
	obj.put("$og_image_url", "https://mysite.com/redshoes.png");
} catch (JSONException ex) {
	ex.printStackTrace();
}

new Branch.ShareLinkBuilder(MainActivity.this, obj)
	.addPreferredSharingOption(SharingHelper.SHARE_WITH.FACEBOOK)
	.addPreferredSharingOption(SharingHelper.SHARE_WITH.EMAIL)
	.addPreferredSharingOption(SharingHelper.SHARE_WITH.MESSAGE)
	.addPreferredSharingOption(SharingHelper.SHARE_WITH.TWITTER)
	.setMessage("Check out these shoes!")
	.setStage("post_purchase")
	.setFeature("share")
	.addTag("version_213")
	.setDefaultURL("https://play.google.com/store/apps/details?id=com.ecommerce")
	.setCallback(new Branch.BranchLinkShareListener() {
		@Override
		public void onLinkShareResponse(String sharedLink, String sharedChannel, BranchError error) {
			if (error != null) {
				Log.i("BranchTestBed", "onLinkShareResponse... " + sharedLink + " " + sharedChannel + " " + error.getMessage());
			} else {
				Log.i("BranchTestBed", "onLinkShareResponse... " + sharedLink + " " + sharedChannel);
			}
		}

		@Override
		public void onChannelSelected(String channelName) {
			Log.i("BranchTestBed", "onChannelSelected... " + channelName);
		}
	})
	.shareLink();
{% endhighlight %}

{% endif %}
<!--- /Android -->
