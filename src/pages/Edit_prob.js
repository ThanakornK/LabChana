import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap'
import './../style/Table.css'
import Sidebar from '../component/Sidebar';

export default class Edit_prob extends Component {
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
                    <div>
                        <Form.Control type="text" placeholder="Title" />
                        <br />
                        <Form.Control as="textarea" placeholder="Content" rows={10} />
                    </div>
                    <br />
                    <div style={{ width: "100%" }}>
                        <div className="Table_Row" style={{ width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginLeft: "10%", paddingTop:"10px" }}>
                            <Form>
                                <Form.Group>
                                    <Form.Control as="textarea" placeholder="input" />
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Control as="textarea" placeholder="output" />
                                </Form.Group>
                            </Form>
                            <div style={{ paddingLeft: "5px" }}>
                                <Button size="sm" variant="danger" > X </Button>
                            </div>
                        </div>
                        <br />
                        
                    </div>
                    <br />
                    <div className="center">
                        <Button size="sm">
                            Add Case
                    </Button>
                    </div>
                    <br />
                    <div className="center">
                        <Button variant="secondary" onClick={() => { window.location.pathname = '/manage/labN' }}>
                            Edit Problem
                    </Button>
                    </div>
                </div>

            </div>
        )
    }
}
