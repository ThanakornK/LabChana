import React, { Component } from 'react'
import { Button, Col, Form, ListGroup, Row, Table } from 'react-bootstrap'
import Sidebar from '../component/Sidebar';
import './../style/Table.css'

export default class Manage_student extends Component {
    render() {
        return (
            <div style={{ width: "90%",height:"100%", display: "flex", flexDirection: "row" }}>
                <div style={{ backgroundColor: "grey" }}>
                    <Sidebar />
                </div>
                <div style={{ flexGrow: "3", paddingLeft: "10%" }}>
                    <br />
                    <Row md={3} style={{ paddingLeft: "35%" }}>
                        <Col>
                            <Form>
                                <Form.Control type="text" placeholder="ID search" />
                            </Form>
                        </Col>
                        <Col xs={6} md={1}>
                            <Button>Search</Button>
                        </Col>

                    </Row>

                    <br />
                    <ListGroup style={{width:"80%", paddingLeft: "20%" }}>
                        <ListGroup.Item >
                            <div className="textList" style={{ justifyContent: "space-between"}}>
                            <div style={{paddingRight:"30px"}}>
                                    6110401625
                                </div>
                                <div style={{flexGrow:"2"}}>
                                    Thanakorn Kittayathon
                                </div>
                                <div >
                                    <Button variant="secondary" onClick={() => { window.location.pathname = '/manage/userID/ls_lab' }}>View</Button>
                                </div>
                            </div>

                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        )
    }
}
