---
type: recipe
title: App Content Share with Deeplink
platforms:
- ios
- android
---

{% ingredient configuring_the_dashboard %}

	{% override %}

		{% if page.ios %}
# Configuring the Dashboard for your iOS app
		{%endif%}

		{% if page.ios %}
# Configuring the Dashboard for your Android app
		{%endif%}
	{% endoverride %}

{% endingredient %}

platform: {{ page.platform }}
