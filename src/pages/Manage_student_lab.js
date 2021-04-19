import React, { Component } from 'react'
import { Button, Col, Form, ListGroup, Row, Table } from 'react-bootstrap'
import Sidebar from '../component/Sidebar';
import './../style/Table.css'


export default class Manage_student_lab extends Component {
    render() {
        return (
            <div style={{ width: "90%",height:"100%", display: "flex", flexDirection: "row" }}>
                <div style={{ backgroundColor: "grey" }}>
                    <Sidebar />
                </div>
                <div style={{ flexGrow: "3", paddingLeft: "10%" }}>
                    <br />
                    <Button size="sm" variant="secondary" onClick={() => { window.location.pathname = '/manage/student' }}>Back</Button>
                    <br />
                    <br />
                    <ListGroup style={{ width: "80%", paddingLeft: "20%" }}>
                        <ListGroup.Item onClick={() => {window.location.pathname = '/manage/userID/labN'}}>
                            <div className="textList" style={{ justifyContent: "space-between" }} >
                                <div style={{ paddingRight: "30px" }} >
                                    Lab n
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        )
    }
}
