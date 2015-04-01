---
type: recipe
title: App Content Share with Deeplink
platforms:
- ios
- android
---

# App Content Share with Deeplink

<!--- Configuring the Dashboard-->
{% ingredient configuring_the_dashboard %}

{% override configuring_the_dashboard_header %}{% if page.ios %}Configuring the Dashboard for your iOS app{%endif%}{% if page.android %}Configuring the Dashboard for your Android app{%endif%}{% endoverride %}

{% override configuring_the_dashboard_end_required %}
That's the end of the required setup for the Dashboard! The dashboard is incredibly powerful, so if you want to dive in deeper, definitely check out {% if page.ios %}[Configuring the Dashboard](/ingredients/configuring_the_dashboard/ios/index.html#advanced)'s advanced configurations{%endif%}{% if page.android %}[Configuring the Dashboard](/ingredients/configuring_the_dashboard/android/index.html#advanced)'s advanced configurations{%endif%}.
{% endoverride %}

{% override configuring_the_dashboard_advanced %}{% endoverride %}<!--- Hide advanced -->

{% endingredient %}
<!--- /Configuring the Dashboard-->


<!--- Configuring the Client-->
{% ingredient configuring_the_client %}

{% override configuring_the_client_header %}{% if page.ios %}Configuring your iOS App{%endif%}{% if page.android %}Configuring your Android App{%endif%}{% endoverride %}

{% override configuring_the_client_advanced_header %}{% endoverride %}
{% override configuring_the_client_first_link_programmatically %}{% endoverride %}
{% override configuring_the_client_is_referrable %}{% endoverride %}
{% override configuring_the_client_web_banner %}{% endoverride %}

{% endingredient %}
<!--- /Configuring the Client-->


<!--- Links and Sharing -->
{% ingredient links_and_sharing %}


{% endingredient %}
<!--- /Links and Sharing -->