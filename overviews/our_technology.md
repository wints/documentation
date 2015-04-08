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

> hey there



{% tabs %}
{% tab ios %}
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
