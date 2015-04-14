### Sharing via SMS

{% if page.ios %}

To quickly share via SMS/iMessage, we've included some code that you can copy and paste into your own app. This is all the code you need to get users started on inviting other users!

First, note that this is making an asynchronous call to Branch's servers to generate the link and attach the information provided in the params dictionary. We highly recommend showing the user a spinner and disabling your "share" button while the link is being generated. You can either use [UIActivityIndicatorView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIActivityIndicatorView_Class/index.html) (native) or an external library like [MBProgressHUD](https://github.com/jdg/MBProgressHUD).


At the top of your view controller's implementation (.m) file, include the following:

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
#import <MessageUI/MessageUI.h>
#import <MessageUI/MFMailComposeViewController.h>
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
import MessageUI
{% endhighlight %}
{% endtab %}
{% endtabs %}


Then be sure to indicate that your view controller conforms to MFMessageComposeViewControllerDelegate protocol. This is done by modifying the @interface line of your view controller's implementation (.m) file.

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
@interface MyAppViewController () <MFMessageComposeViewControllerDelegate>
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
class ViewController: UIViewController, MFMessageComposeViewControllerDelegate {
{% endhighlight %}
{% endtab %}
{% endtabs %}


The following code should go in some method triggered by the user (such as when the user taps on a button).

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
NSDictionary *params = @{@"referringUsername": @"Bob",
                         @"referringUserId": @"1234"};
// ... insert code to start the spinner of your choice here ...
[[Branch getInstance] getShortURLWithParams:params
                                 andChannel:@"SMS"
                                 andFeature:@"Referral"
                                andCallback:^(NSString *url, NSError *error) {
    if (!error) {
        // Check to make sure we can send messages on this device
        if ([MFMessageComposeViewController canSendText]) {
            MFMessageComposeViewController *messageComposer =
                [[MFMessageComposeViewController alloc] init];
            // Set the contents of the SMS/iMessage -- be sure to include the URL!
            [messageComposer setBody:[NSString stringWithFormat:
                @"Check out MyApp -- use my link to get free  points: %@", url]];
            messageComposer.messageComposeDelegate = self;
            [self presentViewController:messageComposer animated:YES completion:^{
                // ... insert code to stop the spinner here
            }];
        } else {
            // ... insert code to stop the spinner here
            [[[UIAlertView alloc] initWithTitle:@"Sorry"
                                        message:@"Your device cannot send messages."
                                       delegate:nil
                              cancelButtonTitle:@"Okay"
                              otherButtonTitles:nil] show];
        }
    }
}];
{% endhighlight %}
{% endtab %}

{% tab swift %}
{% highlight swift %}
var params = [ "referringUsername": "Bob",
                "referringUserId": "1234" ]

// ... insert code to start the spinner of your choice here ...
Branch.getInstance().getShortURLWithParams(params,
                                           andChannel: "SMS",
                                           andFeature: "Referral",
                                           andCallback: { (url: String!, error: NSError!) -> Void in
    if (error == nil) {
        if MFMessageComposeViewController.canSendText() {
            let messageComposer = MFMessageComposeViewController()
            messageComposer.body = String(format: "Check out MyApp -- use my link to get free  points: %@", url)
            messageComposer.messageComposeDelegate = self
            self.presentViewController(messageComposer, animated: true, completion:{(Bool) in
                // ... insert code to stop the spinner here
            })
        } else {
            // ... insert code to stop the spinner here
            var alert = UIAlertController(title: "Error", message: "Your device cannot send messages.", preferredStyle: UIAlertControllerStyle.Alert)
            alert.addAction(UIAlertAction(title: "Okay", style: UIAlertActionStyle.Default, handler: nil))
            self.presentViewController(alert, animated: true, completion: nil)
        }
    }
})
{% endhighlight %}
{% endtab %}
{% endtabs %}


Lastly, there is a required delegate method for the MessageComposeViewController. We provide an empty implementation, which you are free to customize.

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
- (void)messageComposeViewController:(MFMessageComposeViewController *)controller
                 didFinishWithResult:(MessageComposeResult)result {
    [self dismissViewControllerAnimated:YES completion:nil];
}
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
func messageComposeViewController(controller: MFMessageComposeViewController!, didFinishWithResult result: MessageComposeResult) {
    self.dismissViewControllerAnimated(true, completion: nil)
}
{% endhighlight %}
{% endtab %}
{% endtabs %}


The above code allows you to quickly implement sharing via SMS. See the screenshot below!

![sms screenshot](/img/ingredients/sdk_links/ios_sms.png)

{% endif %}
