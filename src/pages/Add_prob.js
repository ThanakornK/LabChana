import React, { Component } from 'react'
import { Form,Button  } from 'react-bootstrap'
import './../style/Table.css'
import Sidebar from '../component/Sidebar';

export default class Add_prob extends Component {
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
                        <div className="Table_Row" style={{ width: "50%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginLeft: "25%" }}>
                            <Form>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" label="file input" />
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" label="file output" />
                                </Form.Group>
                            </Form>

                        </div>
                        <br />
                        <div style={{ width: "70%", padding: "5px", border: "2px solid lightgray", borderRadius: "5px", display: "flex", flexDirection: "row", marginLeft: "15%" }} >
                            <div style={{ flexGrow: "2" }}>
                                <Form.Control type="text" placeholder="Detail(Hint)" />
                            </div>
                            <div style={{ paddingLeft: "5px" }}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Hide detail" />
                                </Form.Group>
                            </div>
                            <div style={{ paddingLeft: "5px" }}>
                                <Button size="sm" variant="danger" > X </Button>
                            </div>
                        </div>
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
                            Add Problem
                    </Button>
                    </div>
                </div>

            </div>
        )
    }
}
