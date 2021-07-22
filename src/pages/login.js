import React, { useState } from 'react';
import { Redirect } from 'react-router';
import '../App.css';


const  Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async() => {
        <Redirect to='/home'/>;
    };
  return (
    <div className='login'>
        <form className='login-form' onSubmit={handleSubmit}>
            <h1> Login Here </h1>
            <label className="login-label">Enter Name</label>
            <input
                className="login-input"
                type ="name"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br />
            <label className="login-label">Enter email id</label>
            <input
                className="login-input"
                type ="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <br />
            <label className="login-label">Enter password</label>
            <input
                className="login-input"
                type ="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <br />
            <button
                className="login-button"
                type="submit"
            >
                Submit
            </button>
        </form>
    </div>
  );
}

export default Login;