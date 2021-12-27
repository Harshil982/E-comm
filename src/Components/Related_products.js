import React from "react";
import './../Styles/Related_products.css'
import ProductCard from "./product_card";

const RelatedProduct = () => {
    return (
        <>
            <div className="Related-Products-Container">
                <div className="flex-container">
                    <h3>Related Products</h3>
                    <h3>Shop all Products</h3>
                </div>
            </div>
            <ProductCard />
        </>
    )
}

export default RelatedProduct