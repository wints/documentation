---
type: recipe
title: App Content Share with Deeplink
platforms:
- ios
- android
---

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
{% ingredient dashboard_setup/uri_scheme %}
	{%override client_uri %}For more details on finding/setting your URI scheme in the client, see the section below on [setting the client app's URI scheme](/recipes/app_content_share_with_deeplink/{{page.platform}}/#uri-scheme-1).{%endoverride%}
{% endingredient %}
{% ingredient dashboard_setup/end_required %}{% endingredient %}
<!--- /Configuring the Dashboard-->


## Configuring your {{ page.platform_formatted }} app
{% ingredient sdk_setup/installing_the_sdk %}{% endingredient %}
{% ingredient sdk_setup/branch_key %}{% endingredient %}
{% ingredient sdk_setup/uri_scheme %}
  {%override dashboard_uri %}For more info on setting up a URI scheme on the Dashboard, check out the [section above](/recipes/app_content_share_with_deeplink/{{page.platform}}/#uri-scheme).{%endoverride%}
{% endingredient %}
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

  {% override example_code %}{% if page.ios %}@{@"pictureId": @"1234", @"referringUsername": @"James"}{% endif %}{% if page.android %}JSONObject obj = new JSONObject(); 
try {
  obj.put("pictureId", "1234");
  obj.put("referringUsername", "James");
  catch (JSONException e) {}{% endif %}{% endoverride %}
{% endingredient %}
{% ingredient sdk_links/sharing_teaser %}{% endingredient %}
<!--- /Links and Sharing-->

## Routing

{% ingredient sdk_routing/routing %}{% endingredient %}
<!--- /Routing to Content-->

## Conclusion

That's it! After integrating the SDK into your app, it boils down to [generating links](/recipes/app_content_share_with_deeplink/{{page.platform}}/#generating-links) and [routing](/recipes/app_content_share_with_deeplink/{{page.platform}}/#routing), as described above.

{% ingredient recipe_preview/recipe_end_intro %}{%endingredient%}
{% ingredient recipe_preview/incentivized_referral_program %}{%endingredient%}
{% ingredient recipe_preview/personalized_invite_system %}{%endingredient%}
{% ingredient recipe_preview/influencers %}{%endingredient%}
{% ingredient recipe_preview/channel_tags %}{%endingredient%}
{% ingredient recipe_preview/contact_us %}{%endingredient%}