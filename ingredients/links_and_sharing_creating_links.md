---
type: ingredient
title: Links and Sharing - Creating Links
platforms:
- ios
- android
- web
---

### Creating Links

Links are the foundation to everything Branch offers. Branch's links offer the ability to deep link directly to content, to pass data through the install process, and to tell where users are coming from. With Branch links, you can tell whether a user installed your app thanks to a Facebook ad, an email campaign or a personal invite from a friend. 

On the world wide web, URLs allow users to go straight to content rather than wading through an entire site. You can send your friend a link to a specific radio station -- [http://www.iheart.com/live/wild-949-305/](http://www.iheart.com/live/wild-949-305/) -- and other users will be taken straight to that station. Branch links work the same way. The link [https://bnc.lt/l/3mN6Lak-2u](https://bnc.lt/l/3mN6Lak-2u) will open the Wild 94.9 station *even if you didn't have the app installed previously.* 

Here's how to create your own Branch Links.

<!--- iOS -->
{% if page.ios %}

<!---    iOS explanation -->
{% section links_and_sharing_creating_links_ios_explanation %}
On iOS, it's a rather simple method call.
{% endsection %}
<!---    /iOS explanation -->

<!---    iOS code -->
{% section SECTION_INGREDIENT_ios_code %}
```objc
    [[Branch getInstance] getShortURLWithParams:@{@"foo": @"bar"} andCallback:^(NSString *url, NSError *error) {
        if (!error) NSLog(@"got my Branch link to share: %@", url);
    }];
```
{% endsection %}
<!---    /iOS code -->

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}

<!---    Android explanation -->
{% section SECTION_INGREDIENT_android_explanation %}
EXPLANATION HERE
{% endsection %}
<!---    /Android explanation -->

<!---    Android code -->
{% section SECTION_INGREDIENT_android_code %}
```java
```
{% endsection %}
<!---    /Android code -->

{% endif %}
<!--- /Android -->
