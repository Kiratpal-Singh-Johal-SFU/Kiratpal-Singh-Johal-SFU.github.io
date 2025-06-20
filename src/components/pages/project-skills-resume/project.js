import React, { useState } from 'react';
import '../../styles/Project.css';

import adminBoard from '../../../assets/adminboard.jpg';
import admin2 from '../../../assets/admin2.jpg';
import ownerpage from '../../../assets/ownerpage.jpg';
import teamoverview from '../../../assets/teamoverview.jpg';
import Navbar from '../../navbar/Navbar';


function Project() {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <>
        <Navbar />
            <div className={`project ${lightboxImage ? 'no-click' : ''}`}>
                <div className="project-info">
                    <h2>
                    <a href="https://ipl-mock-auction-git-main-kiratpal-singh-johals-projects.vercel.app/teams" target="_blank" rel="noreferrer">Cricket Auction</a>
                    </h2>
                    <p>
                        A web application for hosting local cricket tournament auctions.
                        It supports many features such as Team Purse management, Bidding increment,
                        Random player picking for the next auction, adding new credits to teams with empty purse, and more.
                    </p>
                </div>

                <div className="media-row">
                    <div className="media-item" onClick={() => openLightbox(adminBoard)}>
                        <img src={adminBoard} alt="Admin Board" />
                        <div className="overlay-text">Click to Expand</div>
                    </div>
                    <div className="media-item" onClick={() => openLightbox(admin2)}>
                        <img src={admin2} alt="Admin 2" />
                        <div className="overlay-text">Click to Expand</div>
                    </div>
                    <div className="media-item" onClick={() => openLightbox(ownerpage)}>
                        <img src={ownerpage} alt="Owner Page" />
                        <div className="overlay-text">Click to Expand</div>
                    </div>
                    <div className="media-item" onClick={() => openLightbox(teamoverview)}>
                        <img src={teamoverview} alt="Team Overview" />
                        <div className="overlay-text">Click to Expand</div>
                    </div>
                </div>

                <div className="project-link">
                    <a href="https://ipl-mock-auction-git-main-kiratpal-singh-johals-projects.vercel.app/teams" target="_blank" rel="noreferrer">View Live Application</a>
                </div>
            </div>

            <div className="social_icons">
                <a href="https://github.com/Kiratpal-Singh-Johal-SFU" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/kiratpal-singh-johal" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/kiratpalsinghjohal/" target="_blank" rel="noreferrer">Instagram</a>
            </div>

            {lightboxImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <img src={lightboxImage} alt="Full View" />
                </div>
            )}
        </>
    );
}

export default Project;
