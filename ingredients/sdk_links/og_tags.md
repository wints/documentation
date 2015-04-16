### OG Tags - Looking Good on Social Media

If you want to tailor how a link will appear on social media, you should make use of our support for Open Graph (OG) tags. You can customize the OG tags associated with the link by including key-value pairs in the params dictionary when creating a link. Note that these overwrite any defaults that you previously set on the Branch Dashboard.

| Key | Value
| --- | ---
| "$og_title" | The title you'd like to appear for the link in social media
| "$og_description" | The description you'd like to appear for the link in social media
| "$og_image_url" | The URL for the image you'd like to appear for the link in social media
| "$og_video" | The URL for the video
| "$og_url" | The URL you'd like to appear
| "$og_app_id" | Your OG app ID. Optional and rarely used.


<!--- iOS -->
{% if page.ios %}


~~~ objc
// Facebook OG tags -- this will overwrite any defaults you set up on the Branch Dashboard
NSMutableDictionary *params = [NSMutableDictionary dictionary];
params[@"$og_title"] = @"MyApp is disrupting apps";
params[@"og_description"] = @"Out of all the apps disrupting apps, MyApp is without a doubt a leader. Check us out.";
[[Branch getInstance] getShortURLWithParams:params andCallback:^(NSString *url, NSError *error) {
   // Now we can do something with the URL...
   NSLog(@"url: %@", url);
}];
~~~

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android %}


~~~ java
// This will OVERWRITE any defaults you have set on the Branch Dashboard
JSONObject params = new JSONObject();
try {
    params.put("referringUsername", "Mario");
    params.put("referringUserId", "1234");
    params.put("pictureId", "987666");
    params.put("pictureURL", "http://yoursite.com/pics/987666");
    params.put("pictureCaption", "The princess and the plumber");

    // customize the display of the Branch link
    params.put("$og_image_url", "http://yoursite.com/pics/987666");
    params.put("$og_title", "Mario's Recent Picture");
    params.put("$og_description", "The princess and the plumber");
} catch (JSONException ex) { }
Branch branch = Branch.getInstance(getApplicationContext());
branch.getShortUrl("Facebook", "share", null, params, new BranchLinkCreateListener() {
    @Override
    public void onLinkCreate(String url, Branch.BranchError error) {
        if (error == null) {
            // show the link to the user or share it immediately
        } else {
            Log.i("MyApp", error.getMessage());
        }
    }
});
~~~
{% endif %}
<!--- /Android -->
