---
type: recipe
title: App Content Share with Deeplink
platforms:
- ios
- android
---

{% ingredient configuring_the_dashboard %}

	{% override configuring_the_dashboard_header %}

{% if page.ios %}# Configuring the Dashboard for your iOS app{%endif%}
{% if page.android %}# Configuring the Dashboard for your Android app{%endif%}
	
	{% endoverride %}

{% endingredient %}

platform: {{ page.platform }}
