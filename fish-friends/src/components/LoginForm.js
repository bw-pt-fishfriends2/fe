import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/AxiosWithAuth';

import { Card, Button, Form, Input, Modal } from 'reactstrap';
import CreateAccount from './CreateAccount';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/LoginForm.scss';

import Logo from '../images/FishFriendsLogo.svg';

const LoginForm =(props)=>{

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [login, setLogin] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value})
  }

  const handleLogin = (e) =>{
    e.preventDefault();
    axiosWithAuth()
      .post(`https://fish-friends.herokuapp.com/authRoute/login`, login)
      .then (res=> {
        console.log('LoginForm.js handleLogin: ', res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/dashboard');
      })
      .catch(err=> {
        console.log('LoginForm.js handleLogin Error', err.message)
      });

      setLogin({
        username: '',
        password: '',
      })
  }

  return(
    <Card className="login-card">
      <img src={Logo} alt="Fish Friends Logo" className="login-logo" />
      <Form className="login-form" onSubmit={handleLogin} >
        <Input
          type="text"
          name="username"
          value={login.username}
          onChange={handleChange}
          className="login-input"
          placeholder="User Name"
        />

        <Input
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
          className="login-input"
          placeholder="Password"
        />
        <Button className="login-button" onSubmit={handleLogin} block>Sign In</Button>
      </Form>
      
      <div className="login-nav">
        {/* <Link to="/register"><h4>I Don't Have An Account</h4></Link> */}
        <Link onClick={toggle}><h4>I Don't Have An Account</h4></Link>
        <h4>Forgot Password</h4>
      </div>

      <Modal isOpen={modal} toggle={toggle} size="lg" className="login-createAccount">
        <CreateAccount />
      </Modal>
    </Card>
  )
}

export default LoginForm;