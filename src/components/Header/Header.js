import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <nav className='navbar'>
            <Link className='navbar-logo' to='/'><img src={logo} alt="something wrong" /></Link>
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ? <Link onClick={logOut} className='logout-btn'>Log out</Link> :
                        <Link className='login-btn' to="/login">Log in</Link>
                }
            </div>
        </nav>
    );
};

export default Header;