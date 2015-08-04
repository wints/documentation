{% if page.android %}
#### Support for 100% Matching

Branch can leverage the install referrer broadcast to guarantee 100% accuracy of deeplinking through install when Google Play delivers it in time. All you need to do is register Branch for the install referrer broadcast in the **AndroidManifest.xml**.

{% tabs %}
{% tab common %}
{% highlight xml %}
<receiver android:name="io.branch.referral.InstallListener" android:exported="true">
	<intent-filter>
		<action android:name="com.android.vending.INSTALL_REFERRER" />
	<intent-filter>
</receiver>
{% endhighlight %}
{% endtab %}
{% tab uncommon %}
{% highlight xml %}
<receiver android:name="com.myapp.CustomInstallListener" android:exported="true">
	<intent-filter>
		<action android:name="com.android.vending.INSTALL_REFERRER" />
	</intent-filter>
</receiver>
{% endhighlight %}

Then create an instance of `io.branch.referral.InstallListener` in `onReceive` and call this:

{% highlight java %}
InstallListener listener = new InstallListener();
listener.onReceive(context, intent);
{% endhighlight %}
{% endtab %}
{% endtabs %}

{% endif %}
