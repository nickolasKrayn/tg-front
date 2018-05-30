import React, { Component, createRef } from 'react';

import {
    Input,
    Button
} from 'reactstrap';

import './../index.css';

import withLogin from './../../../HOCs/ApiHOCs/LoginHoc';

class Login extends Component {
    constructor(props) {
        super(props);

        this.emailRef = createRef();
        this.passwordRef = createRef();
    }

    login() {
        let email = this.emailRef.current.value;
        let password = this.passwordRef.current.value;

        this.props.login(email, password);
    }

    render() {
        return (<div className="form">
            <h2>Войти</h2>
            <hr />

            <Input type="text" name="email" placeholder="почта" innerRef={this.emailRef} />
            <Input type="password" name="password" placeholder="Пароль" innerRef={this.passwordRef} />
            <Button color="primary" onClick={this.login.bind(this)}>войти</Button>
        </div>);
    }
}

export default withLogin(Login);