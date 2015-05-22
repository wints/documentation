
In order to properly deep link through the App Stores, we use a technique called fingerprint matching. This is where we grab a fingerprint snapshot of a user in the browser before redirecting them to the appropriate app store. When that user installs the app, we send a new fingerprint snapshot from our native library to be matched to the browser fingerprint. We are often asked about the accuracy of this technique, so we've written this section to help --

* "How accurate is Branch?"
* "Can I trust Branch enough to base rewards on it?"
* "Do you ever mess up?"

And most importantly...

* "What control do I have over Branch's matching algorithms?"

The following addresses all of these questions.
