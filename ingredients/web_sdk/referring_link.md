
## Using your own SMS service (Advanced)

While we provide your users the ability to text themselves the app for free -- we use Twilio -- you can use your own SMS service. 

With the `sendSMS()` method, we send users a link that points back to the original link they clicked that brought them to your text-me-the-app page. You can now access an equivalent link that also points back to the same link. This is provided as part of the Web SDK's init callback and is called `referring_link`. See the code below:

{% highlight javascript %}
branch.init('YOUR-BRANCH-KEY', function(err, data) {
	console.log("data.referring_link:", data.referring_link);
});
{% endhighlight %}

This referring_link will be null if the user came to the page without clicking on a Branch link. Otherwise it will be of the form `bnc.lt/d/XXX` -- the `/d/` indicates that this is not the original link but rather points back to the original link.

So, to roll your own SMS service, your logic should be as follows:

1. Does `referring_link` exist, a.k.a. did the user end up on this text-me-the-app page because of a Branch link? If so, use this link when sending the SMS.
2. If `referring_link` is null, generate a new Branch link by making a call to the Web SDK's `link()` method. Use this link when sending the SMS.

{% protip title='referring_link passes along your data!' %}
It is essential that you use `referring_link` if you decide not to use our sendSMS() method to text users the app from desktop. If you generate a new link, the data from whatever link they clicked that took them to your text-me-the-app page will not be passed through to the client app upon opening.
{% endprotip %}
