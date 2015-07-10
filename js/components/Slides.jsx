var React = require('react'),
	utils = require('../support/utils');

var ProgressBar = React.createClass({
	render: function() {
		var width = Math.floor(((this.props.i + 1) / this.props.length) * 100);
		return (
			<div className="progress">
				<div className="progress-bar" style={{ width: width + '%' }}></div>
			</div>)
	}
});

var Slides = React.createClass({
	getInitialState: function() {
		var search = typeof window !== 'undefined' ? window.location.search : '';
		var query = utils.getUrlQuery(search);
		return { i: +query.i || 0 }
	},
	_advance: function() {
		var new_state = { i: this.state.i + 1 };
		utils.setUrl('/learn_more/' + utils.buildUrlQuery(new_state));
		this.setState(new_state);
	},
	render: function() {
		return (
			<div className="container">
				<div className="row slides-box">
					{ this.props.children[this.state.i] }
				</div>
				<div className="row text-center">
					<ProgressBar i={ this.state.i } length={ this.props.children.length }/>
				</div>
				<div className="row text-center">
					<a onClick={ this._advance } className="btn btn-lg-icon btn-highlighted">
						<i className="branch-icon branch-angle-right-circle"></i> Next
					</a>
				</div>
			</div>);
	}
});

module.exports = Slides;
