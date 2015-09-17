---
type: recipe
title: "iOS9 Spotlight Deep Links"
page_title: "Index and track your content in iOS 9 Spotlight"
description: Learn how to list your content in Apple's new Spotlight search.
keywords: Contextual Deep Linking, Deep links, Deeplinks, Deep Linking, Deeplinking, Deferred Deep Linking, Deferred Deeplinking, iOS9, iOS 9, Apple Spotlight Search
hide_platform_selector: true
---

Listing your app content on Apple's new Spotlight search with Branch is easy. Note that this guide will list on both _cloud search_ in addition to _local spotlight search_.

Note that some older devices cannot index content. iPad minis, for example, cannot user CoreSpotlight. The SDK includes a check for these devices and will return an error message if you attempt to index content on them.

## Listing your content

Content can be added to Spotlight search with a single line of code. We'd recommend that you put this on every page that renders a piece of content for your users. This way, a user could rediscover a previous thing that they had viewed.

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
Branch *branch = [Branch getInstance];
[branch createDiscoverableContentWithTitle:@"Kindred"
                               description:@"My app is disrupting apps"
                              thumbnailUrl:[NSURL URLWithString:@"https://s3-us-west-1.amazonaws.com/branchhost/mosaic_og.png"]
                                linkParams:@{@"object_id": @"1234",
                              				 @"deeplink": @"data"}
                         publiclyIndexable:YES];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
let branch: Branch = Branch.getInstance()
branch.createDiscoverableContentWithTitle("Kindred",
                              description: "My app is disrupting apps",
                             thumbnailUrl: NSUrl.init("https://s3-us-west-1.amazonaws.com/branchhost/mosaic_og.png"),
                               linkParams: ["deeplink": "data",
                                            "object_id": "1234"],
                        publiclyIndexable: true)
{% endhighlight %}
{% endtab %}
{% endtabs %}

## Tracking clicks and deep linking

This section assumes that you've already [setup the SDK](/recipes/quickstart_guide). In order to properly receive a click from Spotlight when your app is installed, just let Branch handle th complexity. Parameters associated with the deep link will appear in the **Deep Link Handler** that you registered in initSession.

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
- (BOOL)application:(UIApplication *)application
continueUserActivity:(NSUserActivity *)userActivity
 restorationHandler:(void (^)(NSArray *restorableObjects))restorationHandler {
    BOOL handledByBranch = [[Branch getInstance] continueUserActivity:userActivity];
    
    return handledByBranch;
}
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
func application(application: UIApplication, continueUserActivity: userActivity, restorationHandler: ([AnyObject]!) -> Void) -> Bool {
    // pass the url to the handle deep link call
    Branch.getInstance().continueUserActivity(userActivity);

    return true
}
{% endhighlight %}
{% endtab %}
{% endtabs %}

## Other tips and best practices

### Deep link from Spotlight

What's more delightful than searching for a particular something on your phone, and then clicking it to open the app immediately. You'll need to setup deep linking to allow for this.

1. Add a custom key in your Branch dictionary to deeplink from when click (`picture_id`, `article_id`, etc)
2. Let Branch open the view controller automatically when the key is detected. [**Here's how to set it up.**](/recipes/easy_deep_linking/ios)

### Use deepviews for user acquisition

If the user doesn't have the app installed and finds your content through search, Spotlight will open up the browser. You can show a deepview, which is an automatically-generated, mobile web render of the app content. [**Here's how to set it up.**](/recipes/deepviews/ios)

## Advanced: Further customizations

If the available options are not good enough for you, and you want to do some advanced customizations of the content. You can use our identifier when indexing so that Branch will 

{% highlight objc %}
[branch getSpotlightUrlWithParams:@{@"$og_title": @"My App",
                                    @"$og_description": @"My app is disrupting apps",
                                    @"$og_thumb": @"https://s3-us-west-1.amazonaws.com/branchhost/mosaic_og.png",
                                    @"object_id": @"1234"}
                         callback:^(NSDictionary *params, NSError *error) {
    if (!error) {
        // params will contain @"url" and @"spotlight_identifier"
        // the example below shows where to use them
        
        CSSearchableItemAttributeSet *attributes = [[CSSearchableItemAttributeSet alloc] initWithItemContentType:@"public.content"];
        attributes.identifier = params[@"spotlight_identifer"];
        attributes.relatedUniqueIdentifier = params[@"spotlight_identifer"];
        attributes.contentURL = [NSURL URLWithString:params[@"url"]]; // content url links back to our web content
        attributes.title = @"My awesome content!";
        attributes.contentDescription = @"Note that this property is contentDescription, not description";
        
        // Index via the NSUserActivity strategy
        // Currently (iOS 9 Beta 5) we need a strong reference to this, or it isn't indexed
        NSUserActivity *currentUserActivity = [[NSUserActivity alloc] initWithActivityType:params[@"spotlight_identifer"]];
        currentUserActivity.webpageURL = [NSURL URLWithString:params[@"url"]];
        
        // Index via the CoreSpotlight strategy
        CSSearchableItem *item = [[CSSearchableItem alloc] initWithUniqueIdentifier:params[@"spotlight_identifier"] domainIdentifier:@"branchified_content" attributeSet:attributes];
        [[CSSearchableIndex defaultSearchableIndex] indexSearchableItems:@[ item ] completionHandler:^(NSError *indexError) {
            if (!indexError) {
                NSLog(@"success!");
            }
        }];
    }
}];
{% endhighlight %}

-----

{% ingredient recipe_preview/contact_us %}{%endingredient%}