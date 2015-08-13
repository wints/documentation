Editing Documentation
=====================

[(who has time for a 20 minute video?)](http://youtu.be/UHejpjQOygQ)

The documentation is its own system now. I'm going to start with various observations and maybe this will evolve into a better doc in the future.

## Viewing the docs

* Follow the instructions in [README.md](https://github.com/BranchMetrics/documentation/blob/master/README.md) to get it up and running. 
* The command you run after everything is set up is `bundle exec jekyll serve --watch`
* Then navigate to [localhost:4000](localhost:4000))


## Editing the docs

* `master` is actually our production branch! **If you push changes to the master branch, they will be deployed!** Make changes on a branch then submit a PR. Ask for someone to thumb it up. Only after it is thumbed should you merge to master.
* You will primarily be changing files inside the following directories:
	*  overview
	*  recipes
	*  domains
	*  ingredients
	*  img
* Never edit anything inside the _site directory -- these are all generated files
* Ask before editing files elsewhere unless you're extremely confident that you know what you're doing


## WTF is ingredient, domain, recipe, overview... gah

* So our naming conventions will likely continue to evolve over time. But the original terms we used were ingredient and recipe. Ingredients are used in recipes.
* Then we realized that ingredients could be usefully grouped together. We call these domains. @Alex doesn't like them so they may go away eventually. (If they do, then we will need to build out really great reference docs that also pull from the ingredients. We don't want code living in different places--then changes involve finding all the places that need to change and changing them.)
* Tack on overviews and you now have the three primary groupings on the left menu:

	1. Overviews
	2. Recipes (called "Integration Guides")
	3. Domains (called "Building Blocks")

* again, all three are comprised of ingredients


## Again, because I skipped the previous section, what are ingredients and how do they fit in? 

* Ingredients are the little pieces that everything else is composed of
* Ingredients are imported into the files for:
	* overview
	* recipes
	* domains
* they are imported using the following syntax:

```
{% ingredient parent_folder/exact_ingredient_name %}{% endingredient %}
```
* This is a form of markdown. Meaning these are tags. Meaning you can put things inside the tags. And there are other tags...


## Tags

We actually have a few different tags:

1. `{% ingredient %}{% endingredient %}`
2. `{% section %}{% endsection %}` and `{% override %}{% endoverride %}`
3. `{% if %}{% endif %}`
4. `{% protip %}{% endprotip %}`
5. `{% highlight %}{% endhighlight %}`
6. `{% tabs %}{% endtabs %}`


## Explanation/Examples of the tags in actions

1. **Ingredient**. Example (from /recipes/advertising_facebook.md):

	```
	{% ingredient dashboard_setup/app_name %}{% endingredient %}
	```
	
	These are used in overviews, recipes, and domains.


2. **Section/Override**. Sometimes you'll want to change something inside an ingredient. Custom explanation for one guide, tweak where a link directs, etc. It's quite common. In order for this to be possible, you have to:

	a. find the content inside the ingredient that you want to be able to "override" on a case-by-case basis when importing recipes => wrap it in the {% section %}{% endsection %} tags. Example (in ingredient):
	
		{% section header %}## Best Title Ever{% endsection %}
		
	b. then inside the overview, recipe or domain where you want to override part of the ingredient, use the {% override %}{% endoverride %} tags. Make sure you specify the same name that was used for the section. Example (in recipe, etc.):
	
		{% override header %}## Even Better Title!{% endoverride %}

	This pattern is used extensively throughout the docs, so make sure you become familiar with it. Because pieces of ingredients can be overridden, there is coupling between ingredients and the recipes (& domains & overviews) that they are used in. This coupling may grow over time...
	
3. **If**. If is exclusively used for dealing with platform differences. So you will usually see `{% if page.ios %}App{% endif %}{% if page.android %}Play{% endif %} Store` or some similar patter. This example results in either `App Store` or `Play Store` depending on the platform.

4. **Protip**. This is for "quick hits" or warnings. We shouldn't go overboard on these. Here's one example:

	```
	{% protip title="Branch links work even on first install!" %}
	With standard deeplinks, if a user doesn't have the app, the link fails. 
	With Branch links, users without the app will be directed to the 
	{% if page.ios %}App{% endif %}{% if page.android %}Play{% endif %} Store 
	-- and upon opening the app can be deeplinked! This is called 
	*Deferred Deep Linking*.{% endprotip %}
	```
	
	I don't usually do new lines -- that was just for this example.
	
5. **Highlight%%. This is for code. It's good practice to specify the language. Here's an example:

	```
	{% highlight java %}
   Branch.getInstance(getApplicationContext()).setDebug();
	{% endhighlight %}
	```

6. **Tabs**. Example (see similar in ingredients/sdk_links/*):

```
{% tabs %}
{% tab objective-c %}
{% highlight objc %}

// Objective C code here

{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}

// Swift code here

{% endhighlight %}
{% endtab %}
{% endtabs %}
```