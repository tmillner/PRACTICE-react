import React from 'react';

// Using classes to create component, can have state (redux)
class App extends React.Component {
	render(){
		// If the following is in quotes, it will not render
		// It is JSX, 
		//return <h1>Hello World</h1>;
		//return React.createElement('h1', null, 'Hello WORLD');

		// Can't do this bc can't return 2 functions (per node ^)
		//return <h1>One thing</h1><h2>Two thing</h2>;
		// But can wrap it up IN A DIV! and return one thing 
		return (
			<div>
				<b>Hello World</b>
				<h1>One thing</h1>
				<h2>Two thing</h2>
			</div>
		);
	}
}


// Using stateless functions to create component
//const App = () => <h1>HELLO WORLD</h1>;

export default App;