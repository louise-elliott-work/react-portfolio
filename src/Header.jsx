import React from "react";
import NavBar from './NavBar';
import './Header.css';

// Header, containing NavBar, rendered across every page component of the site
function Header() {
    return (
        <div className="header-bar">
            <h1 className="heading">Louise Elliott</h1>
            <h2 className="subheading">Front End Web Developer</h2>
            <section className="navbar"><NavBar /></section>
        </div>
    )
};

export default Header;