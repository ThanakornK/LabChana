import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './../style/Table.css'

export default class Login extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "grey", width: "100%", height: "100%", paddingLeft: "5%" }}>
                <div style={{ backgroundColor: "white", width: "95%", height: "100%", display: "flex", flexDirection: "row" }} >
                    <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
                        <div style={{ paddingTop: "25%", width: "70%" }}>
                            <h3>Login</h3>
                            <Form>
                                <Form.Group>
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text"></Form.Control>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"></Form.Control>
                                </Form.Group>
                            </Form>
                            <div  className="center">
                                <Button>Login</Button>
                            </div>
                        </div>



                    </div>
                    <div style={{ padding: "15px" }}>
                        <div className="vl"></div>
                    </div>
                    <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
                        <div style={{ paddingTop: "25%", width: "70%" }}>
                            <h3>Register</h3>
                            <Form>
                                <Form.Group>
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text"></Form.Control>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"></Form.Control>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password"></Form.Control>
                                </Form.Group>
                            </Form>
                            <div className="center">
                                <Button>Register</Button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
