import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Button, Form, Input } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/LoginForm.scss';

import Logo from '../images/FishFriendsLogo.svg';

const LoginForm =()=>{

  return(
    <Card className="login-card">
      <img src={Logo} alt="Fish Friends Logo" className="login-logo" />
      <Form className="login-form">
        <Input
          type="text"
          name="username"
          className="login-input"
          placeholder="User Name"
        />

        <Input
          type="password"
          name="password"
          className="login-input"
          placeholder="Password"
        />
        <Button className="login-button" block>Sign In</Button>
      </Form>
      
      <div className="login-nav">
        <Link to="/register"><h4>I Don't Have An Account</h4></Link>
        <h4>Forgot Password</h4>
      </div>

    </Card>
  )
}

export default LoginForm;