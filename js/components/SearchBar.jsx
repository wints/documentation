var React = require('react'),
	R = require('ramda'),
	lunr = require('lunr');

var SearchStore = require('../stores/SearchStore'),
	SearchActions = require('../actions/SearchActions'),
	customSWF = require('../search/custom_stop_word_filter');

function getStateFromStore() {
	return SearchStore.getState();
}

var SearchBar = React.createClass({
	getInitialState: function() {
		return R.merge({ field: '' }, SearchStore.getState());
	},
	componentDidMount: function() {
		lunr.Pipeline.registerFunction(customSWF, 'customSWF');
		SearchStore.listen(this._onChange);
	},
	componentWillUnmount: function() {
		SearchStore.unlisten(this._onChange);
	},
	_onChange: function() {
		this.setState(getStateFromStore());
	},
	inputChanged: function(event) {
		this.setState({ field: event.target.value }, function(err) {
			if (err) { throw err; }
			if (!this.state.isLoaded) { return; }
			SearchActions.search(this.state.field, this.state.indexes);
		});
	},
	handleClick: function() {
		if (!this.state.isLoaded && !this.state.isLoading) { SearchActions.loadIndex(); }
	},
	render: function() {
		if (this.state.results.length) {
			var self = this;
			var results = R.map(function(result) {
				return (
					<SearchResult
						title={result.title}
						link={'http://dev.branch.io' + result.url}
						origin={result.origin}
						context={result.context}
						key={result.id} />);
			}, this.state.results);
		}
		return (
			<div className="search">
				<div className="search-bar">
					<form className="navbar-form">
						<input
							type="text"
							name="search"
							className="form-control"
							autoComplete="off"
							placeholder="Search"
							onChange={this.inputChanged}
							onClick={this.handleClick}
							value={this.state.field} />
					</form>
				</div>
				<div className="search-icon">
					<i className="fa fa-search"></i>
				</div>
				<div className="search-results">
					{results}
				</div>
			</div>
		);
	}
});

var SearchResult = React.createClass({
	_onClick: function() {
		window.location = this.props.link;
	},
	render: function() {
		return (
			<div className="search-results__result" onClick={this._onClick}>
				<a href={this.props.link} className="search-results__result__link">{this.props.title}
					<span className="search-results__result_span"></span>
				</a>
				<span className="search-results__result__origin">{this.props.origin}</span>
				<span className="search-results__result__context">{this.props.context[0]}<strong>{this.props.context[1]}</strong>{this.props.context[2]}</span>
			</div>);
	}
});

module.exports = SearchBar;
