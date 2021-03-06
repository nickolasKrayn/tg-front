/*
    HOC который берёт на себя обязанность наделять компоненты
    возможностью логинить пользователя
*/

import React, { Component } from 'react';
import alertify from 'alertify.js';
import validator from './../../Utilites/Validator';

import api from './../../Utilites/Api';

const alertifyHandling = (validationResult) => {
    if (!validationResult.success) {
        alertify.closeLogOnClick(true).error(validationResult.message);
    }

    return validationResult.success;
}

export default function (WrappedComponent) {
    class LoginHOC extends Component {
        constructor(props) {
            super(props);

            this.state = {
                loginResponse: null,
            };

            this.login = this.login.bind(this);
        }

        componentWillMount() {
            this.setState({
                loginResponse: null,
            });
        }

        async login(email, password) {
            if (!alertifyHandling(validator.email(email))) {
                return;
            }

            if (!alertifyHandling(validator.password(password))) {
                return;
            }

            console.log('типа запрос на логирование');
        }

        render() {
            // на случай если будет несколько вложенных api HOC'ов
            if (this.props.responseData) {
                let responses = { ...this.props.responseData };
                responses['login'] = this.state.loginResponse;
                return <WrappedComponent {...this.props} login={this.login} responseData={responses} />
            }

            return <WrappedComponent {...this.props} login={this.login} responseData={{ login: this.state.loginResponse }} />
        }
    }

    return LoginHOC;
}