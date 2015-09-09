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