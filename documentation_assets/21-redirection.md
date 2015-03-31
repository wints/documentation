<!--- Redirection -->
<!--- Mostly done  -->

I. Standard scenario -- give screenshot of Dashboard > Settings > Link Settings
	1. Links on mobile
		A. If app is present: URI scheme
		B. If app is not present: Play Store / App Store
	2. Default URL: for mobile devices without apps
	3. Desktop redirects: Branch Hosted SMS Landing Page
II. Customizations
	1. If your app is not on the Play Store / App Store yet -- custom URL for each
		A. iOS URL
			i. Dashboard is the default value
			ii. Can be customized on a per-link basis: $ios_url <-?->20.VIII.1
		B. Android URL
			i. Dashboard is the default value
			ii. Can be customized on a per-link basis: $android_url <-?->20.VIII.2
		C. $ipad_url???
	2. Customizing the Desktop URL
		A. Dashboard is the default value
		B. Can be customized on a per-link basis: $desktop_url <-?->20.VIII.3
	3. Always try to open app
		A. Dashboard is the default value
		B. Can be customized on a per-link basis: $always_deeplink <-?->20.IX.1

FAQ will be long on this one. Some questions should have a short answer and reference the above, other questions should have a longer answer that "lives" here. The goal is to make the above as clear as possible.