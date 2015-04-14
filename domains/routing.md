---
type: domain
title: Routing
platforms:
- ios
- android
- web
---

# Routing

------

Your app can deliver users a custom experience based on the Branch link they clicked on that directed them to the app.

This means that you can:

* customize the signup/login flow
* take the user straight to a specific screen in your app
* congratulate the user on getting credits for signing up via a friend's link
* ... and so on.

Branch is able to pass data through install. When the user first opens the app, Branch makes a fast asynchronous call to the server to see whether the user has clicked on a link, and if so, what data is associated with it. This means that you should design routing accordingly.

{%if page.ios or page.android%}
{% ingredient sdk_routing/routing %}{%endingredient%}
{%endif%}


For a concrete example of giving users a customized experience via Branch links, check out our [Branchster Example]({%if page.ios %}https://github.com/BranchMetrics/Branchster-iOS{%endif%}{%if page.android%}https://github.com/BranchMetrics/Branchster-Android{%endif%}{%if page.web%}https://github.com/BranchMetrics/Branchster-Web{%endif%})

