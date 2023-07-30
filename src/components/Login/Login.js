import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { useNavigate } from "react-router-dom";
import { logoURL } from './logoURL';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/shop';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => alert(error))
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => alert(error))
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='signUp-link'>New to Ema-john? <Link to='/signup' className='link'>Create New Account</Link></p>
            <p className='alternative-way-divider'>or</p>
            <button onClick={handleGoogleSignIn}>
                <img src={logoURL} alt="wrong" />
                Continue with Google
            </button>
        </div>
    );
};

export default Login;