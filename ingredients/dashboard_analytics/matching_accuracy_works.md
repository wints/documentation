
## How does Branch matching work?

Branch collects information about devices both when a user is in the browser -- via a click on a Branch link -- and then after they open the app. This information includes IP Address, OS, OS version, screen size and other parameters. Branch also uses hardware identifiers when available. This is the user's "digital fingerprint" and can be obtained in the browser and in the app.

When a user clicks a Branch link, in the browser we determine where the user should be directed. On desktop, this is to a text-me-the-app page or a custom Desktop URL. On a mobile app this is to the app if it's present or to the App Store / Play Store if not. Branch also drops a first-party cookie in the browser so that in all future trips through the browser Branch knows who the user is and whether they have the app.

When the user opens the app after clicking a Branch link for the very first time, we check the params to see if our servers have a digital fingerprint that matches. If we find a match, we know which link they clicked and what data is associated with us. This is Branch magic, and it's required because it isn't possible to pass data through the App Store.

On all subsequent Branch link clicks, we know who they are and can open the app directly and we will match the user <> link click every single time.

The good news for you: if we've ever seen a user before across our entire network of apps, there is 100% accuracy matching them. No more magic needed.

So we estimate that Branch links are accurate 98-99% of the time. But that number by itself isn't super helpful.
