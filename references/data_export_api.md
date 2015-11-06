---
type: reference
title: Export API
repo: Deferred-Deep-Linking-Public-API
page_title: Export API Reference
description: This Branch Metrics HExport API reference lists the specifications for pulling data from Branch via API.
keywords:  
hide_platform_selector: true
---
# Data Export API

#### Configuration
In order to use this API you must have an App ID and a Public Key.  You can find your keys at: https://dashboard.branch.io/#/settings

#### Base URL:
https://api.branch.io/v1/export/

#### Endpoint
	POST https://api.branch.io/v2/export
	Content-Type: application/json

#### Parameters

**branch_key** _required_
: The Branch key of the originating app

**branch_secret** _required_
: The Branch secret key of the originating app

**export_date** _required_
: The UTC date of the requested data export

> Example:
https://api.branch.io/v1/export/XXXXX?branch_secret=XXXXX&export_date=2015-10-01

#### Response

The response payload will be in JSON format and for each export have an array of paths to files on s3 to download. Note that there may be multiple files (depending on the size of the day's export) and that each csv file will be gzip'd.


	{
	 "links_export_url": ["https://branch-exports.s3.amazonaws.com/YOUR_APP_ID-2015-10-23-links-HASH.csv.gz"],
	 "events_export_url": ["https://branch-exports.s3.amazonaws.com/YOUR_APP_ID-2015-10-23-events-HASH.csv.gz"],
	 "clicks_export_url": ["https://branch-exports.s3.amazonaws.com/YOUR_APP_ID-2015-10-23-link_clicks-HASH.csv.gz"]
	}


{% protip title='Note:' %}
A full day's files will be available on our S3 bucket at that location to download around 7:00am UTC. It will return an HTTP 400 from s3 until the UTC day is over and the data has been transfered to s3, therefore it is recommended you schedule any ETLs to fetch the data for the previous day around 7:00am UTC.
{% endprotip %}


##Link Export

| Key | Value
| --- | ---
|creation_timestamp|
|link_id|
|branch_identity_id|
|channel|
|feature|
|campaign|
|stage|
|tags|
|data|
|creation_source|
|alias|
|domain|
|url|


##Link Click Export

| Key | Value
| --- | ---
|click_timestamp|
|branch_link_click_id|
|branch_browser_fingerprint_id|
|os|
|os_version|
|model|
|browser|
|user_agent|
|ip_address|
|stage|
|sms_from_desktop|
|phone_number|
|redirect_method|
|link_creation_timestamp|
|link_channel|
|link_feature|
|link_campaign|
|link_stage|
|link_tags|
|link_data|
|link_creation_source|
|link_url|
|link_branch_identity_id|
|link_id|


##Event Export

| Key | Value
| --- | ---
|id|
|name|
|metadata|
|timestamp|
|branch_identity_id|
|developer_identity|
|identity_creation_timestamp|
|branch_session_id|
|app_version|
|ip_address|
|session_start_timestamp|
|branch_device_fingerprint_id|
|device_first_seen_timestamp|
|device_os|
|device_os_version|
|device_metadata|
|hardware_id|
|google_advertising_id|
|branch_browser_fingerprint_id|
|browser_first_seen_timestamp|
|browser_os|
|browser_os_version|
|user_agent|
|first_referring_click_timestamp|
|first_referring_click_query_params|
|first_referring_branch_identity_id|
|first_referring_developer_identity|
|first_referring_hardware_id|
|first_referring_branch_link_id|
|first_referring_link_creation_timestamp|
|first_referring_link_channel|
|first_referring_link_feature|
|first_referring_link_campaign|
|first_referring_link_stage|
|first_referring_link_tags|
|first_referring_link_data|
|first_referring_link_creation_source|
|first_referring_link_url|
|session_referring_click_timestamp|
|session_referring_click_query_params|
|session_referring_branch_identity_id|
|session_referring_developer_identity|
|session_referring_hardware_id|
|session_referring_branch_link_id|
|session_referring_link_creation_timestamp|
|session_referring_link_channel|
|session_referring_link_feature|
|session_referring_link_campaign|
|session_referring_link_stage|
|session_referring_link_tags|
|session_referring_link_data|
|session_referring_link_creation_source|
|session_referring_link_url|
