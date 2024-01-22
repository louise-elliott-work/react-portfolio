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
                    <span className="professional-role"> Front End Web Developer </span> <span className="text"> with a background in <span className="key-areas"> child development </span> , <span className="key-areas"> education </span> and <span className="key-areas"> NGOs. </span></span>
                </strong>
                <img className="headshot" src="/profile-photo-square-color.jpg" alt="The image shows a headshot of Louise Elliott"></img>
            </section>
            <section className="professional-summary text">
                Driven and always keen to learn and adapt.  Effective at problem-solving, identifying areas for improvements and supporting colleagues with up-skilling and implementing change.
                <br></br>
                <br></br>
                Known as a conscientious professional with a keen eye for detail and a passion for making a difference. Experience working in a variety of socially responsible roles. Qualified foster carer providing alternative care at weekends and during school holidays.
                <br></br>
                <br></br>
                Skillset of ever-expanding web development tools and technologies alongside varied child development expertise supported by primarily self-sourced training and development.
                <br></br>
                <br></br>
                <strong><span className="subheading">Qualifications</span></strong>
                <ul className="qualifications-skills-list">
                    <li className="qualifications"> <img className="qualifications-image" src="/edx-logo.jpeg" /> <span className="qualifications-text text"> Front End Web Development Boot Camp Certificate </span> </li>
                    <li className="qualifications"> <img className="qualifications-image" src="/university-of-brighton-logo.jpeg" /> <span className="qualifications-text text"> Post Graduate Certificate in Education - Languages </span> </li>
                    <li className="qualifications"> <img className="qualifications-image" src="/university-of-bath-logo.jpeg" /> <span className="qualifications-text text"> First Class BSc(Hons) - International Management and Spanish </span> </li>
                </ul>
            </section>      
        </div>
    )
}

export default About;