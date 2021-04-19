import React, { Component } from 'react'
import { Button, Card, Table } from 'react-bootstrap'


export default class Detail_case extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "grey", width: "100%", height: "100%", paddingLeft: "5%" }}>
                <div style={{ backgroundColor: "white", width: "95%", height: "100%" }} >
                    <div style={{ width: "80%", paddingLeft: "25%" }}>
                        <br />
                        <Button variant="secondary" size="sm" onClick={() => { window.location.pathname = '/labN/do/pM' }}>Back</Button>
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

            </div>
        )
    }
}
