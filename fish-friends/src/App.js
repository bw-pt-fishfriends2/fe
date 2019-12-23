import React from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import FindALocation from './components/FindALocation';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    
    <div className="App">
      <Navigation />

      <Route exact path="/" component={LoginForm} />
      
      { /* 
      THIS WILL BE A PRIVATE ROUTE
      <PrivateRoute exact path="dashboard" component={Dashboard} />
      */}

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/fish-finder" component={FindALocation} />
      <Route path="/register" component={CreateAccount} />
    </div>

  );
}


export default App;
