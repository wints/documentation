---
type: overview
title: How Branch links work
---

Our smart links detect the platform a user clicks from and takes them to the appropriate content. You don’t need separate links for iOS, Android or Desktop. You just tell us where the user needs to go and we make the routing happen, ensuring that your users convert.
[See the complete diagram here.](/img/overview/how-links-work-diagram.jpg) 

{% image src='/img/overview/how-links-work-1.png' alt='1' %}


## Creating the links

{% image src='/img/overview/how-links-work-2.jpg' half right alt='2' %}

Regardless of how the link gets created, all links behave the same way. Links can be created in the following ways:

* **Mobile SDKs**: every time a user clicks to share or invite another user, it is best practice to create a new link for that action.

* **Web SDK**: you can create links on the fly on your web page that can persist data through an install of your mobile app.

* **HTTP API**: a common use case is to batch-create links customized to each of your users for a specific campaign.

* **String builder**: you can just take link and append deep link parameters

* **Dashboard**: you can manually create custom links that can be tracked and analyzed. Additionally, we support two forms of white-labeling links:
	- using a custom domain name.
	- customizing the URL path, e.g. http://bnc.lt/fall2014discount.

## Bundling metadata with the link

In order to actually pass data “through” install, you must specify the data you wish to be present after install when creating the link. We allow you to specify a free-form key-value dictionary of data (though certain keys carry special meanings that affect the behavior of the link - read on for more about that).

Examples of data often present in the dictionary includes (depending on use case):

- referring user IDs
- channel
- the place in the app where the link was shared
- the content you want the user taken to
- amount of credits you want to award them

## Desktop behavior

{% image src='/img/overview/how-links-work-3.jpg' half left alt='3' %}

When a user clicks on a desktop, by default, we present them with a page that allows them to resend themselves the link via SMS. Alternately, you can send desktop users to another web page by specifying a value for the key “$desktop_url” when creating a link. In that case, we will redirect users to the value for that key in the link’s data dictionary.

If you want your users to retain the option of sending themselves the link they clicked via SMS, you can still use our [app download banner](/recipes/app_download_banner/ios/) on your web page that shows an app banner with an SMS input, or you can use more advanced Web SDK JavaScript with your own HTML widget. If the user was routed to that Web SDK-enabled site from one of our links, we remember that referring link data and continue the link flow.

## iOS or Android clicks

When a user clicks a Branch link on a mobile device, there are three places they can be redirected to:

- deeplink into the app
- deeplink into the app store
- a custom/web destination (“$ios_url” or “$android_url”)

{% image src='/img/overview/how-links-work-4.jpg' alt='4' %}

## Getting the parameters after install or open

Once the user has installed or opened your app, you can use the Branch SDK to retrieve the data dictionary associated with the link the user came from. You can use these parameters to route the user to the appropriate place within the app or for other analytics or messaging.

