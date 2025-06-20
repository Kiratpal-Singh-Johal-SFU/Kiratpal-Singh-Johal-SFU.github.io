import React from 'react';
import '../../styles/Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="info">
                <h2>Contact Information</h2>
                <p>Email: <a href="mailto:jkiratpal@gmail.com">jkiratpal@gmail.com</a></p>
                <p>City: Vancouver, Canada</p>
                <p>School: Simon Fraser University (SFU)</p>
                <div className="social_links">
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;