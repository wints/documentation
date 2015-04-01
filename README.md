Documentation
=======

### Install Jekyll and Dependencies
```
sudo gem install jekyll rdiscount compass s3_website
```

### Install npm dependencies
```
npm install
```

### Run gulp to compile and watch js and scss
```
gulp watch
```

### Open another terminal console and start jekyll
```
jekyll serve --watch
```

Derrick's comments
=======

- for linking to pages, I'm specifying an absolute path. That seems a bit obnoxious and error-prone.
- when I want to link to a place in a page, I'm specifying an absolute path down to the index.html#location_on_page. I have to place the <a id="location_on_page"> I'd love to have a simpler way to do this, but it may be more work than it's worth.
- so it looks like i'm going to be putting code samples in-line in the ingredient. do we have a better way to do this? we kinda punted on this question, last I recall.
- Objective C vs Swift -- do we want separate pages? I'd prefer them be side-by-side
- I want special styling for the "tips"
- Numbers for sections is going to be a nightmare. As is what size a given section should be based on the number of pound signs `#`
- Maybe we could somehow pull in only one part of an ingredient? Like `{% pluck links_and_sharing links_and_sharing_customizing_url_desktop_url %}` would only pull in the $desktop_url from links and sharing? Excluding everything is far more tedious.
- it'd be nice to have some simple styling so code examples aren't necessarily shown for every single option on the links and sharing page. or in general. having some sort of "click to view example" that then expands into a code box might save some real estate / busy-ness
- the goal is maintainability for the future. but i feel like we're being trapped in a structure with rigid rules that others won't fully understand

- we have a lot to figure out. i need to keep dropping in content so we can see how feasible this is