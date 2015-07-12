---
type: overview
title: How to create links
---

Regardless of how the link gets created, all links behave the same way. Links can be created in the following ways:

* **Mobile SDKs**: every time a user clicks to share or invite another user, it is best practice to create a new link for that action.

* **Web SDK**: you can create links on the fly on your web page that can persist data through an install of your mobile app.

* **HTTP API**: a common use case is to batch-create links customized to each of your users for a specific campaign.

* **String builder**: you can just take link and append deep link parameters

* **Dashboard**: you can manually create custom links that can be tracked and analyzed. Additionally, we support two forms of white-labeling links:
	- using a custom domain name.
	- customizing the URL path, e.g. http://bnc.lt/fall2014discount.