
{% section header %}### Mobile Web Smart Banner{% endsection %}

{% image src='/img/ingredients/web_sdk/banner.png' half center alt='Facebook block' %}

{% protip title="This just works!" %}
This short snippet of code below is enough to add a web banner to both your desktop and mobile web pages! Of course, you'll want to configure it, so check out both the **Smart Banner Options** and **Link Options** below.
{% endprotip %}

Add the following code somewhere inside the `<head> </head>` tags on your website. Be sure to replace `YOUR-BRANCH-KEY` with your Branch Key inside the `init()` call. You can find your Branch Key on the Dashboard's [Settings page](https://dashboard.branch.io/#/settings).

{% highlight html %}
<script type="text/javascript">
{% ingredient web_sdk/_initialization %}{% endingredient %}
branch.banner({
    icon: 'http://icons.iconarchive.com/icons/wineass/ios7-redesign/512/Appstore-icon.png',
    title: 'Branch Demo App',
    description: 'The Branch demo app!'
}, {});
</script>
{% endhighlight %}

That's all you need to add the smart banner to your website! The rest of this page covers advanced options.

#### Closing the App Banner Programmatically

The App Banner includes a close button the user can click, but you may want to close the banner with a timeout, or via some other user interaction with your web app. In this case, closing the banner is very simple by calling `Branch.closeBanner()`.

```js
branch.closeBanner();
```

#### Smart Banner Options, Link Options

There are a lot of options here, but don't be scared. Specifying them is optional, although you'll probably want to do so to tailor it to your needs.

{% highlight javascript %}

branch.banner({
    icon: 'http://icons.iconarchive.com/icons/wineass/ios7-redesign/512/Appstore-icon.png',
    title: 'Branch Demo App',
    description: 'The Branch demo app!',
    openAppButtonText: 'Open',              // Text to show on button if the user has the app installed
    downloadAppButtonText: 'Download',      // Text to show on button if the user does not have the app installed
    sendLinkText: 'Send Link',              // Text to show on desktop button to allow users to text themselves the app
    phonePreviewText: '+44 9999-9999',      // The default phone placeholder is a US format number, localize the placeholder number with a custom placeholder with this option
    showiOS: true,                          // Should the banner be shown on iOS devices?
    showAndroid: true,                      // Should the banner be shown on Android devices?
    showDesktop: true,                      // Should the banner be shown on desktop devices?
    iframe: true,                           // Show banner in an iframe, recomended to isolate Branch banner CSS
    disableHide: false,                     // Should the user have the ability to hide the banner? (show's X on left side)
    forgetHide: false,                      // Should we show the banner after the user closes it? Can be set to true, or an integer to show again after X days
    position: 'top',                        // Sets the position of the banner, options are: 'top' or 'bottom', and the default is 'top'
    mobileSticky: false,                    // Determines whether the mobile banner will be set `position: fixed;` (sticky) or `position: absolute;`, defaults to false *this property only applies when the banner position is 'top'
    desktopSticky: true,                    // Determines whether the desktop banner will be set `position: fixed;` (sticky) or `position: absolute;`, defaults to true *this property only applies when the banner position is 'top'
    customCSS: '.title { color: #F00; }',   // Add your own custom styles to the banner that load last, and are gauranteed to take precedence, even if you leave the banner in an iframe
    make_new_link: false                    // Should the banner create a new link, even if a link already exists?
}, {
    tags: ['version12', 'trial-b'],
    feature: 'smart_banner',
    stage: 'shoe_page'
    data: {
        '$deeplink_path': 'content/page/12354',
        deeplink: 'data',
        username: 'Alex'
    }
});
{% endhighlight %}





