var React = require('react'),
	R = require('ramda'),
	cx = require('../support/utils').cx;

var PlatformStore = require('../stores/PlatformStore'),
	PlatformActions = require('../actions/PlatformActions');

function getStateFromStore() {
	return PlatformStore.getState();
}

var GroupPages = React.createClass({
	render: function() {
		var self = this;
		var pages = R.map(function(page) {
			var path = [ self.props.type + 's', page.path ],
				pageClass = { 'active': self.props.page_name == page.path };
			if (page.platforms[self.props.platform]) { path.push(self.props.platform); }

			return (
				<li className={ cx(pageClass) }>
					<a href={ '/' + path.join('/') }>{ page.title }</a>
				</li>);
		});
		return <ul>{ pages(this.props.pages) }</ul>
	}
});

var Sidebar = React.createClass({
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
	render: function() {
		var self = this;
		var groups = R.map(function(group) {
			return (
				<div className="sidebar-group">
					<div className="sidebar-title">{ group.title }</div>
					<GroupPages pages={ group.pages } type={ group.type } platform={ self.state.platform }/>
				</div>);
		});

		return (
			<div className="sidebar">
				{ groups(this.state.site_map) }
			</div>);
	}
});

module.exports = Sidebar;
