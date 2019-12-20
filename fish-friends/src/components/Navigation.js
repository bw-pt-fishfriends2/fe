import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Dashboard from "./Dashboard";
import CreateAccount from "./CreateAccount";

const Navigation = () => {

  return (
    <div>
      <h1>Navigation</h1>
      {
        /* 
          <Link to="Dashboard.js">Home</Link>
          <Link to="CreateAccount.js">Create Account</Link>
        */
      }
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/register">Create Account</Link>

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/register" component={CreateAccount} />
    </div>
  )
}

export default Navigation;