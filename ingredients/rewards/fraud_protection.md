
{% section header %}## Fraud Protection{% endsection %}

While a bulletproof referral program is impossible, we do our best with a number of different mechanisms to stop high level fraud. 

1. We track the hardware ID and IDFA of the device and tie our concept of a user identity to that identifier, preventing the cases of the same user triggering an event multiple times, and subtracting rewards when we detect fraud (multiple attempts to claim a reward from the same device). 
2. Further, we merge identities so that if a user signs in on their iPhone and then their iPad using the same Facebook ID, when you let Branch know that this is the same user (via a setIdentity call), we'll make sure any duplicate reward is removed. 

This means that while testing you may run into issues if you test repeatedly with the same devices. When testing referral programs and reward rules, you should consider using `setDebug` -- more on that {% section setdebug %}[on our Debug Tools page]{% endsection %}(/references/debug_tools/ios/#use-setdebug-to-simulate-fresh-installs).
