import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'reactstrap';

import './Navigation.scss';
import HorizontalLogo from '../images/FishFriendsLogo_Horizontal.svg';

const Navigation = () => {

  return (
    <div>
      <Navbar>
        <img className="nav-logo" src={HorizontalLogo} alt="Navigation Logo" />
        <Nav>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/dashboard">Dashboard</Link></NavItem>
          <NavItem><Link to="/register">Create Account</Link></NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Navigation;