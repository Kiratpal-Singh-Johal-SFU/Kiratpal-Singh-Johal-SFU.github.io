import React from 'react';
import '../../styles/About.css';
import profilePhoto from '../../../assets/headshot.jpg';
import Navbar from '../../navbar/Navbar';


function About() {
    return (
        <>
        <Navbar />
            <div className="about">
                <div className="bio">
                    <p>I'm a Computer Science student at SFU from India.<br/>
                    I love snowboarding, tennis, and learning new sports!</p>
                </div>
                <div className="image">
                    <img src={profilePhoto} alt="Profile" />
                </div>
                <div className="name">
                    <h1>Kiratpal<br/>Singh <br/> Johal</h1>
                </div>
            </div>
                <div className="empty">
                </div>
                 <div className="social_icons">
                <a href="https://github.com/Kiratpal-Singh-Johal-SFU" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/kiratpal-singh-johal" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href={process.env.PUBLIC_URL + '/Resumewebsite.pdf'} target="_blank" rel="noreferrer">Resume</a>
                    <a href="https://www.instagram.com/kiratpalsinghjohal/" target="_blank" rel="noreferrer">Instagram</a>
                     <a href="https://wa.me/17783177226?text=Hi%20this%20is%20Kiratpal !" target="_blank" rel="noreferrer">WhatsApp</a>
                     <a href="https://www.sfu.ca/computing.html" target="_blank" rel="noreferrer">SFU CS Program</a>
            </div>

        </>
    );
}

export default About;
