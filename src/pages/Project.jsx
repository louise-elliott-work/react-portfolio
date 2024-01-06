// Reusable component that takes JSON data as props and renders a single instance for each project
// Must utilize Router props to properly render the right project based on user selection
// Must render the title, link to deployed app, link to GitHub repo, GIF or screenshot of the deployed application

import React from "react";
import "public/style.css";

function Project(props) {
    return (
        <div className="card">
            <div className="main-info">
                <img alt={props.title} src={props.media} />
            </div>
            <div className="content">
                <ul>
                    <li>{props.app}</li>
                    <li>{props.github}</li>
                </ul>
            </div>
        </div>
    );
}

export default Project;
