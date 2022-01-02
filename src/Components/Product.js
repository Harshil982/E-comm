import React,{useEffect} from "react";
import AdvertisePoster from "./Advertise_poster";
import ProductPoster from "./ProductPoster";
import './../Styles/Product.css'
import ProductAndCategories from "./Product_Categories";
import RelatedProduct from "./Related_products";
import CategoryList from './../Json/Category.json'
import Footer from "./Footer";

const Product = () =>{
    useEffect(()=>{
        document.title = "Products"
    },[])
    console.log(CategoryList);
    return(
        <>
            <div className="product-page-main-container">
                <ProductPoster />
                <ProductAndCategories data={CategoryList}/>
                <AdvertisePoster />
                <RelatedProduct />
            </div>
            <div className="divider"></div>
            <Footer />
        </>
    )
}

export default Product