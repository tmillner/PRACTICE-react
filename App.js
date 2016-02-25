import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			'input' : '/* Edit me */',
			'output' : '',
			'error' : ''
		};
		this.update = this.update.bind(this);
	};

	update(e) {
		let code = e.target.value;
		try {
			this.setState({
				/* pass in options as second arg to babel-core */
				'output' : babel.transform(code, {
					stage : 0,
					loose : 'all'
				}).code,
				'error' : ''
			});
		} catch(e) {
			this.setState({'error': e.message});
		}
	};

	render() {
		return (
			<div>
				<header>{this.state.error}</header>
				{/* The benefit of giving the div a class is to 
				 juxtapose the children using display : flex

				 NOTE: Comments in rendered components need to be interpolated}
				*/}
				<div className="container">
					<textarea 
						defaultValue={this.state.input}
						onChange={this.update}>
					</textarea>
					<pre>{this.state.output}</pre>
				</div>
			</div>
		);
	};
};

ReactDOM.render(<App />, document.getElementById('App'));
