
// Must utilize Router props to properly render the right project based on user selection
// Must render the title, link to deployed app, link to GitHub repo, GIF or screenshot of the deployed application

import React from "react";

function ProjectGallery(props) {
    console.log(props);
    return (
        <div>
            {props.projects.map(project => (
                <li className="list-group-item" key={project.id}>
                    <div className="card" style={{ width: '100rem' }}>
                        <div className="card-body">
                            <ul className="class-text">
                                <h4>{project.title}</h4>
                                <img className="card-img-top" alt={project.title} src={project.media} />
                                <li>{project.app}</li>
                                <li>{project.github}</li>
                            </ul>
                        </div>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default ProjectGallery;