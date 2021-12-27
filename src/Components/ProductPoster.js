import React from "react";
import PlantImage from './../require-images/HEADER 01.png'
import './../Styles/Product_poster.css'

const ProductPoster = () => {
    return (
        <>
            <div className="Product-poster">
                <div className="product-poster-content">
                    <h4>New!</h4>
                    <h1>All Organic Cream.</h1>
                    <p>A helthier you from the inside out. We've sourced the cleanest ingrediants to create a line of skin care treatments that leave you feeling your best.</p>
                </div>
                <div className="Products-label-container">
                    <img src={PlantImage} alt="Plant" />
                    <h2>PRODUCTS</h2>
                </div>
            </div>
        </>
    )
}
export default ProductPoster