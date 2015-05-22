
## Webhook Syntax Specification

Here is the format of what we post to you


	POST
	User-agent: Branch Metrics API
	Content-Type: application/json
	{
	    event: ‘event name’
	    metadata: ‘event metadata’ - specified in userCompletedAction withState
	    event_timestamp: 'time stamp for the event'
	    hardware_id: 'IDFA' (iOS) | 'Android ID' (Android)
	    os: 'iOS' | 'Android'

	    // optionally included:
	    identity: ‘user ID’ - specified in setIdentity

	    // the referrer who created the new user
	    first_referring_click_timestamp: the first click timestamp
	    first_referring_identity: ‘user ID’ - specified in setIdentity
	    first_hardware_id: ‘IDFA’
	    first_referring_link_data: { link data dictionary - see below }

	    // the referrer who referred this session
	    session_referring_click_timestamp: the session click timestamp
	    session_referring_identity: ‘user ID’
	    session_referring_hardware_id: ‘IDFA’
	    session_referring_link_data: { link data dictionary - see below }
	}

	// link data dictionary example
	{
	    data: { deep link dictionary }
	    type: 0 - original, 1 - one time use, 2 - marketing
	    campaign: ‘campaign label’
	    feature: ‘feature label’
	    channel: ‘channel label’
	    tags: [tags array]
	    stage: ‘stage label’
	}

