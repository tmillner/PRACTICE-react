import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = { 
			theText : "Just loaded",
			disclaimer : "(This is a disclaimer)",
		};
		this.update = this.update.bind(this);
	}

	update(e) {
		// Using deconstruction to manipulate specific property
		this.setState({disclaimer : e.target.value});
	}

	render() {
		let txt = this.props.theText;
		return (
			<div>
				<h1>
				<i>Hello World ({txt})<br /> - {this.props.sig}</i>
				</h1>
				<br />
				// Each of the following will reference this sole instance (this)
				// bc this is a class and the reference is static const prop.
				// To work on a single instance will need to use refs
				<Widget disclaimer={this.state.disclaimer} update={this.update} />
				<Widget disclaimer={this.state.disclaimer} update={this.update} />
				<Widget disclaimer={this.state.disclaimer} update={this.update} />
			</div>
		);
	}
};

// Use this static const prop
const Widget = (props) => {
	return (
		<div>
			<small>{props.disclaimer}</small>
			<input type='text' onChange={props.update} />
		</div>
	);
};

/* PROPS are more common for static values and methods */
App.propTypes = {
	theText : React.PropTypes.string,
	secondText : React.PropTypes.number.isRequired,
	sig : React.PropTypes.string
};

// This is convinenet to use IF not using state, state being
// set in the constructor. Likely less common
App.defaultProps = {
	theText : 'From The First App',
	secondText : 50,
	sig : "Trevor"
};

// secondText is required, can't be '90' or secondtext=90 
// If the 'sig' property is specified, AT ALL... It 
//   counts as present ""
ReactDOM.render(
	<App theText='From First App' secondText={90}/>,
	document.getElementById('theApp')
);