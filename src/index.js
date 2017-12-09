import { render } from 'inferno';
// import { Router, IndexRoute } from 'inferno-router'
import App from './App';
import './home.css';

// import createBrowserHistory from 'history/createBrowserHistory';

// const browserHistory=createBrowserHistory();



render(<App/>, document.getElementById('app'));
