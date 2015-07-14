var React = require('react'),
	R = require('ramda');

var SearchStore = require('../stores/SearchStore'),
	SearchActions = require('../actions/SearchActions');

function getStateFromStore() {
	return SearchStore.getState();
}

var SearchBar = React.createClass({
	getInitialState: function() {
		return SearchStore.getState();
	},
	componentDidMount: function() {
		SearchActions.registerCustomSWF();
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
			var searched = SearchActions.top5(this.state.field, JSON.parse(this.state.indexes));
			if (this.state.field.length <= 1) { this.setState({ data: [] }); }
			else if (searched && searched[0]) { this.setState({ data: searched }); }
		});
	},
	handleClick: function() {
		SearchActions.loadIndex();
	},
	render: function() {
		if (this.state.data[0]) {
			var self = this;
			var results = R.map(function(result) {
				return (
					<SearchResult
						title={result.title}
						link={'http://dev.branch.io' + result.url}
						origin={SearchActions.getResultOrigin(result)}
						context={SearchActions.getContext(result, 7, self.state.field)}
						key={result.id} />);
			}, this.state.data);
		}
		return (
			<div>
				<div className="search-bar">
					<form className="search-bar__form simplebox">
						<input 
							type="text"
							name="search"
							className="search-bar__input"
							autoComplete="off"
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
	render: function() {
		return (
			<div className="search-results__result">
				<a href={this.props.link} className="search-results__result__link">{this.props.title}
					<span className="search-results__result_span"></span>
				</a>
				<span className="search-results__result__origin">{this.props.origin}</span>
				<span className="search-results__result__context">{this.props.context[0]}<strong>{this.props.context[1]}</strong>{this.props.context[2]}</span>
			</div>);
	}
});

module.exports = SearchBar;
