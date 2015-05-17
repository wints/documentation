
### Duration

You can also modify the 2 hour default expiration for browser-based digital fingerprints. This can be set for individual links. Look for any methods with the "duration" parameter. This duration should be set in seconds. Two hours = 7200 seconds.

#### On iOS

One of the many methods in the iOS SDK:

{% highlight obj-c %}
- (void)getShortURLWithParams:(NSDictionary *)params
                      andTags:(NSArray *)tags
                   andChannel:(NSString *)channel
                   andFeature:(NSString *)feature
                     andStage:(NSString *)stage
             andMatchDuration:(NSUInteger)duration
                  andCallback:(callbackWithUrl)callback;
{% endhighlight %}

#### On Android

One of the many methods in the Android SDK:

{% highlight java %}
public void getShortUrl(String channel, String feature, String stage, JSONObject params, int duration, BranchLinkCreateListener callback)
{% endhighlight %}

#### Via the API

Any time you request a link via the API, you can insert a 'duration' parameter with the integer value of the fingerprint expiration time you'd like for that link.

#### On the Dashboard

Lastly, you can specify the default timeout duration for all of your links on the Dashboard's [Link Settings](https://dashboard.branch.io/#/settings/link), under the Advanced Settings section.