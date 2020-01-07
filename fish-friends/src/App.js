import React from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import FindALocation from './components/FindALocation';
import CreateAccount from './components/CreateAccount';
import PrivateRoute from './utils/PrivateRoute';

function App() { 
  return (
    
    <div className="App">
      <Navigation />

      <Route exact path="/" component={LoginForm} />
      <Route path="/register" component={CreateAccount} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/fish-finder" component={FindALocation} />
      
    </div>

  );
}


export default App;
