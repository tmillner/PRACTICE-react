import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = { 
			'red' : 0,
			'green' : 0,
			'blue' : 0,
			'misc': 0
		};
		this.update = this.update.bind(this);
	};

	update(e) {
		this.setState({
			'red' : ReactDOM.findDOMNode(this.refs.red).value,
			'green' : ReactDOM.findDOMNode(this.refs.green).value,
			'blue' : ReactDOM.findDOMNode(this.refs.blue).value,
			'misc' : ReactDOM.findDOMNode(this.refs.aNode.refs.misc).value
		});
	};

	render() {
		return (
			// Utilize refs for a single instance update 
			//
			<div>
				<Slider ref='red' update={this.update} />
				{this.state.red}
				<br />
				<Slider ref='green' update={this.update} />
				{this.state.green}
				<br />
				<Slider ref='blue' update={this.update} />
				{this.state.blue}
				<br />
				<VerboseSlider ref='aNode' update={this.update} />
				{this.state.misc}
				< br />
				//// NOTE: This comment appears on the DOM???!
			</div>
		);
	};
};

class Slider extends React.Component {
	render() {
		return (
			<input type='range' min='0' max='255' 
			onChange={this.props.update} />
		);
	};
};

class VerboseSlider extends React.Component {
	render() {
		// NOTE: Don't put the ref on the outtermost node!
		// On update it's like setting the value attr of the element
		//   being of no use
		return (
			<span>
			<input ref='misc' type='range' min='0' max='255' 
			onChange={this.props.update} />
			</span>
		);
	};
};


export default App;