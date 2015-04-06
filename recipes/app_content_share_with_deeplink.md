---
type: recipe
title: App Content Share with Deeplink
platforms:
- ios
- android
---

# App Content Share with Deeplink

------

## Configuring the Dashboard for your {{ page.platform_formatted }} app
{% ingredient dashboard_setup/app_name %}{% endingredient %}
{% ingredient dashboard_setup/web_url %}{% endingredient %}
{% ingredient dashboard_setup/store_or_custom_url %}{% endingredient %}
{% ingredient dashboard_setup/uri_scheme %}{% endingredient %}

That's the end of the required setup for the Dashboard! The dashboard is incredibly powerful, so if you want to dive in deeper, definitely check out [TODO] [Configuring the Dashboard](/ingredients/configuring_the_dashboard/{{ page.platform }}/index.html#advanced)'s advanced configurations.
<!--- /Configuring the Dashboard-->


## Configuring your {{ page.platform_formatted }} app
{% ingredient sdk_setup/installing_the_sdk %}{% endingredient %}
{% ingredient sdk_setup/branch_key %}{% endingredient %}
{% ingredient sdk_setup/uri_scheme %}{% endingredient %}
{% ingredient sdk_setup/init_session %}{% endingredient %}
{% ingredient sdk_setup/handle_deep_link %}{% endingredient %}
{% ingredient sdk_setup/identify_and_logout %}
	{% override configuring_the_client_identify_and_logout_pre_explanation %}
		If you want to know who is sharing your content, whether for internal purposes (i.e. analytics) or for customizing the experience of a user receiving a referral, you'll want to identify your users.{% endoverride %}
	{% override configuring_the_client_identify_and_logout_header %}###Identifying Your Users (Optional but recommended){% endoverride %}
{% endingredient %}
<!--- /Configuring the Client-->


## Generating Links

{% ingredient sdk_links/custom_data %}
	{% override sdk_links_custom_data_example_explanation %}
		Store data about the content shared (and, optionally, the sharing user) in the data dictionary. Attaching information is as simple as including a dictionary at link creation time. If, for example, James is sharing a picture with Id `1234`, your code could do the following:{% endoverride %}

	{% override sdk_links_custom_data_example_code %}@{@"pictureId": @"1234", @"referringUsername": @"James"}{% endoverride %}
{% endingredient %}
{% ingredient sdk_links/sharing_teaser %}{% endingredient %}
<!--- /Links and Sharing-->

## Routing

{% ingredient sdk_routing/routing %}{% endingredient %}
<!--- /Routing to Content-->

## Conclusion

That's it! After integrating the SDK into your app, it boils down to [generating links](http://localhost:4000/recipes/app_content_share_with_deeplink/{{page.platform}}/#generating-links) and [routing](http://localhost:4000/recipes/app_content_share_with_deeplink/{{page.platform}}/#routing), as described above.

[TODO] TAKE DEEPER