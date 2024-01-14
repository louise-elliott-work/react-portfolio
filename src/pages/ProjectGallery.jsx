import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./ProjectGallery.css";

// Carousel displaying projects stored in projects.json, with title, link to deployed app, link to GitHub repo and screenshot.
function ProjectGallery(props) {
    return (
        <Carousel className="project-carousel">
            {props.projects.map(project => (
                <Carousel.Item key={project.id}>
                    <section className="project-card-grid">
                        <p className="project-title text">{project.title}</p>
                        <div className="project-media-container"><img className="project-media" alt={project.title} src={project.media} /></div>
                        <section className="project-detail text">
                            <p>{project.summary}</p>
                            <p>Visit the app <Link to={project.app} target="_blank"><strong className="text">here</strong></Link></p>
                            <p>Visit the GitHub repo <Link to={project.github} target="_blank"><strong className="text">here</strong></Link></p>
                        </section>
                    </section>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ProjectGallery;