{%if page.ios%}
### Sharing via the Branch UIActivityItemProvider

{% tabs %}
{% tab objective-c %}
{% highlight objc %}

// Adding text
NSString *shareString = @"Super amazing thing I want to share!";

// Adding an image
UIImage *amazingImage = [UIImage imageNamed:@"Super-Amazing-Image.png"];

// Custom data
NSMutableDictionary *params = [[NSMutableDictionary alloc] init];
[params setObject:@"Joe" forKey:@"user"];
[params setObject:@"https://s3-us-west-1.amazonaws.com/myapp/joes_pic.jpg" forKey:@"profile_pic"];
[params setObject:@"Joe likes long walks on the beach..." forKey:@"description"];
[params setObject:@"Joe's My App Referral" forKey:@"$og_title"];
[params setObject:@"https://s3-us-west-1.amazonaws.com/myapp/joes_pic.jpg" forKey:@"$og_image_url"];
[params setObject:@"Join Joe in My App - it's awesome" forKey:@"$og_description"];
[params setObject:@"http://myapp.com/desktop_splash" forKey:@"$desktop_url"];

NSArray *tags = @[@"tag1", @"tag2"];
NSString *feature = @"invite";
NSString *stage = @"2";

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
let shareString = "Super amazing thing I want to share!"

// Adding an image
items.append(shareString)
if let amazingImage: UIImage = UIImage(named: "Super-Amazing-Image.png") {
    items.append(amazingImage)
}

// Custom data
var params = ["user": "Joe"]
params["profile_pic"] = "https://s3-us-west-1.amazonaws.com/myapp/joes_pic.jpg"
params["description"] = "Joe likes long walks on the beach..."
params["$og_title"] = "Joe's My App Referral"
params["$og_image_url"] = "https://s3-us-west-1.amazonaws.com/myapp/joes_pic.jpg"
params["$og_description"] = "Join Joe in My App - it's awesome"
params["$desktop_url"] = "http://myapp.com/desktop_splash"

let tags = ["tag1", "tag2"]
let feature = "invite"
let stage = "2"

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

![ios share sheet](/img/ingredients/sdk_links/ios_share_sheet.jpg)

{%endif%}
