import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = (InnerComponent) => class extends React.Component{
	constructor() {
		super();
		this.update = this.update.bind(this);
		this.state = {'v' : 0};
	};

	update() {
		this.setState({v : this.state.v + 1});
	};

	componentWillMount() {
		console.log('component will mount');
		this.setState({'m' : 10});
	};

	// Note the importance of this patterns mechanism
	//  it spreds the attributes of known props & state
	//  to the returned instance. The instance treats them
	//  as properties of they are listed out
	render() {
		return (<InnerComponent update={this.update}
			{...this.props} 
			{...this.state}
		/>);
	};

	componentDidMount() {
		console.log('component did mount (exists on the DOM)');
		console.log(ReactDOM.findDOMNode(this));
	};
};

const Button = (props) => {
	return (<button onClick={props.update}>
		{props.txt} - {props.v * props.m}
	</button>);
};

const Label = (props) => {
	return(<label onMouseOver={props.update}>
		{props.txt} - {props.v * props.m}
	</label>);
};

let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class App extends React.Component {
	render() {
		return (
			<div>
				<ButtonMixed txt='BUTTON' />
				<br />
				<LabelMixed txt='Label' />
			</div>
		);
	};
};

// Although v is set in constructor, doesn't hurt to be redundant
App.defaultProps = {'txt' : 'SomeElement', v : 0};

// Starting from default props, this will be 
//  re-rendered on update AND WITH NEW PROPS
ReactDOM.render(<App />, document.getElementById('theApp'));
