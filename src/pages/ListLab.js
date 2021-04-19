import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import './../style/Table.css';

export default class ListLab extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "grey", width: "100%", height: "100%" , paddingLeft:"5%"}}>
                <div style={{ backgroundColor: "white", width: "95%", height: "100%" }} >
                    <div style={{ width: "80%", paddingLeft: "30%" }}>
                        <br />
                        <ListGroup>
                            <ListGroup.Item className="listForm" onClick={() => {window.location.pathname='/labN'}} >
                                <div className="textList">
                                    <div>01418112-Lab01</div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>

            </div>

        )
    }
}
