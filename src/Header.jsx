import React from "react";
import NavBar from './NavBar';

// Header, containing NavBar, rendered across every page component of the site
function Header() {
    return (
        <div>
            <h1>Louise Elliott - portfolio</h1>
            <NavBar />
        </div>
    )
};

export default Header;