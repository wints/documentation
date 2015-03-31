---
type: ingredient
title: Configuring the Dashboard
platforms:
- ios
- android
- web
---

<!--- HEADER -->
## {% section configuring_the_dashboard_header %}Configuring the Dashboard{% endsection %}
<!--- /HEADER -->


<!--- REQUIRED -->
{% section configuring_the_dashboard_required %}

<!---    1. App Name -->
{% section configuring_the_dashboard_app_name %}
### 1. App Name

Our dashboard is the starting point for adding apps as well as tracking users of your app. 

To get started, point your browser to [https://dashboard.branch.io/](https://dashboard.branch.io/). If you haven't created an account before, you can signup and get taken through the basic setup right away. If you've signed up already, simply navigate to the [Summary](https://dashboard.branch.io/#) page and click the dropdown button in the top right. Choose "Create new app."

![Dashboard Screenshot Adding App](/img/ingredients/configuring_the_dashboard/configuring_the_dashboard_add_app.png)

You will be prompted to enter a name for your new app. Do so and press "Create."

![Dashboard Screenshot App Name](/img/ingredients/configuring_the_dashboard/configuring_the_dashboard_app_name.png)

<!---       Tip1 -->
{% section configuring_the_dashboard_app_name_tip1 %}
Tip: We recommend keeping production and development versions of your app as completely separate apps.
{% endsection %}
<!---       /Tip1 -->


{% endsection %}
<!---    /1. App Name -->


<!---    2. Web URL -->
{% section configuring_the_dashboard_web_url %}

### 2. Web URL

Next, to configure the Web URL on an existing app, you will need to navigate to the Settings > [http://dashboard.branch.io/#/settings/link](Link Settings) page on the Dashboard. Scroll down to _Default URL_ and enter your website.   

![Dashboard Screenshot Web URL](/img/ingredients/configuring_the_dashboard/configuring_the_dashboard_app_name.png)

This is where we will take users who click a Branch link if we don't know where else to take them. For example, if you don't have an Android app released yet, Android users will be taken to this link.

<!---       Tip2 -->
{% section configuring_the_dashboard_app_name_tip2 %}
Tip: You can customize this fallback URL on a per-platform or even per-link basis. After completing setup, you may want to check out [TODO] [links-and-sharing.VIII-customizing-URL](http://example.com).
{% endsection %}
<!---       /Tip2 -->


{% endsection %}
<!---    /2. Web URL -->


<!---    3. Store or custom URL -->
{% section configuring_the_dashboard_store_or_custom_url %}

{% if page.ios %}### 3. App Store or custom URL{%endif%}
{% if page.android %}### 3. Play Store or custom URL{%endif%}


{% endsection %}
<!---    /3. Store or custom URL -->


<!---    4. URI Scheme -->
{% section configuring_the_dashboard_uri_scheme %}

{% if page.ios %}### 4. URI Scheme{%endif%}
{% if page.android %}### 4. URI Scheme{%endif%}


		
{% endsection %} 
<!---    /4. URI Scheme -->


{% endsection %} 
<!--- /REQUIRED -->


{% section configuring_the_dashboard_optional %} 

## Optional Dashboard Setup








{% endsection %} 
