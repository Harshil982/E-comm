import React from 'react';
import InstaIMG from './../../require-images/logo-instagram.png'
import './Styles/InstaHandles.css'

function InstaHandles(props) {
    const arrayR = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            <div className="insta">
                <img src={InstaIMG} alt="insta" data-aos="fade-left" />
                <h3 data-aos="zoom-in">Connect With Instagram Account</h3>
            </div>
            <div className="insta-handles-container" data-aos="fade-up">
                {arrayR.map((i, ind) => (
                    <div key={ind} className="any-Insta">
                    </div>
                ))}
            </div>
        </>
    );
}

export default InstaHandles;