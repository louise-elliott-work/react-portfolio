// Must include email address, CV PDF, GitHub profile link, LinkedIn link, a contact form for handling events
// Set up links and check functionality

import React from "react";
import ContactForm from "./ContactForm";
import './Contact.css';

function Contact() {
    return (
        <div className="contact-section">
            <section className="contact-links">
                <p>email: #louise.elliott.work@gmail.com</p>
                <p>GitHub profile link here #https://github.com/louise-elliott-work</p>
                <p>LinkedIn link here #www.linkedin.com/in/louise-elliott-work</p>
            </section>
            <section className="linked-documents">CV PDF here</section>
            <section className="contact-form"><ContactForm /></section>
        </div>
    )
}

export default Contact;