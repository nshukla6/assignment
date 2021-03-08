import React from 'react'
import users from '../../components/svg/users.svg';
import dashboard from '../../components/svg/dashboard.svg';
import chat from '../../components/svg/chat.svg';
import device from '../../components/svg/device.svg';
import graph from '../../components/svg/graph.svg';
import logo from '../../components/svg/logo.png';

import { NavLink } from "react-router-dom"

import "./Navigation.css";

const Navigation = () => {
    return (
        <div className="navigation">
            <img src={logo} className="logo" alt="elisity" />
            <NavLink activeClassName="active" to="/dashboard"><img src={dashboard} className="nav dashboard" alt="dashboard" /></NavLink>
            <NavLink activeClassName="active" to="/users"><img src={users} className="nav users" alt="users" /></NavLink>
            <NavLink activeClassName="active" to="/chat"><img src={chat} className="nav chat" alt="chat" /></NavLink>
            <NavLink activeClassName="active" to="/device"><img src={device} className="nav device" alt="device" /></NavLink>
            <NavLink activeClassName="active" to="/graph"><img src={graph} className="nav graph" alt="graph" /></NavLink>
        </div>
    )
}

export default Navigation
