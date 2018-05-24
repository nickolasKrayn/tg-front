/*
    HOC который берёт на себя обязанность наделять компоненты
    возможностью проводить регистрацию нового аккаунта
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

export default function (WrapComponent) {
    return class RegHoc extends Component {

        registration(email, login, password, confirmPassword) {

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

        }

        render() {
            return (<WrapComponent {...this.props} registration={this.registration} />);
        }
    }
}