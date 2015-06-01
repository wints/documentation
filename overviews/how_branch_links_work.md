---
type: overview
title: How Branch Links Work
---

As you are implementing our links, here is a quick, step-by-step, guide on how the links work, for each use case and each device. [See the complete diagram here.](/img/overview/how-links-work-diagram.jpg) 

{% image src='/img/overview/how-links-work-1.png' alt='1' %}


## Creating the links

{% image src='/img/overview/how-links-work-2.jpg' half right alt='2' %}

Regardless of how the link gets created, all links behave the same way. Links can be created in the following ways:

* **Mobile SDKs**: every time a user clicks to share or invite another user, it is best practice to create a new link for that action. That way, you can customize the post-install experience for the next generation user to the exact context of the share (whether it’s a piece of content, the sharer’s face, or other customizations).

* **Web SDK**: similarly, you can create links on the fly on your web page that can persist data through an install of your mobile app. You can use this to build a cross-platform referral program.

* **HTTP API**: a common use case is to batch-create links customized to each of your users for a specific campaign.

* **Dashboard**: you can manually create custom links that can be tracked and analyzed. Additionally, we support two forms of white-labeling links:
	- using a custom domain name.
	- customizing the URL path, e.g. http://bnc.lt/fall2014discount.

Our smart links detect the platform a user clicks from and takes them to the appropriate content. You don’t need separate links for iOS, Android or Desktop. You just tell us where the user needs to go and we make the routing happen, ensuring that your users convert at the highest possible level.


## Bundling data with the link

In order to actually pass data “through” install, you must specify the data you wish to be present after install when creating the link. We allow you to specify a free-form key-value dictionary of data (though certain keys carry special meanings that affect the behavior of the link - read on for more about that).

Examples of data often present in the dictionary includes (depending on use case):
- referring user IDs
- channel
- the place in the app where the link was shared
- the content you want the user taken to
- amount of credits you want to award them

We do not limit the amount of data that can be stored in the link. We store it all securely and anonymously on our servers and make it available to you right after a user has installed.

You can also use our tagging system to tag links across a number of different parameters for fine-grained analytics. You can tag them by: feature within the app (e.g. “referral”, “sharing”, etc.), channel on which they are shared (e.g. “twitter”, “facebook”, etc.), and place in the app (e.g. “after_level_10”, “before_signup”, etc.). That way, our dashboard can answer questions like “How did conversions of users coming from Twitter shares after purchase compare to those before purchase?”


## Desktop behavior

{% image src='/img/overview/how-links-work-3.jpg' half left alt='3' %}

When a user clicks on a desktop, by default, we present them with a page that allows them to resend themselves the link via SMS. We have a default design, but we can help you customize it if you would like (drop us a line for details).

Alternately, you can send desktop users to another web page by specifying a value for the key “$desktop_url” when creating a link. In that case, we will redirect users to the value for that key in the link’s data dictionary.

If you want your users to retain the option of sending themselves the link they clicked via SMS, you can still use our [app download banner](/recipes/app_download_banner/ios/) on your web page that shows an app banner with an SMS input, or you can use more advanced Web SDK JavaScript with your own HTML widget. If the user was routed to that Web SDK-enabled site from one of our links, we remember that referring link data and continue the link flow.


## iOS or Android clicks

When a user clicks a Branch link on a mobile device, there are three places they can be redirected to: (i) deeplink into the app, (ii) deeplink into the app store (retaining the data post-install), or (iii) a custom/web destination.

- The best user experience is possible when the user can be deeplinked straight into the app. However, this is only possible under a strict set of conditions: the first time a user clicks a Branch link, and subsequently opens the app, we remember, via a combination of cookies and device fingerprints, that the user has the app
- The Branch service needs to know your app’s deeplink URI scheme – this can be set on the dashboard
- The user must still have the app installed

Note that if the user clicks a direct deeplink and doesn’t have the corresponding app installed, the operating system will throw an error to the user. To avoid this terrible experience, we need to be sure to only direct deeplink when we are certain the user has the app (and even so, in the case the user has uninstalled the app, we may try to direct deeplink; in this case, even though the user may be presented with a brief error message, we take them to the App Store immediately to re-download the app).

Finally, the behavior around what to do when the user does not have the app (or at least, we are unsure whether or not the user has the app) can be customized: you can set a custom “$ios_url” or “$android_url” in the link’s data dictionary, and we will route the user to the that URL instead when they don’t have the app. This is often used for apps that are hosted outside of the app stores.

{% image src='/img/overview/how-links-work-4.jpg' alt='4' %}


## Getting the parameters after install or open

Once the user has installed or opened your app, you can use the Branch SDK to retrieve the data dictionary associated with the link the user came from. You can use these parameters to route the user to the appropriate place within the app or for other analytics or messaging.

Below is the whole diagram of how our links work, from start to finish. For every possible scenario, we make sure that ultimately you get the data you bundled with the link right when the app is opened so 100% of the time you take the user to the right spot in the app.

{% image src='/img/overview/how-links-work-diagram.jpg' alt='2' %}

