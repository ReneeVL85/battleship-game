import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import GridComponent from "./components/GridComponent";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<GridComponent />, document.getElementById('container'));
