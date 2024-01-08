import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import './Contact.css';

// Contact section including email address, GitHub profile link, LinkedIn link, PDF CV file, and contact form.
function Contact() {
    return (
        <div className="contact-section">
            <strong className='links-heading'>Links</strong>
            <section className="contact-links-container">
                <button className='button email-button'>
                    <span>Email</span>
                    <Link to="mailto:louise.elliott.work@gmail.com" className='email-button' target="_blank">louise.elliott.work@gmail.com</Link
                ></button>
                <button className='button github-button'>
                    <span>GitHub</span>
                    <Link to="https://github.com/louise-elliott-work" className='github-button' target="_blank">louise-elliott-work</Link>
                </button>
                <button className='button linkedin-button'>
                    <span>LinkedIn</span>
                    <Link to="https://linkedin.com/in/louise-elliott-work" className='linkedin-button' target="_blank">louise-elliott-work</Link>
                </button>
                <button className='button cv-button'>
                    <span>CV</span>
                    <Link to="..." className='cv-button' target="_blank">Click here to open the PDF</Link>
                </button>
            </section>
            <strong className='contact-form-heading'>Contact form</strong>
            <section className="contact-form"><ContactForm /></section>
        </div>
    )
}

export default Contact;
