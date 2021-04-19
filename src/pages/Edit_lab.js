import React, { Component } from 'react'
import { Form, Row, Col, Button, ListGroup } from 'react-bootstrap'
import './../style/Table.css'

export default class Edit_lab extends Component {
    render() {
        return (
            <div style={{ width: "50%" }}>
                <br />
                <Form.Control type="text" placeholder="Title" />
                <br />
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="Subject" />
                    </Col>
                    <Col xs={6} md={1}>
                        <Button>Search</Button>
                    </Col>

                </Row>

                <br />
                <div >
                    <ListGroup>
                        <ListGroup.Item >01418112</ListGroup.Item>
                    </ListGroup>
                </div>
                <br />
                <div className="center">
                    <Button onClick={() => {window.location.pathname="/"}}>
                        Edit Lab
                    </Button>
                </div>

            </div>
        )
    }
}
