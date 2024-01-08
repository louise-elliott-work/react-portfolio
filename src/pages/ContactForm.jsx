// contact form for handling entry

import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
    // set form data fields as empty
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    // capture data entered onto form
    const handleFormEntry = (e) => {
        let value = e.target.value;
        const name = e.target.name;

    // control length of message entered
    if (name === 'message') {
        value = value.substring(25, 200);
    }
    // update the state
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSend = (e) => {
        // Prevent page from refreshing.
        e.preDefault();
        // Check all fields have been completed.
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields on the form');
        } else {
            setFormData();
        }

        setFormData({
            name: '',
            email: '',
            message: '',
        });
        <p>Thank for your message, {formData.name} - I'll be in touch!</p>
    };

    return (
        <div className='contact-form-container'>
            <form className="contact-form">
                <input className='form-element name'
                    value={formData.name}
                    name="name"
                    onChange={handleFormEntry}
                    type="text"
                    placeholder="Name"
                />
                <input className='form-element email'
                    value={formData.email}
                    name="email"
                    onChange={handleFormEntry}
                    type="email"
                    placeholder="Email"
                />
                <input className='form-element message'
                    value={formData.message}
                    name="message"
                    onChange={handleFormEntry}
                    type="message"
                    placeholder="Message"
                />
                <button className="form-element send-button" onClick={handleFormSend}>Send</button>
            </form>
        </div>
    );
}

export default ContactForm;