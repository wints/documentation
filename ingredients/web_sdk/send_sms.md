
### SendSMS()

You can read more about the SendSMS() method [here](https://github.com/BranchMetrics/web-sdk#sendsmsphone-linkdata-options-callback). 

The main thing you need to know is that your web page should invoke this method with the following parameters:

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
    { make_new_link: true }, // Default: false. If set to true, sendSMS will generate a new link even if one already exists.
    function(err) { console.log(err); }
});
{% endhighlight %}

It really is that simple! 