---
type: recipe
title: Build something cool
platforms:
- ios
- android
- web
---

There are two types of links you can use:

{% ingredient link %}

	{% override link_deeplinkpath %}{% endoverride %}

{% endingredient %}


	---------

Or like this:

{% ingredient link %}

	{% override link_deeplinkpath_explanation %}

		This is a simple explanation...

	{% endoverride %}

{% endingredient %}

platform: {{ page.platform }}

{% if page.ios %}
ios-specific
{% endif %}

{% if page.android %}
android-specific
{% endif %}



