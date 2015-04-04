Routing to content is highly app-specific, since mobile apps vary widely in how they are structured. 

That said, we want to give a concrete example of how you can use Branch links to route straight to content within your app.

{% if page.ios %}

Inside of the deepLinkHandler, you will want to examine the params dictionary to determine whether the user clicked on a link to content. Regardless of whether your app involves pictures, videos, text or whatever novel content your app contains, you likely have an internal system of identifiers. 

Let's assume your app revolves around pictures and each one is tagged with a picture Id. When a user shares a picture, simply attach a picture Id to the Branch link being created. If a user clicks a link to a specific picture, this Id will show up in the params dictionary in the deepLinkHandler. 

~~~objc
- (BOOL)application:(UIApplication *)application 
        didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

    // initialize the session, setup a deep link handler    
    [[Branch getInstance] initSessionWithLaunchOptions:launchOptions
                            andRegisterDeepLinkHandler:^(NSDictionary *params,
                                                         NSError *error) {
                                                         	
        // start setting up the view controller hierarchy                                                 	
    	UINavigationController *navC = (UINavigationController *)self.window.rootViewController;
    	UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"Main"
                                                         bundle:nil];
    	UIViewController *nextVC;
    	// If the key 'pictureId' is present in the deep link dictionary
    	// then load the picture screen with the appropriate picture
    	NSString *pictureId = [params objectForKey:@"pictureId"];
    	if (pictureURL) {
        	[MyAppPreferences setNextPictureId:pictureId];
        	nextVC = [storyboard instantiateViewControllerWithIdentifier:@"PicVC"];
    	} else {
        	nextVC = [storyboard instantiateViewControllerWithIdentifier:@"MainVC"];
    	}
        [navC setViewControllers:@[nextVC] animated:YES];
    }];
    
    return YES;
}
~~~


{% endif %}