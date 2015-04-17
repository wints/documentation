---
type: recipe
title: App Content Share + Deeplink
platforms:
- ios
- android
---

# App Content Share with Deeplink

------

Using Branch, your users can share links to content from your app -- and other users can be linked straight to that content!

Imagine your app allows users to create and publish digital photo books. Let's say a user named James just finished creating a photo book with pictures from his adventure to Southeast Asia. He can share a Branch link to Facebook with the photo book's Id embedded in the link. Then when his friends click on these links and download the app, they will go straight to his Southeast Asia adventure photo book!

And you aren't even limited to linking to content. In the example above:

* you can link to James' profile by attaching a userId to the link. 
* you can embed a promo code so that any of James' friends who click the link automatically get $10 off any books that they create and then print. 
* you can show a custom splash screen when they first open the app, saying "Welcome to Photo Book App! James is glad you're here!"

The possibilities extend far beyond this, but we wanted to give you some ideas to get started.


## Configuring the Dashboard for your {{ page.platform_formatted }} app
{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/web_url %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}
{% ingredient dashboard_setup/uri_scheme %}{% endingredient %}

That's the end of the required setup for the Dashboard! The dashboard is incredibly powerful, so if you want to dive in deeper, definitely check out [Configuring the Dashboard](/domains/configuring_the_dashboard/{{page.platform}}/#additional-options)'s additional options.
<!--- /Configuring the Dashboard-->


## Configuring your {{ page.platform_formatted }} app
{% ingredient sdk_setup/installing_the_sdk %}{% endingredient %}
{% ingredient sdk_setup/branch_key %}{% endingredient %}
{% ingredient sdk_setup/uri_scheme %}{% endingredient %}
{% ingredient sdk_setup/init_session %}{% endingredient %}
{% ingredient sdk_setup/handle_deep_link %}{% endingredient %}
{% ingredient sdk_setup/identify_and_logout %}
  {% override header %}###Identifying Your Users (Optional but recommended){% endoverride %}
  {% override pre_explanation %}
  If you want to know who is sharing your content, whether for internal purposes (i.e. analytics) or for customizing the experience of a user receiving a referral, you'll want to identify your users.
  {% endoverride %}
{% endingredient %}
<!--- /Configuring the Client-->


## Generating Links

{% ingredient sdk_links/custom_data %}
  {% override example_explanation %}
  Store data about the content shared (and, optionally, the sharing user) in the data dictionary. Attaching information is as simple as including a dictionary at link creation time. If, for example, James is sharing a picture with Id `1234`, your code could do the following:
  {% endoverride %}

  {% override example_code %}@{@"pictureId": @"1234", @"referringUsername": @"James"}{% endoverride %}
{% endingredient %}
{% ingredient sdk_links/sharing_teaser %}{% endingredient %}
<!--- /Links and Sharing-->

## Routing

{% ingredient sdk_routing/routing %}{% endingredient %}
<!--- /Routing to Content-->

## Conclusion

That's it! After integrating the SDK into your app, it boils down to [generating links](http://localhost:4000/recipes/app_content_share_with_deeplink/{{page.platform}}/#generating-links) and [routing](http://localhost:4000/recipes/app_content_share_with_deeplink/{{page.platform}}/#routing), as described above.

There is so much more you can do with Branch! You can:

* Create an [incentivized referral program](recipes/incentivized_referral_program/{{page.platform}}/) where you reward users based on the installs or engagement they generate
* [Personalize the initial welcome screen](recipes/incentivized_referral_program/{{page.platform}}/) for users who sign up thanks to other users
* See a list of your influencers whose shared content is driving the most installs [TODO: LIST DOMAIN AND LINK!]
* [Specify the channel](/domains/links_and_sharing/{{page.platform}}/#specifying-channel) (Facebook, Email, etc.) or [tag content](/domains/links_and_sharing/{{page.platform}}/#adding-tags) as it is being shared -- then you can see a breakdown of installs by tag on the Dashboard

And as always, [contact us](mailto:support@branchmetrics.io) if you have questions!
