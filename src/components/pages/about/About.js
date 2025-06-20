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
            </div>

        </>
    );
}

export default About;
