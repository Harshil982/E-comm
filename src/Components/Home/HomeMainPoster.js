import React from 'react';
import PosterImg1 from './../../require-images/MODEL NO - 2-04.png'
import PosterImg2 from './../../require-images/MODEL NO - 1-03.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Styles/HomeMainPoster.css'

function HomeMainPoster() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
        afterChange: function() {
            let siblings = document.querySelectorAll(".slick-slide");
            let current = document.querySelector(".slick-current");
    
            for(let i = 0; i < siblings.length; i++) {
                siblings[i].style.zIndex = 0;
            }
            current.style.zIndex = 10;
        },
        customPaging: i => (
            <div className="dots-nav">
            </div>
        )
    };
    const handleClick = (e) =>{
        console.log(e.target.value);
        alert(e.target.value)
    }
    return (
        <div className="home-main-poser-container">
            <Slider {...settings}>
                <div className="home-main-poster">
                    <div className="home-main-poster-text-content">
                        <h1 onClick={handleClick}>All Organic Skin Remedies1</h1>
                        <p>A helthier you from the inside out. We're sourced the cleanest ingrediants to create a line of skin care treatments that leave you feeling your best.</p>
                        <button onClick={handleClick} value="button1">Shop Products</button>
                    </div>
                    <div className="home-poster-img">
                        <img src={PosterImg1} alt="post"></img>
                    </div>
                </div>
                <div className="home-main-poster">
                    <div className="home-main-poster-text-content">
                        <h1>All Organic Skin Remedies2</h1>
                        <p>A helthier you from the inside out. We're sourced the cleanest ingrediants to create a line of skin care treatments that leave you feeling your best.</p>
                        <button onClick={handleClick} value="button2">Shop Products</button>
                    </div>
                    <div className="home-poster-img">
                        <img src={PosterImg2} alt="post"></img>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default HomeMainPoster;