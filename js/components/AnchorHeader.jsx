var React = require('react'),
	R = require('ramda'),
	cx = require('../support/utils').cx;

var AnchorHeader = React.createClass({
	render: function() {
		return (<h4 className="toc-title">
				<strong>{ this.props.children }</strong>
			</h4>);
	}
});

module.exports = AnchorHeader;
