var React = require('react');

var Tabs = React.createClass({
	render: function() {
		return <div className="tabs">{ this.props.children }</div>;
	}
});

module.exports = Tabs;
