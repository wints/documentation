var React = require('react'),
	R = require('ramda'),
	cx = require('../support/utils').cx;

var PlatformStore = require('../stores/PlatformStore'),
	PlatformActions = require('../actions/PlatformActions');

function getStateFromStore() {
	return PlatformStore.getState();
}

var PlatformSelector = React.createClass({
	getInitialState: function() {
		return getStateFromStore();
	},
	componentDidMount: function() {
		PlatformStore.listen(this._onChange);
	},
	componentWillUnmount: function() {
		PlatformStore.unlisten(this._onChange);
	},
	_onChange: function() {
		this.setState(getStateFromStore());
	},
	_handleClick: function(key) {
		return function() { PlatformActions.updatePlatform(key); }
	},
	render: function() {
		var self = this;
		var platforms = R.map(function(platform) {
			classes = {
				'btn btn-default': true,
				'btn-inactive': self.state.platform != platform.key
			}
			return (
				// TODO current_path
				<a className={ cx(classes) } key={ platform.key } href={ '/overviews/what_is_branch/' + platform.key } onClick={ self._handleClick(platform.key) }>
					{ platform.name }
				</a>);
		});

		return (
			<div className="row text-center">
				<div className="btn-group">
					{ platforms(this.props.platforms) }
				</div>
			</div>);
	}
});

module.exports = PlatformSelector;
