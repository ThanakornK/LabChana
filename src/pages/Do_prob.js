import React, { Component } from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import StudentSidebar from './../component/StudentSidebar';
import './../style/Content.css'
import './../style/ButtonStyle.css'

export default class Do_prob extends Component {
    render() {
        return (
            <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
                <div style={{backgroundColor:"grey"}}>
                    <StudentSidebar />
                </div>
                <div style={{ backgroundColor: "white", flexGrow: "6", paddingLeft: "10%"}} >
                    <div style={{ width: "80%"}}>
                    <br />
                <Button variant="secondary" size="sm" onClick={() => { window.location.pathname = '/labN' }}>Back</Button>
                <br />
                <Card style={{ marginTop: "15px" }}>
                    <Card.Header>
                        Title
                        <br />
                        <div style={{display:"flex", flexDirection:"row", alignItems:"baseline"}}>
                                <p>
                                (----)
                                </p>
                                <Button size="sm" style={{marginLeft:"10px"}} onClick={() => { window.location.pathname = '/labN/do/pM/case' }}>Case detail</Button>
                        </div>
                    </Card.Header>
                    <Card.Body>
                    เอาแบบนี้<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____________<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<br />
                        &nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<br />
                        /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<br />
                        -----------------------<br />
                        |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                        |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                        |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                        -----------------------
                    </Card.Body>
                </Card>
                <br />
                <Form.Control as="textarea" rows={50} />
                <br />
                <div className="Submit">
                    <Button variant="secondary">Submit</Button>
                </div>
                <br />
                    </div>
                </div>

            </div>
        )
    }
}
