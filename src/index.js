import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './Home'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-152946505-1')
ReactGA.pageview(window.location.pathname + window.location.search)
ReactDOM.render(<Home/>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
