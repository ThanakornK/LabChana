import React, { Component } from 'react'
import { Row, Col, Container, Card, Form, Button } from 'react-bootstrap'
import './../style/Content.css'
import './../style/ButtonStyle.css'
import Sidebar from './../component/Sidebar'

export default class User_do_prob extends Component {
    render() {
        return (
            <div style={{ width: "90%", display: "flex", flexDirection: "row" }} >
                <div style={{ flexGrow: "0", backgroundColor: "grey" }}>
                    <Sidebar />
                </div>
                <div style={{ flexGrow: "3", paddingLeft: "10%" }}>
                    <br />
                    <Button size="sm" variant="secondary" onClick={() => { window.location.pathname = '/manage/labN' }}>Back</Button> {/* can back to Manage_lab and ListNisit */}
                    <br />
                    <Card style={{ marginTop: "15px" }}>
                        <Card.Header>
                            Title
                        <br />
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                                <p>
                                    (----)
                                </p>
                                <Button size="sm" style={{ marginLeft: "10px" }} onClick={() => { window.location.pathname = '/manage/labN/pM/case' }}>Case detail</Button>
                            </div>
                        </Card.Header>

                        <Card.Body>
                            เอาแบบนี้<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____________<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<br />
                        &nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<br />
                        /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<br />
                        -----------------------<br />
                        |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                        |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                        |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                        -----------------------
                        </Card.Body>
                    </Card>
                    <br />
                    <Form.Control as="textarea" rows={50} />
                    <br />
                </div>

            </div>
        )
    }
}
