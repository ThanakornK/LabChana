import React, { Component } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import Sidebar from './../component/Sidebar'

export default class Manage_prob_case extends Component {
    render() {
        return (
            <div style={{ width: "90%",height:"100%", display: "flex", flexDirection: "row" }}>
                <div style={{ flexGrow: "0", backgroundColor: "grey" }}>
                    <Sidebar />
                </div>
                <div style={{ flexGrow: "3", paddingLeft: "10%" }}>
                    <br />
                    <Button variant="secondary" size="sm" onClick={() => { window.location.pathname = '/manage/labN' }}>Back</Button>
                    <br />
                    <br />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Case</th>
                                <th>Hint</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1+1=0</td>
                                <td>P</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <Card>
                        <Card.Body>
                            <p>
                                P = ผ่าน, S = Output มีเว้นวรรคผิด, T = Timed out
                        </p>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        )
    }
}
