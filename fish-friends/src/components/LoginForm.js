import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Card, Button, Form, Input, Modal } from 'reactstrap';

//IMPORT STYLES
import 'bootstrap/dist/css/bootstrap.css';
import './styles/LoginForm.scss';

//IMPORT COMPONENTS AND ASSETS
import CreateAccount from './CreateAccount';
import Logo from '../images/FishFriendsLogo.svg';

//IMPORT CONTEXT
import UserContext from '../contexts/UserContext';

const LoginForm = (props) =>{

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const {setUser} = useContext(UserContext);
  const [state, setState] = useState({
    credentials: {
      username: '',
      password: '',
    }
  })

  const handleChange = (e) => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  // console.log(state.credentials);

  const login = (e) => {
    e.preventDefault()

    axios
      .post(`https://fish-friends.herokuapp.com/authRoute/login`, state.credentials)
      .then(res=> {
        console.log("axios post res.data from LoginForm.js",res);
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('username', state.credentials.username)
        localStorage.setItem('userId', res.data.userId)
        setUser({
          username: state.credentials.username,
          userId: res.data.userId
        })
        props.history.push('/Dashboard')
      })
      .catch(err=>console.log(err.message))
  }

  return(
    <Card className="login-card">
      <img src={Logo} alt="Fish Friends Logo" className="login-logo" />
      <h3 className="form-title">Login to you account</h3>
      <Form className="login-form" onSubmit={login}>
        <Input
          type="text"
          name="username"
          className="login-input"
          placeholder="User Name"
          value={state.credentials.username}
          onChange={handleChange}
        />

        <Input
          type="password"
          name="password"
          className="login-input"
          placeholder="Password"
          value={state.credentials.password}
          onChange={handleChange}

        />
        <Button className="login-button" type="submit" block>Sign In</Button>
      </Form>
      
      <div className="login-nav">
        <Link onClick={toggle}>
          <h4>I Don't Have An Account</h4>
        </Link>

        <h4>Forgot Password</h4>
      </div>

      <Modal isOpen={modal} toggle={toggle} size="lg" className="login-createAccount">
        <CreateAccount />
      </Modal>
    </Card>
  )
}

export default LoginForm;