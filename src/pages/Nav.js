import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav >
            <h1>Logo</h1>
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
