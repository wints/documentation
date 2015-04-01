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

- for linking to pages, I'm specifying an absolute path. That seems a bit obnoxious and error-prone
- when I want to link to a place in a page, I'm specifying an absolute path down to the index.html#location_on_page. I have to place the <a id="location_on_page"> I'd love to have a simpler way to do this, but it may be more work than it's worth.
