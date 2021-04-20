import React, { Component } from 'react'
import { Row, Col, ListGroup, Button, Form } from 'react-bootstrap';
import '.././style/Table.css';

export default class ListProblem extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "grey", width: "100%", height: "100%", paddingLeft: "5%" }}>
                <div style={{ backgroundColor: "white", width: "95%", height: "100%" }} >
                    <div style={{ width: "80%", paddingLeft: "30%" }}>
                        <br />
                        <Button size="sm" variant="secondary" onClick={() => { window.location.pathname = '/student' }}>Back</Button>
                        <br />
                        <br />
                        <ListGroup>
                            <ListGroup.Item className="listForm"  >
                                <div className="textList">
                                    <div style={{ flexGrow: "2" }} onClick={() => { window.location.pathname = '/labN/do/pM' }}>
                                        01418112-Lab01-01
                                    </div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>

            </div>
        )
    }
}
