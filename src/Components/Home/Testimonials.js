import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Styles/Testimonial.css'
import CustomerReview from './Customer_Review';

function Testimonials(props) {
    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed : 4000,
        pauseOnHover: true,
        centerMode : true,
        className : "center",
        centerPadding : 0,
      };
    return (
        <div style={{margin : "3vw 16vw"}} data-aos="fade-in">
            <h2 style={{textAlign : "center"}}>Our Happy Customer</h2>
            <Slider {...settings}>
                <CustomerReview />
                <CustomerReview />
                <CustomerReview />
                <CustomerReview />
                <CustomerReview />
                <CustomerReview />
                <CustomerReview />
            </Slider>
        </div>
    );
}

export default Testimonials;