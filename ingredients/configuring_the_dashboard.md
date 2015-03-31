---
type: ingredient
title: Dashboard Setup
---

{% section configuring_the_dashboard_header %}
# Configuring the Dashboard
{% endsection %}

{% section required %}

	{% section configuring_the_dashboard_app_name %}
## 1. App Name
	{% endsection %}

	{% section configuring_the_dashboard_web_url %}
## 2. Web URL
	{% endsection %}

	{% section configuring_the_dashboard_store_or_custom_url %}
		{% if page.ios %}
## 3. App Store or custom URL
		{%endif%}

		{% if page.android %}
## 3. Play Store or custom URL
		{%endif%}
	{% endsection %}

	{% section configuring_the_dashboard_uri_scheme %}
		{% if page.ios %}
## 4. URI Scheme
		{%endif%}

		{% if page.android %}
## 4. URL Scheme
		{%endif%}
	{% endsection %}

{% endsection %}


{% section optional %} 

# Optional Dashboard Setup








{% endsection %} 







### Links

blah these are what links are

{% section link_deeplinkpath %}

#### Deeplink path!

{% section link_deeplinkpath_explanation %}

Deeplink path is loooooong and complex.

{% endsection %}


You use it like this:

```
var a = b;
c = d;
```

{% endsection %}

ingg platform: {{ page.platform }}

