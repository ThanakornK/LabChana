import React, { Component } from 'react'
import {  Button, Form } from 'react-bootstrap'
import Sidebar from '../component/Sidebar';

import './../style/Table.css'

export default class Add_lab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            openChecked: false,
            availableChecked: false
        };
    }

    render() {
        return (
            <div style={{ width: "90%", height: "100%", display: "flex", flexDirection: "row" }}>
                <div style={{ flexGrow: "0", backgroundColor: "grey" }}>
                    <Sidebar />
                </div>
                <div style={{ flexGrow: "3", paddingLeft: "10%" }}>
                    <br />
                    <Button size="sm" variant="secondary" onClick={() => { window.location.pathname = '/manage' }}>Back</Button>
                    <br />
                    <br />
                    <Form>
                        <Form.Group>
                            <Form.Control size="lg" type="text" placeholder="Lab title" />
                        </Form.Group>
                    </Form>
                    <br />
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select">
                                <option>Open</option>
                                <option>Disable</option>
                                <option>Close</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <br />
                    {/* <h4>Available</h4>
                    <br /> */}
                    {/* <div style={{ marginRight: "10%", border: "2px solid lightgray", borderRadius: "5px" }}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Container style={{ display: "flex", flexDirection: "row" }}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format='dd/MM/yyyy'
                                    margin="normal"
                                    id='date-picker'
                                    label='Available date'
                                    value={this.state.selectedDate}
                                    onChange={(date) => this.setState({ selectedDate: date })}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                />
                                <KeyboardTimePicker
                                    margin="normal"
                                    id='time-picker'
                                    label='Available Time'
                                    value={this.state.selectedDate}
                                    onChange={(selectdate) => this.setState({ date: this.state.selectedDate = selectdate })}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                    style={{ paddingLeft: "10px" }}
                                />
                            </Container>
                        </MuiPickersUtilsProvider>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Container style={{ display: "flex", flexDirection: "row" }}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format='dd/MM/yyyy'
                                    margin="normal"
                                    id='date-picker'
                                    label='Due date'
                                    value={this.state.selectedDate}
                                    onChange={(date) => this.setState({ selectedDate: date })}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                />
                                <KeyboardTimePicker
                                    margin="normal"
                                    id='time-picker'
                                    label='Due Time'
                                    value={this.state.selectedDate}
                                    onChange={(selectdate) => this.setState({ date: this.state.selectedDate = selectdate })}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                    style={{ paddingLeft: "10px" }}
                                />
                            </Container>
                        </MuiPickersUtilsProvider>
                    </div> */}
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button variant="danger">Delete Lab</Button>
                        <Button>Apply</Button>
                    </div>
                </div>

            </div>
        )
    }
}
