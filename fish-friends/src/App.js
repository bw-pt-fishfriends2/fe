import React, {useState} from 'react';
import Navigation from './components/Navigation';
import { Switch, Route } from 'react-router-dom';

//IMPORT COMPONENTS AND ASSETS
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import FindALocation from './components/FindALocation';
import CreateAccount from './components/CreateAccount';
import PrivateRoute from './utils/PrivateRoute';
import UserTable from './components/UserTable';

//IMPORT STYLES
import './App.css';
import { UserProvider } from './contexts/UserContext';

function App() { 

  const [user, setUser] = useState({
    username: localStorage.getItem('username'),
    userId: localStorage.getItem('userId')
  });

  return (
    <UserProvider value={{user, setUser}}>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/register" component={CreateAccount} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/fish-finder" component={FindALocation} />
        </Switch>
      </div>
    </UserProvider>
  );
}


export default App;
