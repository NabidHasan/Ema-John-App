import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <nav>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/review">Order Review</NavLink>
                    <NavLink to="/inventory">Manage Inventory</NavLink>
                    {user.email && <span style={{ color: 'white' }}>
                        Hello {user.displayName}</span>}

                    {
                        user.email ? <button onClick={logOut} >Logout</button> :

                            <NavLink to="/login">LogIn</NavLink>
                    }


                </nav>
            </div>

        </div>
    );
};

export default Header;