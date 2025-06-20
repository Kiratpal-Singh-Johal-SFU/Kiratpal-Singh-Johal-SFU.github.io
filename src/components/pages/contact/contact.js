import React from 'react';
import '../../styles/Contact.css';

function Contact() {
    return (
        <>
            <div className="contact">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>Email: <a href="mailto:jkiratpal@gmail.com">jkiratpal@gmail.com</a></p>
                    <p>City: Vancouver, Canada</p>
                    <p>School: Simon Fraser University (SFU)</p>
                </div>
            </div>

            <div className="social_icons">
                <a href="https://github.com/Kiratpal-Singh-Johal-SFU" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="YOUR_RESUME_LINK" target="_blank" rel="noreferrer">Resume</a>
            </div>
        </>
    );
}

export default Contact;
