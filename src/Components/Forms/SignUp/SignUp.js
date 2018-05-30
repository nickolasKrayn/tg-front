import React, { Component } from 'react';

import {
    Input,
    Button
} from 'reactstrap';

import './../index.css'

import { withRouter } from "react-router-dom";

import withReg from './../../../HOCs/ApiHOCs/RegHoc';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'test223login@mail.ru',
            login: 'loginloginlogin',
            password: 'password',
            confirmation: 'password',
        };

        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        this.setState({
            email: 'test223login@mail.ru',
            login: 'loginloginlogin',
            password: 'Password2!',
            confirmation: 'Password2!',
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.regResponse) {
            this.props.history.push('/');
        }
    }

    handleInput(event) {
        // TODO: переписать на innerRef, а то это говнина какая-то
        let element = event.target;

        if (!this.state.hasOwnProperty(element.name)) {
            throw new Error('Property with this input name does not exist in state');
        }

        let keyValue = {};
        keyValue[element.name] = element.value;
        this.setState(keyValue);
    }

    async handleRegistration() {
        let { email, login, password, confirmation } = this.state;

        if (!this.props.registration) {
            throw new Error('You must implement registration method');
        }

        this.props.registration(email, login, password, confirmation);
    }

    render() {
        var status = this.props.regResponse;

        return (<div className="form">
            <h2>Зарегистрироваться {status}</h2>
            <hr />
            <Input type="text" name="email" onChange={this.handleInput} placeholder="Почта" />
            <Input type="text" name="login" onChange={this.handleInput} placeholder="Логин" />
            <Input type="password" name="password" onChange={this.handleInput} placeholder="Пароль" />
            <Input type="password" name="confirmation" onChange={this.handleInput} placeholder="Повторите пароль" />
            <Button color="primary" onClick={this.handleRegistration.bind(this)}>регистрация</Button>
        </div>);
    }
}

export default withRouter(withReg(SignUp));