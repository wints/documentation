---
type: ingredient
title: Configuring the Client
platforms:
- ios
- android
- web
---

<!--- HEADER -->
## {% section configuring_the_client_header %}Configuring the Client{% endsection %}
<!--- /HEADER -->


<!--- REQUIRED -->
{% section required %}

<!---    1. Installing the SDK -->
{% section configuring_the_client_installing_the_sdk %}
### 1. Installing the SDK

{% if page.ios %}

{% endif %}

{% if page.android %}

{% endif %}

{% endsection %}
<!---    /1. Installing the SDK -->


<!---    2. Branch Key -->
{% section configuring_the_client_branch_key %}

### 2. Branch Key

{% endsection %}
<!---    /2. Branch Key -->


<!---    3. URI Scheme -->
{% section configuring_the_client_uri_scheme %}

### 3. URI Scheme

{% if page.ios %}#### Here's how to do it on iOS{%endif%}
{% if page.android %}#### Here's how to do it on Android{%endif%}


{% endsection %}
<!---    /3. URI Scheme -->


<!---    4. InitSession  -->
{% section configuring_the_client_init_session %} 

### {% if page.ios %}4. InitSession{%endif%}{% if page.android %}4. InitSession and CloseSession{%endif%}

		
{% endsection %} 
<!---    /4. InitSession -->


<!---    5. Handle Deep Link  -->
{% section configuring_the_client_handle_deep_link %}

### 5. HandleDeepLink

{% if page.ios %}{%endif%}
{% if page.android %}{%endif%}
	
{% endsection %} 
<!---    /5. Handle Deep Link -->


<!---    end required comment  -->
{% section configuring_the_client_end_required %}
{% endsection %} 
<!---    /end required comment -->


{% endsection %} 
<!--- /REQUIRED -->


<!--- ADVANCED -->
<a id="advanced">
{% section configuring_the_client_advanced %} 

## Advanced Client Setup








{% endsection %} 
<!--- /ADVANCED -->
