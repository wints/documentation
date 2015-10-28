---
type: reference
title: Export API
repo: Deferred-Deep-Linking-Public-API
page_title: Export API Reference
description: This Branch Metrics HExport API reference lists the specifications for pulling data from Branch via API.
keywords:  
hide_platform_selector: true
---
# Export API for Branch

## Configuration
In order to use this API you must have an App ID and a Public Key.  You can find your keys at: https://dashboard.branch.io/#/settings

Base URL:
https://api.branch.io/v1/export/<branch key>

(required) branch_secret
(required) export_date <format YYYY-MM-DD>

### Example HTTP GET
curl "https://api.branch.io/v1/export/YOUR_PUBLIC_KEY?branch_secret=secret_live_hwLHJdvS9SrIbvKffKJlIivjqNwrG1vz&export_date=2015-10-23"

Response:
{
"links_export_url":"https://branch-exports.s3.amazonaws.com/YOUR_APP_ID-2015-10-23-links-SOME_UNIQUE_NUMER.csv",
"events_export_url":"https://branch-exports.s3.amazonaws.
com/YOUR_APP_ID-2015-10-23-events-SOME_UNIQUE_NUMER.csv",
"clicks_export_url":"https://branch-exports.s3.amazonaws.com/YOUR_APP_ID-2015-10-23-link_clicks-SOME_UNIQUE_NUMER.csv"
}

Those files are fetchable, and will be available on our S3 bucket at that location to download after 12:00am UTC of the previous day. It will return a 400 until the data has finished transferring over. Currently the files there work, but are of the old soon to be deprecated format. The updated schema, which again will be online in the next few weeks, is shown below. Lastly, I apologize again for this informal API doc while we move over this endpoints spec.


##Event Export
Structure for event data export

id,name,metadata,timestamp,branch_identity_id,developer_identity,identity_creation_timestamp,branch_session_id,app_version,ip_address,session_start_timestamp,branch_device_fingerprint_id,device_first_seen_timestamp,device_os,device_os_version,device_metadata,hardware_id,google_advertising_id,branch_browser_fingerprint_id,browser_first_seen_timestamp,browser_os,browser_os_version,user_agent,first_referring_click_timestamp,first_referring_click_query_params,first_referring_branch_identity_id,first_referring_developer_identity,first_referring_hardware_id,first_referring_branch_link_id,first_referring_link_creation_timestamp,first_referring_link_channel,first_referring_link_feature,first_referring_link_campaign,first_referring_link_stage,first_referring_link_tags,first_referring_link_data,first_referring_link_creation_source,first_referring_link_url,session_referring_click_timestamp,session_referring_click_query_params,session_referring_branch_identity_id,session_referring_developer_identity,session_referring_hardware_id,session_referring_branch_link_id,session_referring_link_creation_timestamp,session_referring_link_channel,session_referring_link_feature,session_referring_link_campaign,session_referring_link_stage,session_referring_link_tags,session_referring_link_data,session_referring_link_creation_source,session_referring_link_url


##Link Click Export
Structure for link click export

click_timestamp,branch_link_click_id,branch_browser_fingerprint_id,os,os_version,model,browser,user_agent,ip_address,stage,sms_from_desktop,phone_number,redirect_method,link_creation_timestamp,link_channel,link_feature,link_campaign,link_stage,link_tags,link_data,link_creation_source,link_url,link_branch_identity_id,link_id