import React, { Component } from 'react'
import './../style/sidebar.css';
import { StudentSidebarData } from './StudentSidebarData';

export default class StudentSidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <ul className="SidebarList">
                    {StudentSidebarData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="row"
                                onClick={() => { window.location.pathname = val.path; }}>
                                <div id="title" style={{paddingLeft:"5px"}}>{val.title}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}
