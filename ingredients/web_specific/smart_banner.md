
{% section header %}### Mobile Web Smart Banner{%endsection%}

Branch offers a highly customizable smart banner that works across platforms. Android and iOS users can install or open the app from one banner. Users can even be deep linked to content! Desktop users can choose to text themselves the app. 

After configuring your app on the [Dashboard](https://dashboard.branch.io), you can simply add the following code somewhere inside the `<head> </head>` tags on your website. Note that the *only* thing you need to do is replace `YOUR-API-KEY` with your API Key inside the init() call.

{% highlight javascript %}
<script type="text/javascript">
(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-v1.3.3.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"init data setIdentity logout track link sendSMS referrals credits redeem banner".split(" "),0);

branch.init('YOUR-API-KEY', function(err, data) {

    var options = {
        icon: 'http://icons.iconarchive.com/icons/wineass/ios7-redesign/512/Appstore-icon.png',
        title: 'Branch Demo App',
        description: 'The Branch demo app!',
        openAppButtonText: 'Open',     
        downloadAppButtonText: 'Download', 
        iframe: true,
        showiOS: true,                     
        showAndroid: true,                 
        showDesktop: true,                 
        disableHide: false,                
        forgetHide: false,                 
        make_new_link: false               
    }

    branch.banner(options, {
        phone: '9999999999',
        type: 1,
        data: {
        }
    });
});
</script>
{% endhighlight %}

We have deprecated the API Key in favor of the Branch Key, but this change is not yet active for the Web SDK. Please grab the API Key from the following location on the [Dashboard](https://dashboard.branch.io/#/settings)

![deprecated API Key](/img/ingredients/web_specific/api_key.png)

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

<!--- TODO: To see a full list of the options that can be toggled, [TODO] [click here](). -->