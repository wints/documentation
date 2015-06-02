
## Setting a custom link domain

While you may enjoy Branch, it doesn't mean you need to have bnc.lt as a part of every link you send out. If you want Branch links to use your custom subdomain, you need to follow a few simple steps.

1. You need to choose a subdomain, let get.myapp.co.
2. You need to point the CNAME record for this subdomain at us -- bnc.lt is our link service.
3. After you've confirmed that the CNAME records have propagated throughout the internet, you need to set your custom subdomain on our Dashboard > Settings > [Link Settings](https://dashboard.branch.io/#/settings/link) > Custom Link Domain. See the screenshot below.

![always open app](/img/ingredients/dashboard_setup/custom_link_domain3.png)

After you set this up, the custom subdomain you specify will be the basis of all Branch links created. As a side note, if a user types in your custom subdomain on its own (e.g. get.myapp.co), we will redirect to your Default URL as specified on the [Link Settings](https://dashboard.branch.io/#/settings/link) page.

Lastly, if you want to use your root-level domain (like myapp.com), you will need to make use of a service like CloudFlare. Check out the following two articles:

1. [https://blog.cloudflare.com/zone-apex-naked-domain-root-domain-cname-supp/](https://blog.cloudflare.com/zone-apex-naked-domain-root-domain-cname-supp/)
2. [https://support.cloudflare.com/hc/en-us/articles/200169056-CNAME-Flattening-RFC-compliant-support-for-CNAME-at-the-root](https://support.cloudflare.com/hc/en-us/articles/200169056-CNAME-Flattening-RFC-compliant-support-for-CNAME-at-the-root)

