import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import PageComponent from "./components/PageCompnent";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PageComponent />, document.getElementById('root'));
registerServiceWorker();
