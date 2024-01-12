// Must utilize Router props to properly render the right project based on user selection
// Must render the title, link to deployed app, link to GitHub repo, GIF or screenshot of the deployed application

import React from "react";
import { Link } from "react-router-dom";
import './ProjectGallery.css';
import Carousel from 'react-bootstrap/Carousel';

function ProjectGallery(props) {
    console.log(props);
    return (
        <Carousel className="project-carousel">
            {props.projects.map(project => (
                <Carousel.Item key={project.id} className="project-card">
                    <section className="project-card-grid">
                        <p className="project-title">{project.title}</p>
                        <div className="project-media-container"><img className="project-media" alt={project.title} src={project.media} /></div>
                        <p className="project-summary">{project.summary}</p>
                        <Link className="app-link" to={project.app} target="_blank"><strong>App</strong><br></br></Link>
                        <Link className="github-link" to={project.github} target="_blank"><strong>GitHub</strong><br></br></Link>   
                    </section>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ProjectGallery;