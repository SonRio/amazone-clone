import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import './css/login.css';
import { auth } from './firebase';
import login from './images/login.jpg'

function Login() {

    const history = useHistory();
    const [ email, setEmail ] = useState();
    const [ password, setpassword ] = useState();

    const loginPage = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password).
        then((auth) => {
            // logged in, redirect to homepage
            history.push('/')
        }).catch((e) => alert(e.messeage))
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password).
        then((auth) => {
            history.push('/')
            // created account, redirect to homepage
        }).catch((e) => alert(e.messeage))
    }

    return (
        <div className="login">
            <img 
                src={login}
                alt="login"
                className="image__login"
            />
            <div className="login__form">
                <form>
                    <div className="form_group">
                        <label>Email: </label><br/>
                        <input 
                        onChange={e => setEmail(e.target.value)}
                        value={email} 
                        type="email" 
                        placeholder="Enter your email" 
                        />
                    </div>
                    <div className="form_group">
                        <label>Password: </label><br/>
                        <input 
                        onChange={e => setpassword(e.target.value)}
                        value = {password}
                        type="password"
                        placeholder="Enter your password" 
                        />
                    </div>
                    <div className="form_group_checkbox">
                        <input type="checkbox" />
                        <label>Remember your password</label><br/>
                    </div>
                    <button  
                        className="login__btn"
                        onClick={loginPage}
                    >
                    Sign in
                    </button>
                    <button  
                        className="login__register"
                        onClick={register}
                    >
                    Create account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
