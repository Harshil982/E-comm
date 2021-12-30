import React,{useEffect} from "react";
import AdvertisePoster from "./Advertise_poster";
import ProductPoster from "./ProductPoster";
import './../Styles/Product.css'
import ProductAndCategories from "./Product_Categories";
import RelatedProduct from "./Related_products";

const Product = () =>{
    useEffect(()=>{
        document.title = "Products"
    },[])
    return(
        <>
            <div className="product-page-main-container">
                <ProductPoster />
                <ProductAndCategories />
                <AdvertisePoster />
                <RelatedProduct />
            </div>
            <div className="divider"></div>
            <div className="Pass"></div>
        </>
    )
}

export default Product