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