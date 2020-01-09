import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Card, Button, Form, Input, Modal } from 'reactstrap';

// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import './styles/LoginForm.scss';

import Logo from '../images/FishFriendsLogo.svg';

// const CreateAccount = ({ errors, touched }) => {

//     return (
//         <div>
//             <Card className="login-card">
//                 <img src={Logo} alt="Fish Friends Logo" className="login-logo" />
//                 <Form className="login-form">
//                     <Field type="text" name="username" placeholder="User Name" className="login-input" />
//                     {touched.username && errors.username && <p>{errors.username}</p>}
//                     <Field type="password" name="password" placeholder="Password" className="login-input" />
//                     {touched.password && errors.password && <p>{errors.password}</p>}
//                     <Field type="email" name="email" placeholder="Email Address" className="login-input" />
//                     {touched.email && errors.email && <p>{errors.email}</p>}
//                     <Button className="login-button btn-block">Create Account</Button>
//                 </Form>
//             </Card>
//         </div>
//     )
// }

// const FormikCreateAccount = withFormik({
//     mapPropsToValues({ username, password, email }) {
//         return {
//             username: username || "",
//             password: password || "",
//             email: email || ""
//         };
//     },

//     //======VALIDATION SCHEMA==========
//     validationSchema: Yup.object().shape({
//         username: Yup.string()
//             .min(3, "Your user name must be at least 3 characters.")
//             .required("A username is required."),
//         email: Yup.string()
//             .email("Email address must be a valid email.")
//             .required("An email is required."),
//         password: Yup.string()
//             .min(6, "Your password must be at least 6 characters.")
//             .required("A password is required.")
//     }),
//     //======END VALIDATION SCHEMA==========

//     handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
//         console.log(values);
//         if (values.email === "alreadytaken@atb.dev") {
//             setErrors({ email: "That email is already taken!" });
//         } else {
//             axios
//                 .post("https://fish-friends.herokuapp.com/authRoute/register", values)
//                 .then(res => {
//                     console.log(res);
//                     resetForm();
//                     setSubmitting(false);
//                 })
//                 .catch(err => {
//                     console.log(err, "There was an error.");
//                     setSubmitting(false);
//                 });
//         }
//     }
// })(CreateAccount);

// export default FormikCreateAccount;


const CreateAccount = (props) => {

    const [register, setRegister] = useState({
        email: '',
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        axios
            .post(`https://fish-friends.herokuapp.com/authRoute/register`, register)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/dashboard');
            })
            .catch(err => {
                console.log('There was an error!', err.message)
            });

        setRegister({
            email: '',
            username: '',
            password: '',
        })
    }

    return (
        <Card className="login-card">
            <img src={Logo} alt="Fish Friends Logo" className="login-logo" id="logo" />
            <Form className="login-form" onSubmit={handleRegister} >
                <Input
                    type="email"
                    name="email"
                    value={register.email}
                    onChange={handleChange}
                    className="login-input"
                    placeholder="Email Address"
                />

                <Input
                    type="text"
                    name="username"
                    value={register.username}
                    onChange={handleChange}
                    className="login-input"
                    placeholder="User Name"
                />

                <Input
                    type="password"
                    name="password"
                    value={register.password}
                    onChange={handleChange}
                    className="login-input"
                    placeholder="Password"
                />
                <Button className="login-button" onSubmit={handleRegister} block>Create Account</Button>
            </Form>
        </Card>
    )
}

let body = document.querySelector('body');
body.addEventListener('copy', function () {
    alert("Don't steal!");
})


export default CreateAccount;