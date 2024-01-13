import React from "react";
import ProjectGallery from "./ProjectGallery";
import projects from "../projects.json";
import "./Projects.css"

// Must render six instances of the Project component dynamically
// Store project details data in a JSON file and import it into the project
// Reusable component that takes JSON data as props and renders a single instance for each project

function AccessProjects() {
    return (
        <div className="page-grid projects-grid">
            <section className="heading-container">
                <strong className="heading">Projects</strong>
            </section>
            <ProjectGallery projects={projects} />
        </div>
    )
}

export default AccessProjects;