import React from 'react'
import '../App.css';
import {Link , } from 'react-router-dom';

function Nav() {
    return (
        <nav >
            <Link to="/"> <h1 className="logo">Logo</h1> </Link>
            <ul className="nav-link">
                <Link to="/about">
                <li> About</li>
                </Link>
                <Link to="contact"> 
                <li> Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
