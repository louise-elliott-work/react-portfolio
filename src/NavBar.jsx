import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

// NavBar within header bar, rendering page selected by user.
function NavBar() {
    return (
        <ul className="nav nav-tabs">
        
            <li className="nav-item">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                    }
                >
                About
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink
                    to="projects"
                    className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                    }
                >
                Projects
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink
                    to="contact"
                    end
                    className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                    }
                >
                Contact
                </NavLink>
            </li>

        </ul>
    )
};

export default NavBar;






