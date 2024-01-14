import React from "react";
import NavBar from "./NavBar";
import "./Header.css";

// Header bar, containing navigation elements, rendered across every page of the site.
function Header() {
    return (
        <div className="header-bar">
            <h1 className="name">Louise Elliott</h1>
            <h2 className="role">Front End Web Developer</h2>
            <section className="navbar"><NavBar /></section>
        </div>
    )
};

export default Header;