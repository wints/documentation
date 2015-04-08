### Mobile Web Smart Banner

Branch offers a highly customizable smart banner that works across platforms. Android and iOS users can install or open the app from one banner. Users can even be deep linked to content! Desktop users can choose to text themselves the app. 

After configuring your app on the [Dashboard](https://dashboard.branch.io), you can simply add the following code somewhere inside the `<head> </head>` tags on your website.

```
<script type="text/javascript">
(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-v1.3.3.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"init data setIdentity logout track link sendSMS referrals credits redeem banner".split(" "),0);

branch.init('103886782818419002', function(err, data) {
    // callback to handle err or data
    var bannerOptions = {
        icon: 'http://icons.iconarchive.com/icons/wineass/ios7-redesign/512/Appstore-icon.png',
        title: 'Branch Demo App',
        description: 'The Branch demo app!',
        openAppButtonText: 'Open',         // Text to show on button if the user has the app installed
        downloadAppButtonText: 'Download', // Text to show on button if the user does not have the app installed
        iframe: true,                      // Show banner in an iframe, recomended to isolate Branch banner CSS
        showiOS: true,                     // Should the banner be shown on iOS devices?
        showAndroid: true,                 // Should the banner be shown on Android devices?
        showDesktop: true,                 // Should the banner be shown on desktop devices?
        disableHide: false,                // Should the user have the ability to hide the banner? (show's X on left side)
        forgetHide: false,                 // Should we remember or forget whether the user hid the banner?
        make_new_link: false               // Should the banner create a new link, even if a link already exists?
    }

    branch.banner(bannerOptions, {
        phone: '9999999999',
        tags: ['tag1', 'tag2'],
        feature: 'dashboard',
        stage: 'new user',
        type: 1,
        data: {
            foo: 'bar',
            '$og_title': 'My App',
            '$og_description': 'My app\'s description.',
            '$og_image_url': 'http://myappwebsite.com/image.png'
        }
    });
});
</script>
```