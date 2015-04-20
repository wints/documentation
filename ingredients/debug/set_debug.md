
### Use setDebug To Simulate Fresh Installs

One challenge aspect testing Branch's service is simulating a fresh install. We intentionally add a lot of restrictions to prevent 'install' events from being triggered on app updates or uninstall/reinstall. 

To simulate a brand new user being referred from our perspective:

1. use the setDebug call before you call initSession in the AppDelegate (see below):
1. Uninstall your test app
1. Clear your browser cookies
1. Click a link in the browser
1. Run your test app:

	{% if page.ios %}
    Branch *branch = [Branch getInstance];

    [Branch setDebug];
    
    [branch initSession......]
    {% endif %}
    {% if page.android %}
    Branch.getInstance(getApplicationContext()).setDebug();
    {% endif %}
