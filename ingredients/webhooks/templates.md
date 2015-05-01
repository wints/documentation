
## Templates For Webhooks

If you depend on branch links with certain query parameters appended such as unique IDs, we can send webhooks based off said ID. 

For example, let's say you have a click ID for one of your ad campaigns--dynamically generated, of course:

*http://bnc.lt/l/campaignstuff?clickId=12345*

And want to send a webhook using a `GET` with the same clickId inside the URL, you would use our Passthrough feature to make it happen. 

`http://my.server.com/data_sink?click_id={{ session.link_click.query.clickId }}`

**What you can specify**

Any query parameter you add to Branch Links will be captured and stored. You will need to follow this format: *session.link_click.query* and specify the key from the query string to pass through the value, as shown in the example above.