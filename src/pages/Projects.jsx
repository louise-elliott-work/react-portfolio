import React from "react";
import ProjectGallery from "./ProjectGallery";
import projects from "../projects.json";
import "./Projects.css"

// Projects page showing the project gallery.
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