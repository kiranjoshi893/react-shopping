// import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import React, { Component, useState, useEffect } from 'react';
import { Button, Form} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LoginAction, LoginAction1, LoginError } from '../action/Action';
import {app, useFirebase} from '../Firebase'
import { loginService } from '../services/Services';
const auth = getAuth(app);

const Login = (props) => {
    const firebase = useFirebase()
    console.log(firebase, 'firebase121212')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogin = useSelector((state) => state.LoginStore.isLogin)
    const isLogin1 = useSelector((state) => state.LoginStore)
    const Logintoast = useSelector((state) => state.LoginStore.toast)
    console.log(isLogin1, 'LoginComponent')
    const loginHandler  = (data) => dispatch(LoginAction(data)) 
    const login = (data) => dispatch(LoginAction1(data))
    const loginError = (data) => dispatch(LoginError(data))
    const [disableButton, setDisableButton] = useState(false)
    const [inputValue, setInputValue] = useState({
        email:'',
        emailError: '',
        password: '',
        passwordError: '',
        loading:false,
        backendError: ''
    });
    const onChangeHandler = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value,
            emailError: "",
            passwordError: "",
            backendError:''
        })
        console.log(inputValue, 'inputValue')
        setDisableButton(false)
    }
    const submitLoginForm = () => {
        let emailRegex = !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/
        setDisableButton(true)
        if(inputValue.email === ''){
            setInputValue({
                ...inputValue, 
                emailError:'Enter your email',
            })
        }
        else if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/.test(inputValue.email)){
            setInputValue({
                ...inputValue,
                emailError:'Enter valid email id'
            })
        }
        else if(inputValue.password === ''){
            setInputValue({
                ...inputValue, passwordError:'Enter your passwords'
            })
        }
        else{
            loginService(inputValue).then(res => {
                console.log(res.data, 'response111111111')
                loginHandler(res.data)
                navigate('/')
            })
            .catch((error) => {
                console.log(error, 'response111111111')
                setInputValue({...inputValue, backendError:error.response.data})
                loginError(error.response.data)
                setDisableButton(false)
            })
        }
    }
    useEffect(() => {
        if(isLogin){
            // navigate(-1)
            navigate('/')
        }
    }, []);
    return (
        <div className='login-wrapper'>
            <div className='w-100 bg-white'>
                <h3 className='font-weight-bold mb-3 text-primary pb-3'>Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={inputValue.email} onChange={onChangeHandler} name='email' placeholder="Enter email" />
                    {inputValue.emailError ? <p className='text-danger'>{inputValue.emailError}</p> :''}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={inputValue.password} onChange={onChangeHandler} name='password' placeholder="Password" />
                    {inputValue.passwordError ? <p className='text-danger'>{inputValue.passwordError}</p> :''}
                </Form.Group>
                {inputValue.backendError ? <p className='text-danger'>{inputValue.backendError}</p> : ''}
                <Button disabled={disableButton} variant="primary" type="submit" onClick={submitLoginForm}>
                    Submit
                </Button>
                <p className='mt-4 mb-0'>Don't have an account? <Link to='/signup'> Signup here</Link></p>
            </div>
        </div>
    )
}
export default Login