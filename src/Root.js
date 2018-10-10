import React, {Component} from 'react';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import App from './App';
import Login from './components/user/login';
import Signup from './components/user/signup';
import Loading from './loading';
import app from "./base";

class Root extends Component {

    state = {
        loading: true,
        authenticated: false,
        user: null
    };

    componentWillMount() {
        app.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authenticated: true,
                    user: user,
                    loading: false
                });
            } else {
                this.setState({
                    authenticated: false,
                    user: null,
                    loading: false
                });
            }
        });
    }


    render(){

        const { authenticated, loading } = this.state;

        if (loading) {
            return <Loading/>;
        }

        return(
            <Router history={browserHistory}>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                {authenticated === true ? <Route path='*' component={App}/> : <Redirect path='/' to="/login"/>}
            </Router>
        );
    }
}

export default Root;