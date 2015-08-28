{% if page.android %}

{% tabs %}

{% tab method-1 %}

If you are not creating or using an Application class throughout your project, all you need to do is declare `BranchApp` as your application class in your manifest.

{% highlight xml %}
 <application
    android:name="io.branch.referral.BranchApp">
{% endhighlight %}
{% endtab %}

{% tab method-2 %}
If you already have an Application class then extend your application class with `BranchApp`.

{% highlight java %}
public class YourApplication extends BranchApp
{% endhighlight %}

You will still need to declare `YourApplication` inside your `AndroidManifest.xml`.

{% highlight xml %}
 <application
    android:name="io.branch.referral.YourApplication">
{% endhighlight %}

{% endtab %}

{% tab method-3 %}

If you already have an Application class and **do not** want to extend from `BranchApp` then create a Branch instance in your `Application#onCreate()` method.

{% highlight java %}
public void onCreate() {
    super.onCreate();
    Branch.getAutoInstance(this);
}
{% endhighlight %}

You will still need to declare `YourApplication` inside your `AndroidManifest.xml`.

{% highlight xml %}
 <application
    android:name="io.branch.referral.YourApplication">
{% endhighlight %}
{% endtab %}

{% endtabs %}

{% endif %}