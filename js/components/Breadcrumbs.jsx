var React = require('react'),
	R = require('ramda'),
	cx = require('../support/utils').cx;

var Breadcrumb = React.createClass({
	render: function() {
		if (!this.props.href) {
			return (<li>{ this.props.label }</li>);
		}
		else {
			return (<li><a href={ this.props.href }>{ this.props.label }</a><i className="fa fa-chevron-right"></i></li>);
		}
	}
});

var Breadcrumbs = React.createClass({
	extractPath: function(tree, str) {
		if (tree === str) {
			return [ str ];
		}
		var result = null;
		if (tree.children) {
			tree.children.forEach(function(value) {
				var extractRes = this.extractPath(value, str);
				if (extractRes !== null) {
					extractRes.push(tree.title);
					result = extractRes;
				}
			}.bind(this));
		}
		return result;
	},
	render: function() {
		var path = this.props.current_path.split('/'),
			currentPage = path[path.length - 1],
			tree = this.props.layout[0];

		var links = [],
			breadcrumbs = this.extractPath(tree, currentPage);
		if (breadcrumbs) {
			breadcrumbs = breadcrumbs.reverse();
			var breadcrumbsCount =  breadcrumbs.length;
			breadcrumbs.forEach(function(link, index) {
				if (index == breadcrumbsCount - 1) {
					links.push(<Breadcrumb label={ link } />);
				}
				else {
					links.push(<Breadcrumb label={ link } href="#" />);
				}
			});
		}

		return (<ul className="breadcrumbs">
			{ links }
		</ul>);
	}
});

module.exports = Breadcrumbs;
