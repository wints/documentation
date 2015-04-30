Editing Documentation
=====================

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

## What are ingredients and how do they fit in?

* Ingredients are the little pieces that everything else is composed of
* Ingredients are imported into the files for:
	* overview
	* recipes
	* domains
* they are imported using the following syntax:

```
{% ingredient parent_folder/exact_ingredient_name %}{% endingredient %}
```
* This is a form of markdown. Meaning these are tags. Meaning you can put things inside the tags. We actually have a few different tags:
	* `{% ingredient %}{% endingredient %}`
	* `{% section %}{% endsection %}` and `{% override %}{% endoverride %}`
	* `{% if %}{% endif %}`
	* 


* Here is a concrete example from /recipes/deeplinked_ads.md that pulls in an ingredient:

```
{% ingredient dashboard_setup/app_name %}{% endingredient %}
```
