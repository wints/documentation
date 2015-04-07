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
~~~ javascript
  function greet(name) {
    console.log('hello, ' + name);
  }
~~~
{% endtab %}
{% tab swift %}
# Second
~~~ javascript
  function farewell(name) {
    console.log('goodbye, ' + name);
  }
~~~
{% endtab %}
{% endtabs %}
