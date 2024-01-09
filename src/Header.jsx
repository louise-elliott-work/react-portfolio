import React from "react";
import NavBar from './NavBar';
import './Header.css';

// Header, containing NavBar, rendered across every page component of the site
function Header() {
    return (
        <div className="header-bar">
            <h1 className="heading">Louise Elliott</h1>
            <h2>Front End Web Developer</h2>
            <NavBar />
        </div>
    )
};

export default Header;