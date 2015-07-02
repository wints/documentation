{% if page.android %}
#### Alternatives to Application subclass

Starting from Branch SDK version 1.5.7, there is no need for initialising and closing session with the new _automatic session management_. Automatic session management can work only with API level 14 and above, so make sure that your `minSdkVersion` is 14 or above.

{% highlight xml %}
<uses-sdk android:minSdkVersion="14"/>
{% endhighlight %}

Once you do any of the below, there is no need to close or init sessions in your Activities. Branch SDK will do all that for you. You can get your Branch instance at any time as follows.

Branch SDK can do session management for you if you do one of the following:

{% tabs %}
{% tab common %}
If you are not creating or using an Application class throughout your project, all you need to do is declare `BranchApp` as your application class in your manifest.

{% highlight xml %}
 <application
    android:name="io.branch.referral.BranchApp">
{% endhighlight %}
{% endtab %}
{% tab uncommon %}
If you already have an Application class then extend your application class with `BranchApp`.

{% highlight java %}
public class YourApplication extends BranchApp
{% endhighlight %}
{% endtab %}
{% tab rare %}
If you already have an Application class and don\'t want to extend it from `BranchApp` then create a Branch instance in your Application\'s `onCreate()` method.

{% highlight java %}
public void onCreate() {
    super.onCreate();
    Branch.getInstance(this);
}
{% endhighlight %}
{% endtab %}
{% endtabs %}
{% endif %}