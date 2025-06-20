import React from 'react';
import '../../styles/Project.css';

function Project() {
    return (
        <>
            <div className="project">
                <div className="project-info">
                    <h2>Cricket Auction</h2>
                    <p>
                        A web application for hosting local cricket tournament auctions.
                        It supports many features such as Team Purse management, Bidding increment,
                        Random player picking for the next auction, adding new credits to teams with empty purse, and more.
                    </p>
                </div>

                {/* Row 1 - Images */}
                <div className="media-row">
                    <div className="media-item">
                        <img src="YOUR_IMAGE_1_URL" alt="Screenshot 1" />
                    </div>
                    <div className="media-item">
                        <img src="YOUR_IMAGE_2_URL" alt="Screenshot 2" />
                    </div>
                </div>

                {/* Row 2 - Images */}
                <div className="media-row">
                    <div className="media-item">
                        <img src="YOUR_IMAGE_3_URL" alt="Screenshot 3" />
                    </div>
                    <div className="media-item">
                        <img src="YOUR_IMAGE_4_URL" alt="Screenshot 4" />
                    </div>
                </div>

                {/* Row 3 - Video */}
                <div className="media-video">
                    <video src="YOUR_VIDEO_URL" controls autoPlay loop muted></video>
                </div>

                {/* Web App Link */}
                <div className="project-link">
                    <a href="https://ipl-mock-auction-git-main-kiratpal-singh-johals-projects.vercel.app/teams" target="_blank" rel="noreferrer">View Live Application</a>
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

export default Project;
