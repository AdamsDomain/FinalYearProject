import React, { Component } from 'react';
import { Collapse, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Placeholder</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/courses">Courses</Nav.Link>
                    <NavDropdown title="Number Systems" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/courses/binary">Binary</NavDropdown.Item>
                        <NavDropdown.Item href="/courses/octal">Octal</NavDropdown.Item>
                        <NavDropdown.Item href="/courses/hexadecimal">Hexadecimal</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        )
    }
}