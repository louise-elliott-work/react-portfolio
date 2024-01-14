import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

// contact form for handling entry

function ContactForm() {
    // set form data fields as empty
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        confirmation: '',
    });
    // capture data entered onto form
    const handleFormEntry = (e) => {
        let value = e.target.value;
        const name = e.target.name;

    // update the state
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const form = useRef();

    const sendEmail = (event) => {
        // Prevent page from refreshing.
        event.preventDefault();
        // Send email.
        emailjs.sendForm('service_mu3hg2c', 'template_04eep6c', form.current, 'BE-dvmJowjVbkVB9p')
        // Reset form and display confirmation message
        setFormData({
            name: '',
            email: '',
            message: '',
            confirmation: 'Thank you for your message',
        });
    };

    return (
        <div className='contact-form-container'>
            <strong className='contact-form-heading'>Get in touch!</strong>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <input className='form-field name'
                    value={formData.name}
                    name="name"
                    onChange={handleFormEntry}
                    type="text"
                    placeholder="Name"
                />
                <input className='form-field email'
                    value={formData.email}
                    name="email"
                    onChange={handleFormEntry}
                    type="email"
                    placeholder="Email"
                />
                <input className='form-field message'
                    value={formData.message}
                    name="message"
                    onChange={handleFormEntry}
                    type="message"
                    placeholder="Message"
                />
                <button className="form-field send-button"onClick={sendEmail}>Send</button>
                <textarea readOnly={true} className='confirmation'
                    value={formData.confirmation}
                    name="confirmation"
                    onChange={sendEmail}
                    type="confirmation"
                    placeholder=''
                />
            </form>
        </div>
    );
}

export default ContactForm;