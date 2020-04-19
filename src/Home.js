import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button} from 'reactstrap';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';


class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container className={"homeContainer"} fluid>
                    <Row className={"homeRow"}>
                        <Col> </Col>
                        <Col>
                            <Jumbotron className={"homeJumbotron"}>
                                <h1>Welcome!</h1>
                                <p>
                                    This web-application will teach you all you need to know about the binary, octal and hexadecimal
                                    number systems. Please have a look at our courses:
                                </p>
                                <p>
                                    <Button variant="primary" tag={Link} to="/courses">Courses</Button>
                                </p>
                            </Jumbotron>
                        </Col>
                        <Col> </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;