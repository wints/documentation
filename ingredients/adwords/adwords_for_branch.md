If you've clicked away from your ad, open it up again by pressing the edit button.

Under _Ad URL options (advanced)_ copy and paste the URL `http://www.branch.io/?branchlink={_branchlink}` in to the tracking template. For _Custom parameter_ you want to add `branchlink` in the _name_ box and your Branch link in the _value_ box. Then save the ad. 

Google has a process of reviewing ads for certain guidelines that can take up to 1 business day. Once approved, hover your mouse over the text bubble under status in the ads tab. This will show whether based on your bid per keyword and the ads quality, whether it is currently being shown to users. If it is not, follow their guidelines to amend the situation.

The next step is to acquire a _Conversion ID_ and a _Conversion Label_. Go to the _Conversions_ section under _Tools_.  
{% image src="/img/ingredients/adwords/conversions.png" 3-quarters center alt="Conversion Page" %}
There, you need to create a conversion that tracks installs. Select _App_ as the source of conversion  
{% image src="/img/ingredients/adwords/conversions_app.png" 3-quarters center alt="Conversion App" %}
and _App downloads_ as well as {% if page.android %}_Android_{% endif %}{% if page.ios %}_iOS_{% endif %}.
{% image src="/img/ingredients/adwords/conversions_platform.png" 3-quarters center alt="Conversion Platform" %}

In the next section, fill in whatever is convenient for _Name_ and _Value_ and _Optimization_. {% if page.ios %}For _Postback URL_, enter in the following URL: `https://branch.io?idfa={md5_advertising_id}&lat={lat}&click_url={click_url}` and click save. Finally after saving, below the text _Set up your tracking method_, select _Set up a server-to-server conversion feed from an app analytics package to Adwords_. Save the _Conversion ID_ and the _Conversion label_ that pop up as they will be needed for the next step.{% endif %}{% if page.android %}Google has not yet setup support for this part of the setup process. It will be released shortly.{% endif %}