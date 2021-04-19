import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class Edit_subject extends Component {
    render() {
        return (
            <div style={{ width: "50%" }}>
                <br />
                <Form.Control type="text" placeholder="Title subject" />
                <br />
                    <Button>Clear Current student list</Button>
                <br />
                <div>
                    <Form>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Import list student" />
                        </Form.Group>
                    </Form>
                </div>
                <br />
                <div className="center">
                    <Button onClick={() => {window.location.pathname='/ls_sub'}}>
                        Edit Subject
                    </Button>
                </div>

            </div>
        )
    }
}
