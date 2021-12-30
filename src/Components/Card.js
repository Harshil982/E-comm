import React from 'react';
import Image from './../require-images/no-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './../Styles/Card.css'

function Card(props) {
    const {item,ingrediants,Price} = props.data
    const handleAddToCart = (e) => {
        console.log(e);
        if (e.target.parentNode.className === "add-to-cart") {
            console.log(e.target.parentNode.value);
        }
        else {
            console.log(e.target.value)
        }
    }
    // console.log(item);
    return (
        <div className="trail">
            <img src={Image} alt="Product-pic" />
            <h3>{item}</h3>
            <p>{ingrediants}</p>
            <p>${Price}</p>
            <button className="add-cart-btn" onClick={handleAddToCart} value="coming"><FontAwesomeIcon icon={faCartPlus} />&nbsp;&nbsp;&nbsp;&nbsp;Add to cart</button>
        </div>
    );
}

export default Card;