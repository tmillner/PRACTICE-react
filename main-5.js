import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';

// NOTE, React needs to be imported again, even though it was
// already done so in the App file. This is redundant so instead
// We can shove that into the App file, reducing the import
ReactDOM.render(<App />, document.getElementById('theApp'));