import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

// Form for users to make contact, with results sent by email.
function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        confirmation: "",
    });
    const handleFormEntry = (e) => {
        let value = e.target.value;
        const name = e.target.name;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const form = useRef();
    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm("service_mu3hg2c", "template_04eep6c", form.current, "BE-dvmJowjVbkVB9p")
        setFormData({
            name: "",
            email: "",
            message: "",
            confirmation: "Thank you for your message",
        });
    };

    return (
        <div className="contact-form-container">
            <strong className="contact-form-heading">Get in touch!</strong>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <input className="form-field"
                    value={formData.name}
                    name="name"
                    onChange={handleFormEntry}
                    type="text"
                    placeholder="Name"
                />
                <input className="form-field"
                    value={formData.email}
                    name="email"
                    onChange={handleFormEntry}
                    type="email"
                    placeholder="Email"
                />
                <input className="form-field message"
                    value={formData.message}
                    name="message"
                    onChange={handleFormEntry}
                    type="message"
                    placeholder="Message"
                />
                <button className="form-field send-button"onClick={sendEmail}>Send</button>
                <textarea readOnly={true} className="confirmation"
                    value={formData.confirmation}
                    name="confirmation"
                    onChange={sendEmail}
                    type="confirmation"
                    placeholder=""
                />
            </form>
        </div>
    );
}

export default ContactForm;