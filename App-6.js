import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		// this.value = 0; // Don't use plain values, use state!
		this.state = {value : 0};
		this.update = this.update.bind(this);
	};

	update() {
		this.setState({value : this.state.value + 1});
	};

	// Component native Lifecycle method
	componentWillMount() {
		console.log('will mount, but not in the DOM yet (only state setup)');
		this.setState({m : 2});
	};

	render() {
		console.log('rendering');
		return <button onClick={this.update}>{this.state.value * this.state.m}</button>
	};

	// Component native Lifecycle method
	componentDidMount() {
		console.log('did mount, and exists on the DOM');
		console.log(ReactDOM.findDOMNode(this));
		this.inc = setInterval(this.update, 1000);
	};

	// Component native Lifecycle method
	componentWillUnmount() {
		console.log('will unmount, used to clean up processes and changed state');
		// Even after unmounting the component, there are still timed processes :(
		clearInterval(this.inc);
	};
};

//
class Wrapper extends React.Component {
	constructor() {
		super();
		this.mount = this.mount.bind(this);
		this.unMount = this.unMount.bind(this);
	};

	mount() {
		ReactDOM.render(<App />, document.getElementById('appButton'));
	}

	unMount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('appButton'));
	}

	render() {
		return (
			<div>
				<button onClick={this.mount}>MOUNT</button>
				<button onClick={this.unMount}>UNMOUNT</button>
				<div id='appButton'></div>
			</div>
		);
	};

};


ReactDOM.render(<Wrapper />, document.getElementById('theApp'));

// NOTE: this export can't coexist with the Render^!
// exports default Wrapper;