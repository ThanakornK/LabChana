import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';

export default class Menu extends Component {
    render() {
        return (
            <Navbar style={{backgroundColor:"darkgrey"}}  expand="lg" >
                <Navbar.Brand>LabChana</Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        username
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
