var React = require('react'),
	R = require('ramda');

var cx = R.pipe(
	R.pickBy(R.identity),
	R.keys(),
	R.join(' ')
)

var Tabs = React.createClass({
	getInitialState: function() {
		return { active: 0 };
	},
	_toggleTab: function(i) {
		return function() {
			this.setState({ active: i });
		}.bind(this);
	},
	render: function() {
		var self = this;

		var names = R.mapIndexed(function(val , i) {
			var classes = {
				'btn btn-default': true,
				'btn-inactive': i != self.state.active
			};
			return (<a className={ cx(classes) } onClick={ self._toggleTab(i) }>{ val.props.name }</a>);
		}, this.props.children);

		return (
			<div className="tabs">
				<div className="row">
					{ this.props.children[this.state.active] }
				</div>
				<div className="row">
					<div className="float-right">
						{ names }
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Tabs;
