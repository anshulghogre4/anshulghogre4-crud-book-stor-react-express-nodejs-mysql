import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { doLogin } from '../services/api';
import "./Login.css";

export default function Login() {
     if (localStorage.getItem("user")) window.location.href = "/";

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleLogin = async (e) => {
        // api call to login
        e.preventDefault();
        const user = await doLogin(form);
        if (user.data) {
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "/";
        } 
       
    }
        let user,userValue;
    const handleInputChange =(e) =>{
        
        user = e.target.name;
        userValue= e.target.value;

        setForm({...form,[user]:userValue});
    }


    return (
        <div className='login-container'>
            <form className='login-form' onSubmit={handleLogin}>
                <h3>Login Form</h3>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input type="email" name='email' value={form.email} onChange={handleInputChange} id="email" className="form-control" required />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password"  name='password' value={form.password} onChange={handleInputChange} className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
            </form>
        </div>
    )
}
