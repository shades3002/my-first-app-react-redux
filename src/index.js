import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import CounterComponent from './components/CounterComponent'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CounterComponent />, document.getElementById('root'));
registerServiceWorker();
