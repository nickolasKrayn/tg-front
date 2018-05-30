import React, { Component } from 'react';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import LoginForm from './../../Components/Forms/Login/Login';

class Login extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xl="4" lg="5" md="6" sm="7" xs="12">
                        <LoginForm />
                    </Col>
                </Row>

            </ Container>
        );
    }
}

export default Login;