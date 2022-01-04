// this component is for footer
import React, { useState } from 'react';
import './../Styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    //setting input field value
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue);
    }
    return (
        <>
            <div className="subscribe">
                <div className="flex-cont">
                    <h1>Join the Sooth family</h1>
                    <div className="verticle-divider"></div>
                    <p>lorem ipsum dolor si gnjdn kdnfm kdndk ksnenek pwkndk</p>
                </div>
                <div className="flex-1">
                    <form>
                        <input type="email" onChange={handleInputChange} placeholder="Your email...." />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="foot-note">
                <h1>LOGO</h1>
                <div className="footnote-location-info">
                    <div>
                        <p>Explore our innovative skincare products</p>
                        <form>
                            <input type="email" onChange={handleInputChange} placeholder="Your email...." />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                    <div>
                        <p>GET IN TOUCH</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3666.1054873996095!2d72.6362340650507!3d23.239248134843795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLDRP!5e0!3m2!1sen!2sin!4v1641310021006!5m2!1sen!2sin" style={{border : "0",height : "140px" ,width : "150Px"}} allowFullScreen="" loading="lazy" title="Location"></iframe>
                    </div>
                    <div>
                        <h3>Information</h3>
                        <p>About Us</p>
                        <p>The Blogs</p>
                        <p>Contact Us</p>
                        <p>Delivery</p>
                        <p>The Shop</p>
                    </div>
                    <div>
                        <h3>MORE</h3>
                        <p>Credit Slips</p>
                        <p>Orders</p>
                        <p>Personal info</p>
                    </div>
                </div>
                <div className="divider"></div>
                <p style={{color : "white"}}>SOOTH ALL RIGHTS RESERVED</p>
                <div className="links">
                    <div>
                        <p>Privacy Policies</p>
                        <p>Term of use</p>
                        <p>Contact us</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} style={{color : "white"}} />
                        <FontAwesomeIcon icon={faInstagram} style={{color : "white"}} />
                        <FontAwesomeIcon icon={faLinkedin} style={{color : "white"}} />
                        <FontAwesomeIcon icon={faYoutube} style={{color : "white"}} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;