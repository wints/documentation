---
type: recipe
title: App Content Share with Deeplink
platforms:
- ios
- android
---

# App Content Share with Deeplink

<!--- Configuring the Dashboard-->
##{% if page.ios %}Configuring the Dashboard for your iOS app{%endif%}{% if page.android %}Configuring the Dashboard for your Android app{%endif%}
{% ingredient configuring_the_dashboard_app_name %}{% endingredient %}
{% ingredient configuring_the_dashboard_web_url %}{% endingredient %}
{% ingredient configuring_the_dashboard_store_or_custom_url %}{% endingredient %}
{% ingredient configuring_the_dashboard_uri_scheme %}{% endingredient %}


That's the end of the required setup for the Dashboard! The dashboard is incredibly powerful, so if you want to dive in deeper, definitely check out {% if page.ios %}[TODO] [Configuring the Dashboard](/ingredients/configuring_the_dashboard/ios/index.html#advanced)'s advanced configurations{%endif%}{% if page.android %}[TODO] [Configuring the Dashboard](/ingredients/configuring_the_dashboard/android/index.html#advanced)'s advanced configurations{%endif%}.
<!--- /Configuring the Dashboard-->


<!--- Configuring the Client-->
##{% if page.ios %}Configuring your iOS app{%endif%}{% if page.android %}Configuring your Android app{%endif%}
{% ingredient configuring_the_client_installing_the_sdk %}{% endingredient %}
{% ingredient configuring_the_client_branch_key %}{% endingredient %}
{% ingredient configuring_the_client_uri_scheme %}{% endingredient %}
{% ingredient configuring_the_client_init_session %}{% endingredient %}
{% ingredient configuring_the_client_handle_deep_link %}{% endingredient %}
{% ingredient configuring_the_client_identify_and_logout %}
	{% override configuring_the_client_identify_and_logout_pre_explanation %}
If you want to know who is sharing your content, whether for internal purposes (i.e. analytics) or for customizing the experience of a user receiving a referral, you'll want to identify your users.
	{% endoverride %}
{% endingredient %}
<!--- /Configuring the Client-->


