---
type: overview
title: Our Technology
platforms:
- web
---

# Our Technology

------
platform: {{ page.platform %}}
default: {{ page.default }}

{% protip title='Check out this Protip!' icon='fa-coffee' %}
 details details details details details details
{% endprotip %}

{% tabs %}
{% tab objective-c %}
# First

{% highlight javascript %}
  function greet(name) {
    console.log('hello, ' + name);
  }
{% endhighlight %}
{% endtab %}
{% tab swift %}
# Second

{% highlight javascript %}
  function farewell(name) {
    console.log('goodbye, ' + name);
  }
{% endhighlight %}

{% endtab %}
{% endtabs %}
