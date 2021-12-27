import React from "react";
import AdvertisePoster from "./Advertise_poster";
import ProductPoster from "./ProductPoster";
import ProductCard from "./product_card";
import './../Styles/Product.css'
import ProductAndCategories from "./Product_Categories";
import RelatedProduct from "./Related_products";

const Product = () =>{
    return(
        <>
            <div className="product-page-main-container">
                <ProductPoster />
                <ProductAndCategories />
                <ProductCard />
                <AdvertisePoster />
                <RelatedProduct />
            </div>
        </>
    )
}

export default Product