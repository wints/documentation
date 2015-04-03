---
type: ingredient
title: Configuring the Client - Branch Key
platforms:
- ios
- android
- web
---

{% section configuring_the_client_branch_key_header %}### Branch Key{% endsection %}

{% if page.ios %}
Now you need to add the Branch Key that you received on the Dashboard into your app.

[TODO] Updated screenshots when we have the next version.

Your app key can be retrieved on the [Settings](https://dashboard.branch.io/#/settings) page of the dashboard. Now you need to add it to YourProject-Info.plist (Info.plist for Swift).

1. In plist file, mouse hover "Information Property List" which is the root item under the Key column.
1. After about half a second, you will see a "+" sign appear. Click it.
1. In the newly added row, fill in [TODO] "bnc_app_key" for its key, leave type as String, and enter your app key obtained in above steps in its value column.
1. Save the plist file.

#### Screenshot
![Setting Key in PList Demo](https://s3-us-west-1.amazonaws.com/branch-guides/10_plist.png)

#### Animated Gif
![Setting Key in PList Demo](https://s3-us-west-1.amazonaws.com/branch-guides/9_plist.gif)

{% endif %}
<!---       /iOS-specific Branch Key -->


{% if page.android %}
Now you need to add the Branch Key that you received on the Dashboard into your app.

[TODO]

{% endif %}
<!---       /Android-specific Branch Key -->