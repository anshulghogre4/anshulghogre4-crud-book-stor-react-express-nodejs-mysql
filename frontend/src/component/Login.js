import React, { useState } from 'react'
import { doLogin } from '../services/api';
import "./Login.css";

export default function Login() {
    // if (localStorage.getItem("user")) window.location.href = "/";

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleLogin = () => {
        // api call to login
        const user = doLogin(form);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/";
    }


    return (
        <div className='login-container'>
            <form className='login-form' onSubmit={handleLogin}>
                <h3>Login Form</h3>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input type="email" id="email" className="form-control" required />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
            </form>
        </div>
    )
}
