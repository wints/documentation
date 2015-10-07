---
---

window.Tab = require('./components/Tab');
window.Tabs = require('./components/Tabs');
window.Slides = require('./components/Slides');
window.Slide = require('./components/Slide');
window.SidebarCollection = require('./components/SidebarCollection');
window.PlatformSelector = require('./components/PlatformSelector');
window.SearchBar = require('./components/SearchBar');
window.AnchorHeader = require('./components/AnchorHeader');

window.React = require('react');

window.PlatformActions = require('./actions/PlatformActions');

require('../_includes/branch-web-assets/components/navbar/navbar');

//Google Analytics 
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-53307642-4', 'auto');
  ga('send', 'pageview');
