/*
    HOC который берёт на себя обязанность наделять компоненты
    возможностью проводить регистрацию нового аккаунта
*/

import React, { Component } from 'react';
import alertify from 'alertify.js';
import validator from './../../Utilites/Validator';

import api from './../../Utilites/Api';
import defaultResponses from './Responses';

const alertifyHandling = (validationResult) => {
    if (!validationResult.success) {
        alertify.closeLogOnClick(true).error(validationResult.message);
    }

    return validationResult.success;
}

export default function (WrapComponent) {
    class RegHoc extends Component {
        constructor(props) {
            super(props);

            this.state = {
                regResponse: null,
            };

            this.registration = this.registration.bind(this);
        }

        componentWillMount() {
            this.setState({
                regResponse: null,
            });
        }

        async registration(email, login, password, confirmPassword) {
            if (!alertifyHandling(validator.email(email))) {
                return;
            }

            if (!alertifyHandling(validator.name(login))) {
                return;
            }

            if (!alertifyHandling(validator.passwordConfirmation(password, confirmPassword))) {
                return;
            }

            if (!alertifyHandling(validator.password(password))) {
                return;
            }

            let data = {
                Login: login,
                Email: email,
                Password: password,
                ConfirmPassword: confirmPassword,
                Ref: '',
            }

            let resp = await api.post('Account/Register', data);
            if (resp.status == 200) {
                this.setState({
                    regResponse: defaultResponses.ok
                });
            }
            else {
                let json = await resp.json();
                alertify.closeLogOnClick(true).error(json.ModelState[''][0]);
            }
        }


        render() {
            let responses = this.props.responseData;

            if (responses) {
                responses['signup'] = this.state.regResponse;
                return (<WrapComponent {...this.props} responseData={responses} registration={this.registration} />);
            }

            return (<WrapComponent {...this.props} responseData={{ signup: this.state.regResponse }} registration={this.registration} />);
        }
    }

    return RegHoc;
}