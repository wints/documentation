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
		var props = this.props;
		// overview pages live in root where as all other page types are in plural form. i.e. receipe -> recipes
		var type = props.type != 'overview' ? props.type + 's': null;
		var pages = R.map(function(page_key) {
			var page = props.group_data[page_key];
			if (!page) { throw 'ERROR: There is no PAGE: ' + page_key + ' with the TYPE: ' + props.type; }

			var path = type ? [ type, page_key ] : [ page_key ],
				isCurrentPath = props.current_path == path.join('/');
			if (page.platforms[props.platform]) {
				path.push(props.platform);
			}
			return (
				<li className={ cx({ 'active': isCurrentPath }) } key={ page.title }>
					<a href={ '/' + path.join('/') }>{ page.title }</a>
				</li>);
		});

		return <ul>{ pages(props.pages) }</ul>
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
			if (!group.pages.length) { return; }
			// console.log(self.props.site_map[group.type]);
			return (<div className="sidebar-group" key={ group.title }>
					<div className="sidebar-title">{ group.title }</div>
					<GroupPages
						pages={ group.pages }
						type={ group.type }
						current_path={ self.props.current_path }
						group_data={ self.props.site_map[group.type] }
						platform={ self.state.platform }/>
				</div>);
		});
		return (
			<div className="sidebar">
				{ groups(this.props.layout) }
			</div>);
	}
});

var SidebarCollection = React.createClass({
	render: function(){
		var self = this,
			sidebars = [];
		Object.keys(self.props.layout).forEach(function(key){
			sidebars.push(
				<Sidebar key={key}
					current_path={self.props.current_path}
                    site_map={self.props.site_map}
                    layout={self.props.layout[key]} />);
		});
		return (
			<div className="sidebarCollection">
				{sidebars}
			</div>);
	}
});

module.exports = SidebarCollection;
