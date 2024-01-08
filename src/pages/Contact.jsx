import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import './Contact.css';

// Contact section including email address, GitHub profile link, LinkedIn link, PDF CV file, and contact form.
function Contact() {
    return (
        <div className="contact-grid">
            <section className="contact-heading-section">
                {/* add background image */}
                <strong className="contact-heading">Contact</strong>
            </section>
            <button className='button email-button'>
                <span>Email</span>
                <Link to="mailto:louise.elliott.work@gmail.com" target="_blank">louise.elliott.work@gmail.com</Link>
            </button>
            <button className='button github-button'>
                <span>GitHub</span>
                <Link to="https://github.com/louise-elliott-work" target="_blank">louise-elliott-work</Link>
            </button>
            <button className='button linkedin-button'>
                <span>LinkedIn</span>
                <Link to="https://linkedin.com/in/louise-elliott-work" target="_blank">louise-elliott-work</Link>
            </button>
            <button className='button cv-button'>
                <span>CV</span>
                <Link to="..." className='cv-button' target="_blank">Click here to open the PDF</Link>
            </button>

            <section className="contact-form-container">
                <section className="contact-form"><ContactForm /></section>
            </section>
        </div>
    )
}

export default Contact;
