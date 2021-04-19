import React from 'react'
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "Lab",
        icon: <AiIcons.AiFillCode/>,
        path: '/manage'
    },

    {
        title: "Student",
        icon: <AiIcons.AiOutlineUser/>,
        path: '/manage/student'
    },
]