import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap';

import './Navigation.scss';

import Dashboard from "./Dashboard";
import CreateAccount from "./CreateAccount";
import FishingMap from "./FishingMap";
// import FindALocation from "./FindALocation";

import HorizontalLogo from '../images/FishFriendsLogo_Horizontal.svg';

const Navigation = () => {

  return (
    <div>
      <Navbar>
      <img className="nav-logo" src={HorizontalLogo} alt="Navigation Logo" />
      <Nav>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/dashboard">Dashboard</Link></NavItem>
        <NavItem><Link to="/fishingmap">Fishing Maps</Link></NavItem>
        {/* <NavItem><Link to="/findlocation">Find A Spot!</Link></NavItem> */}
        <NavItem><Link to="/register">Create Account</Link></NavItem>
      </Nav>
      </Navbar>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/register" component={CreateAccount} />
      <Route path="/fishingmap" component={FishingMap} />
      {/* <Route path="/findaspot" component={FindALocation} /> */}
    </div>
  )
}

export default Navigation;