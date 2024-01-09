import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import projects from './projects.json';

function NavBar() {
    return (
        <ul className="nav nav-tabs">
        
            <li className="nav-item">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                About
                </NavLink>
            </li>

            <li className="nav-item">
            <NavLink
                to="projects"
                className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
                }
            >
                Projects
            </NavLink>

                {/* collapsible sub-menu for projects */}
                {/* <div className='project-nav-links'>

                    <li className="project-nav-item">
                        <NavLink
                            to="projects"
                            className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                            }
                        >

                            project one
                        </NavLink>
                    </li>

                    <li className="project-nav-item">
                        <NavLink
                            to="projects"
                            className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            project two
                        </NavLink>
                    </li>

                    <li className="project-nav-item">
                        <NavLink
                            to="projects"
                            className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            project three
                        </NavLink>
                    </li>

                    <li className="project-nav-item">
                        <NavLink
                            to="projects"
                            className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            project four
                        </NavLink>
                    </li>
                    
                    <li className="project-nav-item">
                        <NavLink
                            to="projects"
                            className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            project five
                        </NavLink>
                    </li>

                    <li className="project-nav-item">
                        <NavLink
                            to="projects"
                            className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            project six
                        </NavLink>
                    </li>

                </div> */}
            </li>

            <li className="nav-item">
            <NavLink
                to="contact"
                end
                className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
                }
            >
            Contact
            </NavLink>
            </li>

        </ul>
    )
};

export default NavBar;






