import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			'data' : [
				{'id': 0, 'name' : 'Broccoli'},
				{'id': 1, 'name' : 'Beet'},
				{'id': 2, 'name' : 'Onion'},
				{'id': 3, 'name' : 'Radish'}
			]
		};
	};

	// Dynamically create static, simple components 
	render() {
		let vegetables = this.state.data.map(vegetable => {
			return <Vegetables key={vegetable.id} data={vegetable}/>
		})
		return (
			<table>
				<tbody>{vegetables}</tbody>
			</table>
		);
	};
};

const Vegetables = (props) => {
	return (
		<tr>
			<td>{props.data.id}</td>
			<td>{props.data.name}</td>
		</tr>
	);
}

ReactDOM.render(<App />, document.getElementById('theApp'));
