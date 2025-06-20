import React from 'react';
import './About.css';
import profilePhoto from '../../assets/headshot.jpg';
function About() {
    return (
        <>
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
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="YOUR_RESUME_LINK" target="_blank" rel="noreferrer">Resume</a>
            </div>

        </>
    );
}

export default About;
