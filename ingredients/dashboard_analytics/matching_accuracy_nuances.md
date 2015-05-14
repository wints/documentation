
## The nuances and edge cases

It's technically possible that users can click the link at the same time and have identical fingerprints. Same IP address, identical devices, identical software versions and never before seen by Branch. It's very rare out in the wild. For this reason, if someone clicks a link but doesn't open the app, we "expire" their browser-based digital fingerprint after two hours.

If two identical devices are seen for the first time, and a collision occurs, there are two options. First, we can go forward with making the match on our backend. This means that the end users upon opening the app will still see the link params, but there's a chance will mix up the individuals who clicked the links. Again, this rarely happens. If you are running a marketing campaign, you only care about aggregates so individual identities don't matter. 

