import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leftSection: [
                {
                    title: 'Логин',
                    path: '/login'
                },
                {
                    title: 'Регистрация',
                    path: '/signup'
                }
            ],
        };

    }

    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs="12" md="10" className="top-manu-container">
                        <ul>
                            {this.state.leftSection.map((item, index) => {
                                return (<Link key={index} to={item.path}><li>{item.title}</li></Link>)
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;