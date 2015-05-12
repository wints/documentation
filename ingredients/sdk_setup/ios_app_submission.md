
## Submitting to the App Store

When submitting to the App Store, you may need to let Apple know that you use the IDFA. You should do so if:

1. You use the Branch cocoapod -- this automatically imports AdSupport.framework
2. You have manually imported AdSupport.framework

When submitting, you will need to indicate that you do use the Advertising Identifier. Please also check the latter two checkboxes:

{% image src='/img/ingredients/sdk_setup/idfa.png' center alt='IDFA' %}

This is all you need to follow the proper protocol with IDFA. 

We highly suggest including the AdSupport framework, as it will allow us to do better matching. If we've seen a device across our network of apps (a wide network indeed), then we can do matching with 100% accuracy, even if your app was just installed and opened for the first time on that device. It's powerful (and private).
