Documentation
=======

### Install Jekyll and Dependencies
```
sudo gem install therubyracer less jekyll kramdown s3_website byebug
```

### Open another terminal console and start jekyll
```
jekyll serve --watch
```

Derrick's comments
=======

- need Obj-C/Swift UI element
- I want special styling for the "tips"


Future todos
=======

- React -> binding components to docs so we can show progress / encourage users
- Handle case where user moves to recipe that doesn't support platform (what happens if a given recipe is iOS/Android only and user was previously on web?). being sure to return to previously platform when clicking out of recipe without that previous platform. (Ask Derrick if unclear)


Overview for the team
=======

The new documentation will have 4 parts:

1. Overview
1. Recipes
1. Domains
1. Reference Docs

Right now we are primarily focused on 2. Recipes and 3. Domains, as well as the components from which they are both composed, aka Ingredients.

`Recipes`: The fastest way for developers to implement Branch. Provides the bare minimum number of steps to integration, as well as `tips` pointing developers toward all the configuration options we offer. Composed of `ingredients`.

`Domains`: Lists of the various `ingredients` for a given domain. For example, all information related to programmatically creating links belongs on one page. Like `recipes`, domains are composed of `ingredients`.

`Ingredients`: The pieces. A short, self-contained explanation and/or code sample. 

---

The next thing to be aware of is our syntax.

[TODO]

