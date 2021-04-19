import React, { Component } from 'react'
import { ListGroup, Button, Container, Form } from 'react-bootstrap'
import Sidebar from '../component/Sidebar';


import 'date-fns'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'
import './../style/Table.css'

export default class Add_lab extends Component {

    constructor(props) {
        super(props)
        var date = new Date("2021-04-20T00:00:00")

        this.state = {
            currentDate: date,
            selectedDate: date,
            checked: false
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
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch color="primary" checked={this.state.checked} onChange={() => this.setState({ checked: !(this.state.checked) })} />}
                            label="Open"
                        />
                    </FormGroup>
                    <br />
                    <br />
                    <h4>Available</h4>
                    <br />
                    <div style={{ marginRight: "10%", border: "2px solid lightgray", borderRadius: "5px" }}>
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
                    </div>
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
