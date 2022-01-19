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
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
                centerMode : false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows : false
              }
            }
          ]
      };
    return (
        <div className="testimonials-container" data-aos="fade-in">
            <h2>Our Happy Customer</h2>
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