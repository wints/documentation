var React = require('react');
var app = require('../search/runScripts/app')

var SearchBar = React.createClass({
	getInitialState: function() {
		// app.register();
		return { blurred: true, field: '', data: [] };
	},
	inputChanged: function(event) {
		this.setState({ field: event.target.value }, function(err) {
			if (err) { throw err; }
			var searched = app.top5(this.state.field);
			if (this.state.field.length <= 1) { this.setState({ data: [] }); }
			else if (searched && searched[0]) { this.setState({ data: searched }); }
		});
	},
	handleClick: function() {
		this.setState({ blurred: false });
	},
	render: function() {
			var results = [];
			var link = '';
			if (this.state.data[0] && !this.state.blurred) {
				for (var i = 0; i < this.state.data.length; i++) {
					url = 'http://dev.branch.io' + this.state.data[i].url;
					results.push(<SearchResult title={this.state.data[i].title} link={url} origin={app.getResultOrigin(this.state.data[i])} context={app.getContext(this.state.data[i], 7, this.state.field)} key={this.state.data[i].id} />);
				}
			}
		return (
			<div>
				<div className="search-bar-div">
					<form className="search-bar simplebox">
						<input type="text" name="search" className="search" autoComplete="off" onChange={this.inputChanged} onClick={this.handleClick} value={this.state.field} />
					</form>
				</div>
				<div id="search-img-div">
					<img id="search-img" src='http://www.skill-capped.com/images/icons/glyphicons/glyphicons_027_search@2x.png' alt='Search Symbol' className='search' />
				</div>
				<div className="search-div">
					{results}
				</div>
			</div>
		);
	}
});

var SearchResult = React.createClass({
	render: function() {
		return (<div className="search-result">
					<a href={this.props.link} className="search-link">{this.props.title}
						<span className="search-span"></span>
					</a>
					<span className="search-origin">{this.props.origin}</span>
					<span className="search-context">{this.props.context[0]}<strong>{this.props.context[1]}</strong>{this.props.context[2]}</span>
				</div>);
	}
});

module.exports = SearchBar;
