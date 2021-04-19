import React, { Component } from 'react'
import { Button, Col, Form, ListGroup, Row, Table } from 'react-bootstrap'
import Sidebar from '../component/Sidebar';

export default class Prob_student extends Component {
    render() {
        return (
            <div style={{ width: "90%",height:"100%", display: "flex", flexDirection: "row" }}>
                <div style={{ flexGrow: "0", backgroundColor: "grey" }}>
                    <Sidebar />
                </div>
                <div style={{ flexGrow: "3", paddingLeft: "10%" }}>
                    <br />
                    <Button size="sm" variant="secondary" onClick={() => { window.location.pathname = '/manage/labN' }}>Back</Button>
                    <br />
                    <br />
                    <h2>Lab n</h2>
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
                    <ListGroup style={{ paddingLeft: "20%" }}>
                        <ListGroup.Item style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "70%" }} onClick={() => window.location.pathname = '/labN/userID/do/pM'}>
                            <div>
                                6110401625
                        </div>
                            <div>
                                Thanakorn Kittayathon
                        </div>
                            <div>
                                (TTTT)
                        </div>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        )
    }
}
