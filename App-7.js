import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.update = this.update.bind(this);
		this.state = {'increasing' : false};
	};

	update() {
		ReactDOM.render(<App val={this.props.val+1} />, document.getElementById('theApp'));
	};

	// Component native method
	// Like an event fired if component will recieve a prop
	componentWillReceiveProps(nextProps) {
		this.setState({'increasing' : nextProps.val > this.props.val});
	};

	// Component native method
	// Every 5 clicks, the component should update
	// NOTE: This ONLY checks if it should be re-rendered the props,
	//  and state will still be tracked
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.val % 5 === 0;
	};

	// Component native method
	// NOTE: As with the shouldComponentUpdate, the props,
	// and state are still being tracked, just not rerendered
	componentDidUpdate(prevProps, prevState) {
		console.log('prevProps', prevProps)
	};

	render() {
		console.log('The state of increasing is', this.state.increasing);
		return <button onClick={this.update}>{this.props.val}</button>
	};
};

App.defaultProps = {val : 0};

// Starting from default props, this will be 
//  re-rendered on update AND WITH NEW PROPS
ReactDOM.render(<App />, document.getElementById('theApp'));
//export default App;
