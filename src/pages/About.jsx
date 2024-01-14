import React from "react";
import "./About.css";

// Home page containing name, headshot and brand statement.
function About() {
    return (
        <div className="page-grid about-grid">
        <section className="heading-container">
            <strong className="heading">About</strong>
        </section>
        <section className="brand-section">
            <strong className="brand-statement">
                <span className="professional-role">Front End Web Developer</span> <span className="text">with a background in education and non-governmental organisations.</span>
            </strong>            
            <img className="headshot" src="/profile-photo-square.jpeg" alt="The image shows a headshot of Louise Elliott"></img>
        </section>
        <section className="professional-summary text">
            Driven and always keen to learn and adapt.  Effective at problem-solving, identifying areas for improvements and supporting colleagues with up-skilling and implementing change.
            <br></br>
            <br></br>
            Known as a conscientious professional with a keen eye for detail and a passion for making a difference.
            <br></br>
            <br></br>
            Technical skills include:
            <ul>
                <li> <img src="/bootstrap.svg" /> Bootstrap </li>
                <li> <img src="/css3.svg" /> CSS3 </li>
                <li> <img src="/github.svg" /> GitHub </li>
                <li> <img src="html5.svg" /> HTML5 </li>
                <li> <img src="/js.svg" /> JavaScript </li>
                <li> <img src="/node-js.svg" /> Node </li>
                <li> <img src="/react.svg" /> React </li>
                <li> <img src="/terminal-solid.svg" /> Terminal </li>                
            </ul>
        </section>        
        </div>
    )
}

export default About;