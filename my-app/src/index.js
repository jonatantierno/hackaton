import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import Search from './components/Search';
import Upload from './components/Upload';
import * as serviceWorker from './serviceWorker';

/* React Router */
// import {Router, Route, IndexRoute} from 'react-router';
import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";

ReactDOM.render(
    <Router>
      <Switch>
      <Route path='/home' component={Home} exact={true}/>
      <Route path='/search' component={Search} />
      <Route path='/upload' component={Upload} />
      <Redirect to='/home' />
      </Switch>
    </Router>, document.getElementById('root')

);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
