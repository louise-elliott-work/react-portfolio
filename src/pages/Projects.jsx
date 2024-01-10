// Must render six instances of the Project component dynamically
// Store project details data in a JSON file and import it into the project
// Reusable component that takes JSON data as props and renders a single instance for each project

import React from "react";
import ProjectGallery from "./ProjectGallery";
import projects from "../projects.json";

console.log(projects);

function AccessProjects() {
    return (
        <div>
            <ProjectGallery projects={projects} />
        </div>
    )
}

export default AccessProjects;