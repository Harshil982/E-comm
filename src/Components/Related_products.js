import React from "react";
import './../Styles/Related_products.css'
import Card from './Card.js'
// import Grid from '@mui/material/Grid'
// import Image from './../require-images/no-image.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const RelatedProduct = () => {
    const handleClick = (e) => {
        console.log(e.target.innerText);
    }
    return (
        <>
            <div className="flex-container">
                <h3 onClick={handleClick}>Related Products</h3>
                <h3>Shop all Products</h3>
            </div>
            <div className="Trial-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default RelatedProduct