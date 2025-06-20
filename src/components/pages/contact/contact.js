import React from 'react';
import '../../styles/Contact.css';
import Navbar from '../../navbar/Navbar';

function Contact() {
    return (
        <>
            <Navbar />

            <div className="contact">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>
                        Email: <a href="mailto:jkiratpal@gmail.com"><strong>jkiratpal@gmail.com</strong></a> &nbsp;|&nbsp;
                        City: <strong>Vancouver, Canada</strong> &nbsp;|&nbsp;
                        School: <strong>Simon Fraser University (SFU)</strong>
                    </p>
                </div>

                <div className="social_icons">
                    <a href="https://github.com/Kiratpal-Singh-Johal-SFU" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/kiratpal-singh-johal" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href={process.env.PUBLIC_URL + '/Resumewebsite.pdf'} target="_blank" rel="noreferrer">Resume</a>
                    <a href="https://www.instagram.com/kiratpalsinghjohal/" target="_blank" rel="noreferrer">Instagram</a>
                     <a href="https://wa.me/17783177226?text=Hi%20this%20is%20Kiratpal !" target="_blank" rel="noreferrer">WhatsApp</a>
                     <a href="https://www.sfu.ca/computing.html" target="_blank" rel="noreferrer">SFU CS Program</a>
                </div>
            </div>
        </>
    );
}

export default Contact;
