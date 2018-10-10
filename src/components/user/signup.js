import React, { Component  } from 'react';
import './user.css';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { browserHistory, Link } from 'react-router';
import app from "../../base";

const MySwal = withReactContent(Swal);

class Signup extends Component {

    handleSignUp = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            const user = app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            return MySwal.fire({
                type: 'success',
                title: 'Вітаємо!',
                text: 'Користувача створено. Для входу викоростовуйте ваш email та пароль'
            }).then( () => browserHistory.push(`/`) );

        } catch (error) {
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
                                <h2>Реєстрація</h2>
                                <p>Введіть email та пароль</p>
                            </div>

                            <form id="Login" onSubmit={this.handleSignUp}>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="inputEmail" name="email" placeholder="Логін"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="inputPassword" name="password" placeholder="Пароль"/>
                                </div>
                                <div className="forgot">
                                    <Link to="/login">
                                        <span>Вже є аккаунт</span>
                                    </Link>
                                </div>
                                <button type="submit" className="btn btn-primary">Створити аккаунт</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;