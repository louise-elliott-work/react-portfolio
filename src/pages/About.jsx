import React from "react";
import './About.css';

// Home page containing name, headshot, brand statement and indication that this is my portfolio site
function About() {
    return (
        <div className="about-grid">
        <section className="about-heading-section">
            <strong className="about-heading">About</strong>
        </section>
        <strong className="brand-statement">
            <span className="professional-role">Front End Web Developer</span> with a background in education and non-governmental organisations.
        </strong>
        <div className="headshot-container"><img className="headshot" src="/profile-photo-square.jpeg" alt="The circular image shows a photo of Louise Elliott"></img></div>
        <section className="profile-three">
            Driven and always keen to learn and adapt.  Effective at problem-solving, identifying areas for improvements and supporting colleagues with up-skilling and implementing change.
            <br></br>
            <br></br>
            Fluent in Spanish.  Proficient in French.  Known as a conscientious professional with a keen eye for detail and a passion for making a difference.
            <br></br>
            <br></br>
            Technical skills include:
            <ul>
                <li className="skill-item"> HTML </li>
                <li className="skill-item"> CSS </li>
                <li className="skill-item"> Bootstrap </li>
                <li className="skill-item"> JavaScript </li>
                <li className="skill-item"> ReactJS </li>
                <li className="skill-item"> Node.js </li>
            </ul>
        </section>        
        </div>
    )
}

export default About;