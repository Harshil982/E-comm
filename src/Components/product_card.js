// Description : This component will display single product information(image,name,price,Add to cart option)
import React from "react";
import Image from './../require-images/no-image.png'
import './../Styles/product_card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Grid from '@mui/material/Grid'

const ProductCard = () => {

    const handleAddToCart = (e) =>{
        console.log(e);
        if(e.target.parentNode.className === "add-to-cart"){
            console.log(e.target.parentNode.value);
        }
        else
        {
            console.log(e.target.value)
        }
        // console.log(e.target.parentNode.value);
        // console.log(e.target.parentNode.className);
    }

    
    return (
        <>
            <div className="Products-container">
                <Grid container spacing={10}>
                    <Grid className="Product-info-card" item xs={10} sm={5} md={6} lg={4}>
                        <img src={Image} className="Product-image" alt="Product" />
                        <h3>Cream</h3>
                        <p>All organic Ingrediants</p>
                        <p>$24.99 </p>
                        <button className="add-to-cart" value="Cream1" onClick={handleAddToCart}><FontAwesomeIcon icon={faCartPlus} /><span className="cart-text" value="Cream1">Add to cart</span></button>
                    </Grid>
                    <Grid className="Product-info-card" item xs={10} sm={5} md={6} lg={4}>
                        <img src={Image} className="Product-image" alt="Product" />
                        <h3>Cream</h3>
                        <p>All organic Ingrediants</p>
                        <p>$24.99 </p>
                        <button className="add-to-cart" value="Cream2" onClick={handleAddToCart}><FontAwesomeIcon icon={faCartPlus} /><span className="cart-text" value="Cream2">Add to Cart</span></button>
                    </Grid>
                    <Grid className="Product-info-card" item xs={10} sm={5} md={6} lg={4}>
                        <img src={Image} className="Product-image" alt="Product" />
                        <h3>Cream</h3>
                        <p>All organic Ingrediants</p>
                        <p>$24.99 </p>
                        <button className="add-to-cart" value="Cream3" onClick={handleAddToCart}><FontAwesomeIcon icon={faCartPlus} /><span className="cart-text" value="Cream3">Add to Cart</span></button>
                    </Grid>
                    <Grid className="Product-info-card" item xs={10} sm={5} md={6} lg={4}>
                        <img src={Image} className="Product-image" alt="Product" />
                        <h3>Cream</h3>
                        <p>All organic Ingrediants</p>
                        <p>$24.99 </p>
                        <button className="add-to-cart" value="Cream4" onClick={handleAddToCart}><FontAwesomeIcon icon={faCartPlus} /><span className="cart-text" value="Cream3">Add to Cart</span></button>
                    </Grid>
                    <Grid className="Product-info-card" item xs={10} sm={5} md={6} lg={4}>
                        <img src={Image} className="Product-image" alt="Product" />
                        <h3>Cream</h3>
                        <p>All organic Ingrediants</p>
                        <p>$24.99 </p>
                        <button className="add-to-cart" value="Cream4" onClick={handleAddToCart}><FontAwesomeIcon icon={faCartPlus} /><span className="cart-text" value="Cream3">Add to Cart</span></button>
                    </Grid>
                    <Grid className="Product-info-card" item xs={10} sm={5} md={6} lg={4}>
                        <img src={Image} className="Product-image" alt="Product" />
                        <h3>Cream</h3>
                        <p>All organic Ingrediants</p>
                        <p>$24.99 </p>
                        <button className="add-to-cart" value="Cream4" onClick={handleAddToCart}><FontAwesomeIcon icon={faCartPlus} /><span className="cart-text" value="Cream3">Add to Cart</span></button>
                    </Grid>
                    <Grid className="Product-info-card" item xs={10} sm={5} md={6} lg={4}>
                        <img src={Image} className="Product-image" alt="Product" />
                        <h3>Cream</h3>
                        <p>All organic Ingrediants</p>
                        <p>$24.99 </p>
                        <button className="add-to-cart" value="Cream4" onClick={handleAddToCart}><FontAwesomeIcon icon={faCartPlus} /><span className="cart-text" value="Cream3">Add to Cart</span></button>
                    </Grid>
                    <Grid className="Product-info-card" item xs={10} sm={5} md={6} lg={4}>
                        <img src={Image} className="Product-image" alt="Product" />
                        <h3>Cream</h3>
                        <p>All organic Ingrediants</p>
                        <p>$24.99 </p>
                        <button className="add-to-cart" value="Cream4" onClick={handleAddToCart}><FontAwesomeIcon icon={faCartPlus} /><span className="cart-text" value="Cream3">Add to Cart</span></button>
                    </Grid>
                    <Grid className="Product-info-card" item xs={10} sm={5} md={6} lg={4}>
                        <img src={Image} className="Product-image" alt="Product" />
                        <h3>Cream</h3>
                        <p>All organic Ingrediants</p>
                        <p>$24.99 </p>
                        <button className="add-to-cart" value="Cream4" onClick={handleAddToCart}><FontAwesomeIcon icon={faCartPlus} /><span className="cart-text" value="Cream3">Add to Cart</span></button>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default ProductCard