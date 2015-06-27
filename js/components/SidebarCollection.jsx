var React = require('react'),
	R = require('ramda'),
	cx = require('../support/utils').cx;

var PlatformStore = require('../stores/PlatformStore'),
	PlatformActions = require('../actions/PlatformActions');

function getStateFromStore() {
	return PlatformStore.getState();
}

var LinkInternal = React.createClass({
	render: function(){
		var props = this.props,
			page_key = props.page_key,
			page = props.group_data[page_key];
		if (!page) {
			throw 'ERROR: There is no PAGE: ' + page_key + ' with the TYPE: ' + props.type;
		}
		var path = props.type ? [props.type, page_key] : [page_key],
			isCurrentPath = props.current_path == path.join('/');

		if (page.platforms[props.platform]) {
			path.push(props.platform);
		}
		return (<li className={ cx({ 'active': isCurrentPath }) }>
				<a href={ '/' + path.join('/') }>{ page.title }</a>
			</li>);
	}
});

var LinkExternal = React.createClass({
	render: function(){
		var target = this.props.target || '_self';
		return (<li>
				<a href={ this.props.href } target={target}>{ this.props.label }</a>
			</li>);
	}
});

var GroupPages = React.createClass({
	render: function() {
		var props = this.props;
		// overview pages live in root where as all other page types are in plural form. i.e. receipe -> recipes
		var type = props.type != 'overview' ? props.type + 's': null;
		var pages = R.map(function(page) {
			if(type == 'links'){
				return (
					<LinkExternal
						key={page.label}
						label={page.label}
		                href={page.href}
		                target={page.target} />);
			}
			else {
				return (
					<LinkInternal
						key={page}
						type={type}
						page_key={page}
						group_data={props.group_data}
						platform={props.platform}
						current_path={props.current_path}/>);
			}
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
		var classes = ['sidebar'];
		if(self.props.settings.className){
			classes.push(self.props.settings.className);
		}
		return (
			<div className={classes.join(' ')}>
				{ groups(this.props.layout) }
			</div>);
	}
});

var SidebarCollection = React.createClass({
	render: function(){
		var self = this,
			props = self.props,
			sidebars = [];
		Object.keys(props.layout).forEach(function(key){
			sidebars.push(
				<Sidebar key={key}
					current_path={props.current_path}
                    site_map={props.site_map}
                    layout={props.layout[key].navigation}
					settings={props.layout[key].settings} />);
		});
		return (
			<div className="sidebar-collection">
				{sidebars}
			</div>);
	}
});

module.exports = SidebarCollection;
