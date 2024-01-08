// contact form for handling entry

import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
    // set form data fields as empty
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
      // prevent the page from refreshing
        e.preDefault();
        if (!formData.firstName || !formData.lastName) {
            alert('Fill out your first and last name please!');
        } else if (formData.message.length < 6) {
            alert(
                `Choose a more secure message ${formData.firstName} ${formData.lastName}`
            );
            } else {
            alert(`Hello ${formData.firstName} ${formData.lastName}`);
            }

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        });
        <p>Thank for your message, {formData.firstName} {formData.lastName} - I'll be in touch!</p>
    };

    return (
        <div className='contact-form-container'>
            <form className="contact-form">
                <input className='form-element name'
                    value={formData.firstName}
                    name="firstName"
                    onChange={handleFormEntry}
                    type="text"
                    placeholder="First Name"
                />
                <input className='form-element name'
                    value={formData.lastName}
                    name="lastName"
                    onChange={handleFormEntry}
                    type="text"
                    placeholder="Last Name"
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