
{% section header %}### Mobile Web Smart Banner{% endsection %}

Branch offers a highly customizable smart banner that works across platforms. Android and iOS users can install or open the app from one banner. Users can even be deep linked to content! Desktop users can choose to text themselves the app.

{% ingredient web_sdk/_initialization %}
{% override post_init %}branch.banner({
    icon: 'http://icons.iconarchive.com/icons/wineass/ios7-redesign/512/Appstore-icon.png',
    title: 'Branch Demo App',
    description: 'The Branch demo app!'
});
{% endoverride %}
{% endingredient %}


#### Smart Banner Options

There are a lot of options here, but don't be scared. Specifying them is optional, although you'll probably want to do so to tailor it to your needs.

{% highlight javascript %}

var options = {
    icon: 'http://icons.iconarchive.com/icons/wineass/ios7-redesign/512/Appstore-icon.png',
    title: 'Branch Demo App',
    description: 'The Branch demo app!',

    // Text to show on button if the user has the app installed
    openAppButtonText: 'Open',

    // Text to show on button if the user does not have the app installed
    downloadAppButtonText: 'Download',

    // Show banner in an iframe, recomended to isolate Branch banner CSS
    iframe: true,

    // Should the banner be shown on iOS devices?
    showiOS: true,

    // Should the banner be shown on Android devices?
    showAndroid: true,

    // Should the banner be shown on desktop devices?
    showDesktop: true,

    // Should the user have the ability to hide the banner? (show's X on left side)
    disableHide: false,

    // Should we remember or forget whether the user hid the banner?
    forgetHide: false,

    // Should the banner create a new link, even if a link already exists?
    make_new_link: false
}
{% endhighlight %}
