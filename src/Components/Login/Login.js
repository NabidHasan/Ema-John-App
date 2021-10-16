import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);

            })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form onSubmit=''>
                    <input type="email" placeholder='Email' /> <br /><br />
                    <input type="password" placeholder='Password' name="" id="" /><br /> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john? <Link to='/register'>Craete Account</Link></p>
                <div>--------or--------</div>
                <button onClick={handleSignIn} className='addToCart-btn'>Google SignIn</button>
            </div>

        </div>
    );
};

export default Login;