---
type: domain
title: Configuring Client Apps
platforms:
- ios
- android
- web
---


## Required Steps for SDK Integration

{% ingredient sdk_setup/installing_the_sdk %}{% endingredient %}
{% ingredient sdk_setup/branch_key %}{% endingredient %}
{% ingredient sdk_setup/uri_scheme %}{% endingredient %}
{% ingredient sdk_setup/init_session %}{% endingredient %}
{% ingredient sdk_setup/handle_deep_link %}{% endingredient %}

## Optional (Recommended)

{% ingredient sdk_setup/identify_and_logout %}{% endingredient %}

{% if page.ios %}{% ingredient sdk_setup/ios_app_submission %}{% endingredient %}{% endif %}
{% if page.android %}{% ingredient sdk_setup/android_app_submission %}{% endingredient %}{% endif %}

## Advanced Settings

{% ingredient sdk_setup/is_referrable %}{% endingredient %}


