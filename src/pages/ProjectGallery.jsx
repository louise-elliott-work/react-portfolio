// Must utilize Router props to properly render the right project based on user selection
// Must render the title, link to deployed app, link to GitHub repo, GIF or screenshot of the deployed application

import React from "react";
import './ProjectGallery.css';
import Carousel from 'react-bootstrap/Carousel';

function ProjectGallery(props) {
    console.log(props);
    return (
        <Carousel>
            {props.projects.map(project => (
                <Carousel.Item key={project.id} className="project-card">
                    <ul className="class-text">
                        <Carousel.Caption className="project-heading">{project.title}</Carousel.Caption>
                        <img className="project-media" alt={project.title} src={project.media} />
                        <li className="project-link">App: {project.app}</li>
                        <li className="project-link">GitHub repo: {project.github}</li>
                    </ul>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ProjectGallery;