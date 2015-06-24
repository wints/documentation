
## Adjusting to poor connectivity and downtime

At Branch, we live and breath uptime & performance. We’ve developed mechanisms internal to the SDK to deal with network issues. We always call the callbacks with the error parameter describing the issue. If the phone is in airplane mode and the connection is not available, the callbacks are called immediately. If there is a server latency, we timeout after 3 seconds and will retry 4 more times with a 3 second pause in between each. These timeouts are adjustable on the singleton instance by calling: 

* `setNetworkTimeout` (ms)
* {% if page.android %}`setRetryCount`{% elsif page.ios %}`setMaxRetries`{% endif %} 
* `setRetryInterval` (ms)

