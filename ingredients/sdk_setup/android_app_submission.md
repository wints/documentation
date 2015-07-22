
## Submitting to the Play Store

By default, Branch only collects the Android [hardware id](http://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID). If you'd like Branch to collect [Google Advertising ID](https://developer.android.com/google/play-services/id.html) for advertising or tracking purposes, you must do a little extra work. Basically, you need to add Google Play Services to your app prior to release.

Google has provided an instructional section on [their site](https://developer.android.com/google/play-services/id.html), which is a little obtuse, so we've tried to simplify it for you.

### Steps to collect Google AID

1. Make sure you have downloaded Google Play Services from the Android SDK Manager. This is usually at the very bottom listed as "Google Play services".

2. Add in the Google Play service libproject or jar to your app project. You can find it in __yoursdkfolder/sdk/extras/google/google_play_services/__

3. Add the following line in your proguard settings

{% highlight xml %}
-keep class com.google.android.gms.ads.identifier.** { *; }
{% endhighlight %}

4. Branch will handle the rest!