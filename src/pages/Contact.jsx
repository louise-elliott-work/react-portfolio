import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import './Contact.css';

// Contact section including email address, GitHub profile link, LinkedIn link, PDF CV file, and contact form.
function Contact() {
    return (
        <div className="page-grid contact-grid">

            <section className="heading-container">
                <strong className="heading">Contact</strong>
            </section>

            <button className='button linkedin-button text'>
                <strong>LinkedIn</strong>
                <br></br>
                <Link to="https://linkedin.com/in/louise-elliott-work" className="text" target="_blank">www.linkedin.com/in/louise-elliott-work</Link>
            </button>
            <button className='button github-button text'>
                <strong>GitHub</strong>
                <br></br>
                <Link to="https://github.com/louise-elliott-work" className="text" target="_blank">www.github.com/louise-elliott-work</Link>
            </button>
            <button className='button cv-button text'>
                <strong>CV</strong>
                <br></br>
                <Link to="../public/cv.pdf" className="text" target="_blank">Click here to open the PDF</Link>
            </button>
            <button className='button email-button text'>
                <strong>Email</strong>
                <br></br>
                <Link to="mailto:louise.elliott.work@gmail.com" className="text" target="_blank">louise.elliott.work@gmail.com</Link>
            </button>

            <section className="contact-form-container">
                <section className="contact-form"><ContactForm /></section>
            </section>

        </div>
    )
}

export default Contact;
