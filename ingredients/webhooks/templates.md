
## Templates For Webhooks

If you depend on branch links with certain query parameters appended such as unique IDs, we can send webhooks based off said ID. 

For example, let's say you have a click ID for one of your ad campaigns--dynamically generated, of course:

*http://bnc.lt/l/campaignstuff?clickId=12345*

And want to send a webhook with the same clickId inside the URL, you would use our Passthrough feature and make it happen.

`http://my.server.com/data_sink?click_id={{ session.link_click.query.clickId }}`