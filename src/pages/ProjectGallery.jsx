
// Must utilize Router props to properly render the right project based on user selection
// Must render the title, link to deployed app, link to GitHub repo, GIF or screenshot of the deployed application

import React from "react";
import './ProjectGallery.css';

function ProjectGallery(props) {
    console.log(props);
    return (
        <div>
            {props.projects.map(project => (
                <li key={project.id}>
                    <div className="project-card">
                            <ul className="class-text">
                                <h4 className="project-heading">{project.title}</h4>
                                <img className="project-media" alt={project.title} src={project.media} />
                                <li className="project-link">App: {project.app}</li>
                                <li className="project-link">GitHub repo: {project.github}</li>
                            </ul>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default ProjectGallery;