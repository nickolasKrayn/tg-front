import React, { Component } from 'react';

import SignUpForm from './../../Components/Forms/SignUp/SignUp';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

class SignUp extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xl="4" lg="5" md="6" sm="8" xs="12">
                        <SignUpForm />
                    </Col>
                </Row>

            </ Container>
        );
    }
}

export default SignUp;