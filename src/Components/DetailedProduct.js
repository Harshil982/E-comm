import React, { useState, useEffect } from 'react';
import './../Styles/DetailedProduct.css'
import Card from './Card';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Collapsible from 'react-collapsible'
import StarRatings from 'react-star-ratings'
// import { useLocation } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function DetailedProduct(props) {
    // const location = useLocation()
    // console.log(location);
    const [quantity, setQuantity] = useState(1)
    const Images = ['/Recent news - 1.png', '/Recent news - 2.png', '/Recent news - 3.png', '/Recent news - 4.png']

    useEffect(() => {
        console.log(props);
        document.title = "Detailed Product"
        window.scrollTo(0,0);
        setQuantity(1);
    },[props])

    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        afterChange: function () {
            let siblings = document.querySelectorAll(".slick-slide");
            let current = document.querySelector(".slick-current");

            for (let i = 0; i < siblings.length; i++) {
                siblings[i].style.zIndex = 0;
            }
            current.style.zIndex = 10;
        },
        customPaging: function (i) {
            return (
                <img src={Images[i]} className="image-navigation" alt="dots" />
            );
        },
    };

    //setting state value for quantity

    // handling quantity increment
    const handleIncrement = () => {
        const currentQuantity = quantity
        const newQuantity = currentQuantity + 1
        setQuantity(newQuantity)
    }

    // handling quantity decrement
    const handledecrement = () => {
        const currentQuantity = quantity
        if (currentQuantity === 1) {
            setQuantity(1)
        }
        else {
            const newQuantity = currentQuantity - 1
            setQuantity(newQuantity)
        }
    }
    const cardData =
        [
            {
                item: "All Organic Vitiligo Balm1",
                discount: 20,
                ingrediants: "All organic Ingrediants",
                Price: 15.99,
            },
            {
                item: "All Organic Vitiligo Balm2",
                discount: 19,
                ingrediants: "All organic Ingrediants",
                Price: 15.99,
            },
            {
                item: "All Organic Vitiligo Balm3",
                discount: 18,
                ingrediants: "All organic Ingrediants",
                Price: 15.99,
            },
            {
                item: "All Organic Vitiligo Balm4",
                discount: 17,
                ingrediants: "All organic Ingrediants",
                Price: 15.99,
            }
        ]
    const { item, discount, Price } = props.location.state;
    const Details = (props) => {
        return (
            <div className="collapse-details">
                <p><b>{props.data}</b></p>
                <p className="plus-sign">&#10133;</p>
            </div>
        )
    }
    return (
        <>
        <Link to="/wishlist">Chalo</Link>
            <div className="detailed-product-container">
                <div className="detailed-product-description">
                    <div className="product-pictures">
                        <Slider {...settings}>
                            <img src="/Recent news - 1.png" alt="hello" className="product-img"></img>
                            <img src="/Recent news - 2.png" alt="hello" className="product-img"></img>
                            <img src="/Recent news - 3.png" alt="hello" className="product-img"></img>
                            <img src="/Recent news - 4.png" alt="hello" className="product-img"></img>
                        </Slider>
                    </div>
                    <div className="product-name-price-data">
                        <p className="detailed-product-discount">{discount}% off</p>
                        <h3>{item}</h3>
                        <section>
                            <StarRatings
                                rating={4}
                                starRatedColor="#547665"
                                numberOfStars={5}
                                name='rating'
                                starDimension="false"
                                starSpacing="0.1vw"
                            />
                            <p className="customer-reviews">56 reviews</p>
                        </section>
                        <p className="product-prices">${Price} <span style={{ textDecoration: "line-through" }}>$24.99</span></p>
                        <div className="short-product-details">
                            <p>Cleaner,all natural,skin-care solutions</p>
                            <p>Our Vitiligo balm works for all skin types. Clean ingrediants keep you confident that you're using only the best solutuions for your skin.</p>
                        </div>
                        <Collapsible trigger={<Details data="Details" />}>
                            <p>It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. ... React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple</p>
                        </Collapsible>
                        <div className="verticle-divide"></div>
                        <Collapsible trigger={<Details data="Shipping &amp; Handling" />}>
                            <p>It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. ... React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple</p>
                        </Collapsible>
                        <p className="quantity">Quantity</p>
                        <div className="quantity-addToCart">
                            <div className="quantity-data">
                                <button onClick={handledecrement}>-</button>
                                <p>{quantity}</p>
                                <button onClick={handleIncrement}>+</button>
                            </div>
                            <button className="add-cart-btn" value="All"><FontAwesomeIcon icon={faCartPlus} />&nbsp;&nbsp;&nbsp;&nbsp;Add to cart</button>
                        </div>
                    </div>
                </div>
                {/* style={{ textAlign: "center", color: "#547675", fontWeight: "600", margin: "5vw" }} */}
                <h2 className="related-other-products">Related Products</h2>
                <div className="home-top-rated-container">
                    {cardData.map((item,index) => (
                        <Card data={item} key={index}/>
                    ))}
                </div>
            </div>
            <div className="divider"></div>
            <Footer />
        </>
    );
}

export default DetailedProduct;