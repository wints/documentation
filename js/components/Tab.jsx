var React = require('react');

var Tab = React.createClass({
	render: function() {
		return <div className="tab">
			<div>
				{ this.props.children }
			</div>
		</div>;
	}
});

module.exports = Tab;
