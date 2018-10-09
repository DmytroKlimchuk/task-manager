import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import './index.css';
import App from './App';
import Login from './components/user/login';
import Signup from './components/user/signup';
import store from './store/index';
import { Provider } from 'react-redux';


import { Router, Route, IndexRoute, browserHistory } from 'react-router';

function checkLogin(nextState, replace) {
    const login = window.sessionStorage.getItem('login');
    if (login !== 'admin') {
        replace('/')
    }
}

ReactDOM.render(
    <Provider store={ store }>
        <Router history={browserHistory}>
            <Route path="/" component={App} onEnter={checkLogin}/>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='*' component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

