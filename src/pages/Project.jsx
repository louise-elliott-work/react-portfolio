
// Must utilize Router props to properly render the right project based on user selection
// Must render the title, link to deployed app, link to GitHub repo, GIF or screenshot of the deployed application

import React from "react";

function Project(props) {
    console.log(props);
    return (
        <div className="project-card">
            
            {props.projects.map(project => (
                <li className="list-group-item" key={project.id}>
                        <div className="content">
                            <ul>
                                <h4>{project.title}</h4>
                                <img alt={project.title} src={project.media} />
                                <li>{project.app}</li>
                                <li>{project.github}</li>
                            </ul>
                        </div>
                </li>
            ))}

        </div>
    );
}

export default Project;
