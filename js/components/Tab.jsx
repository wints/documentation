var React = require('react');

var Tab = React.createClass({
	render: function() {
		return <div className="tab">
			<h1>{ this.props.name }</h1>
			<div>
				{ this.props.children }
			</div>
		</div>;
	}
});

module.exports = Tab;
