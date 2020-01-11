import React, { useState, useEffect } from 'react';
import { Nav, NavLink } from 'reactstrap';
import axios from 'axios';

import './styles/DashboardNavigation.css';


function DashboardNavigation() {
    const [logNumber, setLogNumber] = useState([])

    useEffect((props) => {
        axios
            .get(`https://fish-friends.herokuapp.com/logRoute/all-logs`)
            .then(res => {
                setLogNumber(res.data.length)
            })
            .catch(err => console.log(err.message));
    }, []);

    return (
        <div className="db-navbar">
            <p className="db-welcome">Welcome!</p>
            <p className="db-logs">There have been<br />{logNumber} logs recorded!</p>
            <Nav vertical className="db-nav-links">
                <NavLink href="#" className="db-navbar-link">Profile</NavLink>
                <NavLink href="#" className="db-navbar-link">Your Logs</NavLink>
                <NavLink href="/fish-finder" className="db-navbar-link">Find a Fishing Location</NavLink>
            </Nav>
        </div>
    )
}

export default DashboardNavigation;