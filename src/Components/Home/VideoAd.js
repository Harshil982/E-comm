import React from 'react';
import ReactPlayer from 'react-player';
import './Styles/VideoAd.css'

function VideoAd(props) {
    return (
        <div className="video-ad">
            <ReactPlayer
                url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                className="react-player"
                playing={true}
                loop={true}
                controls={false}
                muted={true}
                width="50%"
                height="40vw"
            />
            <div className="video-ad-text-content">
                <div data-aos="fade-right">
                    <h1>Social Media Videos Help to Care</h1>
                    <p>A helthier you from the inside out. We're sourced the cleanest ingrediants to create a line of skin care treatments that leave you feeling your best.</p>
                    <button>View More</button>
                </div>
            </div>
        </div>
    );
}

export default VideoAd;