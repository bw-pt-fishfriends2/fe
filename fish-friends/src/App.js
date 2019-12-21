import React from 'react';

import './App.css';


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
