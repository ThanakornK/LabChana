import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default class Menu extends Component {
    render() {
        return (
            <Navbar style={{ backgroundColor: "darkgrey" }} expand="lg" >
                <Navbar.Brand>LabChana</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}
