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


{% override configuring_the_dashboard_optional %}{% endoverride %}<!--- Hide optional -->

{% endingredient %}
<!--- /Configuring the Dashboard-->


<!--- Configuring the Client-->
{% ingredient configuring_the_client %}

{% override configuring_the_client_header %}{% if page.ios %}Configuring your iOS App{%endif%}{% if page.android %}Configuring your Android App{%endif%}{% endoverride %}


{% override configuring_the_client_optional %}{% endoverride %}<!--- Hide optional -->

{% endingredient %}
<!--- /Configuring the Client-->


