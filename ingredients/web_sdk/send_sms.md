
### SendSMS()

Now that you've initialized Branch, you can invoke the `SendSMS()` method when a user enters his or her phone number. Here are the parameters `sendSMS()` can take:

{% highlight javascript %}
branch.sendSMS(
    phone,
    linkData,
    options,
    callback (err, data)
);
{% endhighlight %}

So, for example, your call to this method, once filled in with the user's phone number, could look like the following:

{% highlight javascript %}
branch.sendSMS(
    phone: '9999999999',
    {
        tags: ['tag1', 'tag2'],
        channel: 'facebook',
        feature: 'dashboard',
        stage: 'new user',
        type: 1,
        data: {
            foo: 'bar'
        }
    },
    { make_new_link: false }, // Default: false. If set to true, sendSMS will generate a new link even if one already exists.
    function(err) { console.log(err); }
});
{% endhighlight %}

_You can read more about the SendSMS() method [here](https://github.com/BranchMetrics/web-sdk#sendsmsphone-linkdata-options-callback)._

The example below includes all the code you need to add to your website in one snippet.
