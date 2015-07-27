{% section intro %}

Routing to content is *highly app-specific*, since mobile apps vary widely in how they are structured. That said, we want to give a concrete example of how you can use Branch links to route straight to content within your app.
{% endsection %}

{% if page.ios %}

{% section ios_explanation %}
Inside of the deepLinkHandler, you will want to examine the params dictionary to determine whether the user clicked on a link to content. Below is an example assuming that the links correspond to pictures.
{% endsection %}

{% highlight objc %}
- (BOOL)application:(UIApplication *)application
    didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

  // initialize the session, setup a deep link handler
  [[Branch getInstance] initSessionWithLaunchOptions:launchOptions
                          andRegisterDeepLinkHandler:^(NSDictionary *params, NSError *error) {

    // start setting up the view controller hierarchy
    UINavigationController *navC = (UINavigationController *)self.window.rootViewController;
    UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"Main" bundle:nil];
    UIViewController *nextVC;
    // If the key '{% section ios_key %}pictureId{% endsection %}' is present in the deep link dictionary
    {% section ios_comment %}// then load the picture screen with the appropriate picture{% endsection %}
    NSString *{% section ios_key %}pictureId{% endsection %} = [params objectForKey:@"{% section ios_key %}pictureId{% endsection %}"];
    if ({% section ios_key %}pictureId{% endsection %}) {
      nextVC = [storyboard instantiateViewControllerWithIdentifier:@"{% section vc_name %}PicVC{% endsection %}"];
      [nextVC setNext{% section ios_key_U %}PictureId{% endsection %}:{% section ios_key %}pictureId{% endsection %}];
    } else {
      nextVC = [storyboard instantiateViewControllerWithIdentifier:@"MainVC"];
    }
    [navC setViewControllers:@[nextVC] animated:YES];
  }];

  return YES;
}
{% endhighlight %}


{% endif %}

{% if page.android %}

{% section android_explanation %}
Inside `onStart`, when Branch is initialized, you will want to examine the dictionary we pass to you from our callback. Below is an example assuming that the links correspond to pictures.
{% endsection %}

{% highlight java %}

@Override
public void onStart() {
    super.onStart();

    Branch branch = Branch.getInstance(getApplicationContext());
    branch.initSession(new BranchReferralInitListener(){
        @Override
        public void onInitFinished(JSONObject referringParams, Branch.BranchError error) {
            if (error == null) {
                // params are the deep linked params associated with the link that the user clicked before showing up
                // params will be empty if no data found
                String {% section akeyU %}pictureID{% endsection %} = referringParams.optString({% section akeyL %}"picture_id"{% endsection %}, "");
                if ({% section akeyU %}pictureID{% endsection %}.equals("")) {
                    startActivity(new Intent(this, HomeActivity.class));
                }
                else {
                    Intent i = new Intent(this, ViewerActivity.class);
                    i.putExtra({% section akeyL %}"picture_id"{% endsection %}, {% section akeyU %}pictureID{% endsection %});
                    startActivity(i);
                }
            } else {
                Log.e("MyApp", error.getMessage());
            }
        }
    }, this.getIntent().getData(), this);
}
{% endhighlight %}

{% endif %}
