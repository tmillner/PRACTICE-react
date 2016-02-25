import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			'green' : 0,
			'lifespan' : 0
		};
		this.update = this.update.bind(this);
	};

	update(e){
		this.setState({
			'green' : ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			'lifespan' : ReactDOM.findDOMNode(this.refs.lifespan.refs.inp).value,
		});
	};

	render() {
		return (
			<div>
				 <NumInput ref="green"
		          min={0}
		          max={255}
		          step={0.01}
		          val={+this.state.green}
		          type="number"
		          label="Red"
		          update={this.update} />
		          <br />
		          <NumInput ref="lifespan"
		          min={0}
		          max={50}
		          val={+this.state.lifespan}
		          label="Lifespan in the 1300s"
		          update={this.update} />
			</div>	
		);
	};
};

class NumInput extends React.Component {
	render() {
		let label = this.props.label !== '' ? 
		<label>{this.props.label} - {this.props.val}</label> : 
		'';
		return (
			<div>
				<input ref='inp' 
				min={this.props.min}
				max={this.props.max}
				step={this.props.step}
				defaultValue={this.props.val}
				type={this.props.type}
				onChange={this.props.update} />
				{label}
			</div>
		);
	}
};

NumInput.propTypes = {
	min: React.PropTypes.number,
	max: React.PropTypes.number,
	step: React.PropTypes.number,
	val: React.PropTypes.number,
	label: React.PropTypes.string,
	update: React.PropTypes.func.isRequired,
	type: React.PropTypes.oneOf(['number', 'range'])
};

NumInput.defaultProps = {
	min: 0,
	max: 0,
	step: 1,
	val: 0,
	label: '',
	type: 'range'
};

ReactDOM.render(<App />, document.getElementById('theApp'));
