import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CanvasComponent from "./components/CanvasComponent"

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CanvasComponent/>, document.getElementById('container'));
