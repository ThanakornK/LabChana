import React, { Component } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import Sidebar from '../component/Sidebar';

export default class Manage_main extends Component {
    render() {
        return (
            <div style={{ width: "90%",height:"100%", display: "flex", flexDirection: "row" }}>
                <div style={{ backgroundColor: "grey" }}>
                    <Sidebar />
                </div>
                <div style={{ flexGrow: "3", paddingLeft: "10%" }}>
                    <br />
                    <h2>Lab available</h2>
                    <br />
                    <ListGroup>
                        <ListGroup.Item onClick={() => { window.location.pathname = '/manage/labN' }}>
                            01418113-01
                                </ListGroup.Item>
                    </ListGroup>
                    <br />
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div><h3>List lab</h3></div>
                        <div>
                            <Button variant="secondary" onClick={() => {window.location.pathname = '/add_lab'}}>
                                New lab
                            </Button>
                        </div>
                    </div>
                    <br />
                    <div>
                        <ListGroup>
                            <ListGroup.Item onClick={() => { window.location.pathname = '/manage/labN' }}>
                                01418113-02
                                </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>

            </div>
        )
    }
}
