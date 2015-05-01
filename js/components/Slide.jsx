var React = require('react');

var Slide = React.createClass({
	render: function() {
		return (
			<div className="indvidual">
				{ this.props.children }
			</div>);
	}
});

module.exports = Slide;
