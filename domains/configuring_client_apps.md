---
type: domain
title: Configuring Client Apps
platforms:
- ios
- android
- web
---

## Required

{% ingredient sdk_setup/installing_the_sdk %}{% endingredient %}
{% ingredient sdk_setup/branch_key %}{% endingredient %}
{% ingredient sdk_setup/uri_scheme %}{% endingredient %}
{% ingredient sdk_setup/init_session %}{% endingredient %}
{% ingredient sdk_setup/handle_deep_link %}{% endingredient %}

## Optional (Recommended)

{% ingredient sdk_setup/identify_and_logout %}{% endingredient %}


## Advanced Settings

{% ingredient sdk_setup/is_referrable %}{% endingredient %}

{% if page.ios %}{% ingredient sdk_setup/idfa %}{% endingredient %}{% endif %}
