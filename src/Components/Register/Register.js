import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='register-form'>
                <div>
                    <h2>Register</h2>
                    <form onSubmit=''>
                        <input placeholder='Name' type="text" name="" id="" /> <br /> <br />
                        <input type="email" placeholder='Email' /> <br /><br />
                        <input type="password" placeholder='Password' name="" id="" /><br /> <br />
                        <input type="password" placeholder='Re-enter Password' name="" id="" /><br /> <br />
                        <input type="submit" value="Submit" />
                    </form>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                    <button className='addToCart-btn'>Google SignIn</button>

                </div>

            </div>
        </div>
    );
};

export default Register;