// contact form for handling entry

import React, { useState } from 'react';
import './ContactForm.css';

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

    const handleFormSend = (event) => {
        // Prevent page from refreshing.
        event.preventDefault();
        // Check all fields have been completed.
        if (!formData.name || !formData.email || !formData.message) {
            // TODO change this from an alert
            alert('Please fill in all fields on the form');
        } else {
            setFormData();
            // TODO work out how best to capture form entries
        }

        setFormData({
            name: '',
            email: '',
            message: '',
            // TODO set this to time out after 10 seconds
            confirmation: 'Thank you for your message',
        });
        
    };

    return (
        <div className='contact-form-container'>
            <strong className='contact-form-heading'>Get in touch!</strong>
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
                <button className="form-element send-button"onClick={handleFormSend}>Send</button>
                <textarea readOnly={true} className='confirmation'
                    value={formData.confirmation}
                    name="confirmation"
                    onChange={handleFormSend}
                    type="confirmation"
                    placeholder=''
                />
            </form>
        </div>
    );
}

export default ContactForm;