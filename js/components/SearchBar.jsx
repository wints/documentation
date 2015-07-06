var React = require('react');
var app = require('../search/app')

var SearchBar = React.createClass({
	getInitialState: function() {
		return {field: '', data: []};
	},
	inputChanged: function(event) {
		this.setState({field: event.target.value});
		var searched = app.top5(this.state.field);
		if (searched && searched[0]) { this.setState({data: searched}); }
	},
	render: function() {
			var results = [];
			if (this.state.data[0]) {
				for (var i = 0; i < 5; i++) {
					results.push(<SearchResult title={this.state.data[i].title} link={this.state.data[i].id}/>);
				}
			}
		return (
			<div>
				<div>
					<form className="search-bar">
						<input type="text" name="search" className="search" onChange={this.inputChanged} value={this.state.field} />
					</form>
				</div>
				<div id="search-img-div">
					<img id="search-img" onClick={this.handleClick} src='http://www.skill-capped.com/images/icons/glyphicons/glyphicons_027_search@2x.png' alt='Search Symbol' className='search' />
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
		var divStyle = {
			'borderStyle': 'solid',
			'borderColor': 'black',
			'width': '200px'
		};
		return (<div className="search-result"><a href={this.props.link} className="search-link">{this.props.title}<span className="search-span"></span></a></div>);
	}
});

module.exports = SearchBar;