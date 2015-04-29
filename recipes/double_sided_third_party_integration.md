---
type: recipe
title: 3rd Party Ad Integration
platforms:
- ios
- android
weight: -10
---

## Double Sided Custom Ad Measurement Integrations

This section will describe exactly what needs to be done in order to put a Branch deep link in between a third party ad network and a third party measurement service. For example, this section applies to you if user flow chart looks like this:

_Ad network -> **Branch** -> measurement partner (Adjust, etc)_

{% ingredient dashboard_links/creating_links %}
{% override title %}Step 1: Create A Marketing Link{% endoverride %}
{% endingredient %}

{% ingredient dashboard_links/custom_redirects %}
{% override title %}Step 2: Customize the redirects to point to measurement partner{% endoverride %}
{% override description %}In order to configure the links for this ad network integration, you'll need to point the Branch links to the measurement partner. To do this, you'll want to customize the endpoints for both Android and iOS. Let's take the example where you were previously using Adjust with the following template:

1. **iOS:** _https://app.adjust.io/8x54yn?campaign=iOS_search_campaign&adgroup={keyword}&creative={matchtype}&google_network={network}_
1. **Android:** _https://app.adjust.io/3D24xy?campaign=Android_search_campaign&adgroup={keyword}&creative={matchtype}&google_network={network}_

You'd set the **custom URL for Android** to _https://app.adjust.io/3D24xy_ and the **custom URL for iOS** to _https://app.adjust.io/8x54yn_. This would tell Branch where to send the user for the specific OS. Don't worry about the additional query parameters (the stuff after '?'). We'll carry that through Branch automatically.
{% endoverride %}
{% endingredient %}

{% ingredient dashboard_links/custom_data %}
{% override title %}Step 3: Customize deep link parameters {% endoverride %}
{% override description%}In order to properly link the ad network to the measurement partner, you must configure the Branch link to pass through any additional query parameters through to the measurement partner.

To do this, please add in the key '$query_param_passthrough' with the value of 'true'. You can see an example below:{% endoverride %}
{% override picture%}![Description](/img/recipes/double_third_party/query_param_passthrough.png){% endoverride %}
{% override description_2%}Additionally, if you want specify any additional deep link data. You would append it in this list of keys and values. For example, if you wanted to route a user to a particular piece of content, here is where you would specify this information.{% endoverride %}
{% endingredient %}

### Step 4: Provide link to advertiser

Click save to generate the URL - it will appear in the list of links.

Lastly, you need to deliver the proper link to the advertiser. To do this, you probably are used to sending the advertiser a link with the templated fields. For example, here is a typical link for Adjust:

_https://app.adjust.io/8x54yn?campaign=search_campaign&adgroup={keyword}&creative={matchtype}&google_network={network}_

To create the link for the advertiser, you simply need to replace the base URL (everything before the '?'), with the Branch provided link. So, keeping with the same example, you would change 'https://app.adjust.io/8x54yn' with 'https://bnc.lt/l/125AdD-F' to make the link like so:

_https://bnc.lt/l/125AdD-F?campaign=search_campaign&adgroup={keyword}&creative={matchtype}&google_network={network}_

This is the link to provide to the advertiser.