import React from "react";
import './Home.css';

// Home page containing name, headshot, brand statement and indication that this is my portfolio site
function About() {
    return (
        <div className="about-section">
            <section className="profile-text">Front End Web Developer with a background in education and non-governmental organisations.  Driven and always keen to learn and adapt.  Effective at problem-solving, identifying areas for improvements and supporting colleagues with up-skilling and implementing change.  Fluent in Spanish.  Proficient in French.  Known as a conscientious professional with a keen eye for detail and a passion for making a difference.</section>
            <section className="profile-photo-container"><img className="profile-photo" src="/profile-photo-square.jpeg" alt="The circular image shows a photo of Louise Elliott"></img></section>
            <section className="skills-container">
                <strong>Skills:</strong>
                <li className="skill-item"> HTML </li>
                <li className="skill-item"> CSS </li>
                <li className="skill-item"> Bootstrap </li>
                <li className="skill-item"> JavaScript </li>
                <li className="skill-item"> ReactJS </li>
                <li className="skill-item"> Node.js </li>
            </section>
        </div>
    )
}

export default About;