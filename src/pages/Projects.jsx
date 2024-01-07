// Must render six instances of the Project component dynamically
// Store project details data in a JSON file and import it into the project
// Reusable component that takes JSON data as props and renders a single instance for each project

import React from "react";
import { NavLink as ProjectSelection } from 'react-router-dom';
import projects from "../projects.json";
import ProjectGallery from "./ProjectGallery.jsx";

console.log(projects);

function AccessProjects() {
    return (

        <div>
        <ProjectGallery projects={projects} />

        <p>project selection should show here</p>

        <ul className="nav nav-tabs">

            {/* <li className="nav-item">
                <ProjectSelection
                    to="/"
                    end
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                Project 1
                </ProjectSelection>
            </li>

            <li className="nav-item">
                <ProjectSelection
                    to="{projects.title}"
                    end
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                Project 2
                </ProjectSelection>
            </li>

            <li className="nav-item">
                <ProjectSelection
                    to="{projects.title}"
                    end
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                Project 3
                </ProjectSelection>
            </li>

            <li className="nav-item">
                <ProjectSelection
                    to="{projects.title}"
                    end
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                Project 4
                </ProjectSelection>
            </li>

            <li className="nav-item">
                <ProjectSelection
                    to="{projects.title}"
                    end
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                Project 5
                </ProjectSelection>
            </li>

            <li className="nav-item">
                <ProjectSelection
                    to="{projects.title}"
                    end
                    className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                Project 6
                </ProjectSelection>
            </li> */}

        </ul>

    </div>
    )
}

export default AccessProjects;