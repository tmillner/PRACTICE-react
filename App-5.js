import React from 'react';

class App extends React.Component {
	render() {
		return <Button>I <Emotion /> children</Button>
	};
};

class Button extends React.Component {
	render() {
		return <button>{this.props.children}</button>
	};
};

// For static classes no need to provide render method
const Emotion = () => <span className="glyphicon glyphicon-heart">&hearts;</span>

export default App;
