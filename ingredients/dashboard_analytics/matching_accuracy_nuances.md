
## The nuances and edge cases

It's technically possible that users can click the link at the same time and have identical fingerprints. Same IP address, identical devices, identical software versions and never before seen by Branch. It's very rare out in the wild. For this reason, if someone clicks a link but doesn't open the app, we "expire" their browser-based digital fingerprint after two hours by default. However, this duration is completely tunable by you.

A note about potential mismatch: This is an extremely rare case. So much so that the benefit to you from analytics perspective and the user from a personalization and delight perspective greatly outweigh the rareity of a mismatch. We only make you aware if it in order to design your new user experiences to be tolerant.