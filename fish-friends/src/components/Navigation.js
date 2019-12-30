import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'reactstrap';

import './styles/Navigation.scss';
import HorizontalLogo from '../images/FishFriendsLogo_Horizontal.svg';

const Navigation = (props) => {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    if (localStorage.getItem('token')) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem('token')
    setLoggedIn(false);
  }

  return (
    <div>
      <Navbar>
        <img className="nav-logo" src={HorizontalLogo} alt="Navigation Logo" />
        <Nav>
          <NavItem>
            {loggedIn ? <Link to="/" onClick={handleLogout}>Logout</Link> : <Link to="/">Login</Link>}
          </NavItem>

          <NavItem>
            {/* <Link to="/dashboard">Dashboard</Link> */}
            {loggedIn ? <Link to="/dashboard">Dashboard</Link> : ""}

          </NavItem>

          <NavItem>
            {loggedIn ? "" : <Link to="/register">Create Account</Link> }
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Navigation;