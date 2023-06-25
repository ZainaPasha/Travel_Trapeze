import './App.css';
import React from 'react';
import NavBar from './NavBar';

function Login() {
    return (
        <div>
        <NavBar></NavBar>
        <form>
        <div className="login-form">
        <label>Email:</label>
        <input type="email" placeholder="Username" required />
        <label>Password:</label>
        <input type="password" min="8" max="16" required />
        </div>
        <div className="login-buttons">
        <button type="button" class="login-cancel">Cancel</button>
        <button type="button" class="login-submit">Login</button>
        </div>
        </form>
        </div>
    );
} 

export default Login;