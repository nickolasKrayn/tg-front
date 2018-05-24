import React, { Component } from 'react';

import {
    Container,
    Row,
    Col,
    Input,
    Button
} from 'reactstrap';

import './index.css';

import withReg from './../../HOCs/RegHoc/RegHoc';

class SignUp extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            login: '',
            password: '',
            confirmation: '',
        };

        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        this.setState({
            email: '',
            login: '',
            password: '',
            confirmation: '',
        });
    }

    handleInput(event) {
        let element = event.target;

        if (!this.state.hasOwnProperty(element.name)) {
            throw new Error('Property with this input name does not exist in state');
        }

        let keyValue = {};
        keyValue[element.name] = element.value;
        this.setState(keyValue);
    }

    handleRegistration() {
        let { email, login, password, confirmation } = this.state;

        if (!this.props.registration) {
            throw new Error('You must implement registration method');
        }

        this.props.registration(email, login, password, confirmation);
    }

    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xl="4" lg="5" md="6" ms="7" xs="12" className="signup-form">
                        <h2>Зарегистрироваться</h2>
                        <hr />
                        <Input type="text" name="email" onChange={this.handleInput} placeholder="Почта" />
                        <Input type="text" name="login" onChange={this.handleInput} placeholder="Логин" />
                        <Input type="password" name="password" onChange={this.handleInput} placeholder="Пароль" />
                        <Input type="password" name="confirmation" onChange={this.handleInput} placeholder="Повторите пароль" />
                        <Button color="primary" onClick={this.handleRegistration.bind(this)}>регистрация</Button>
                    </Col>
                </Row>
            </ Container>
        );
    }
}

export default withReg(SignUp);