import React, { Component  } from 'react';
import { Router, Route, Link, browserHistory, Redirect } from 'react-router';
import './user.css';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


import app from "../../base";

const MySwal = withReactContent(Swal);

class Login extends Component {

    handleSignIn = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            const user = await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);

            return MySwal.fire({
                type: 'success',
                title: 'Авторизація пройшла успішно!',
                text: ''
            }).then( () => {
                return browserHistory.push('/');
                //return (<Redirect path='/login' to="/"/>);
                } );

        } catch (error) {

            switch (error.code) {
                case 'auth/user-not-found' : return MySwal.fire({
                    type: 'error',
                    title: 'Помилка авторизації',
                    text: 'Такого користувача не знайдено!'
                });
                case 'auth/wrong-password' : return MySwal.fire({type: 'error', title: 'Помилка авторизації', text: 'Пароль не вірний!'});
            }

            return MySwal.fire({
                type: 'error',
                title: 'Помилка!',
                text: error
            })

        }
    };

    render() {

        return (
            <div id="LoginForm">
                <div className="container">
                    <div className="login-form">
                        <div className="main-div">

                            <div className="panel">
                                <h2>Вхід</h2>
                                <p>Введіть ваш email та пароль</p>
                            </div>

                            <form id="Login" onSubmit={this.handleSignIn}>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="inputEmail" name="email" placeholder="Логін"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="inputPassword" name="password" placeholder="Пароль"/>
                                </div>
                                <div className="forgot">
                                    <Link to="/signup"><span>Нема аккаунта?</span></Link>
                                </div>
                                <button type="submit" className="btn btn-primary">Вхід</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;