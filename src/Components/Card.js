// this component is for all product card
import React, { useEffect, useState } from 'react';
import Image from './../require-images/no-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import './../Styles/Card.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addToWishList,removeFromWishList } from './Redux/Actions/index'

function Card(props) {
    const { item, ingrediants, Price, discount } = props.data
    const myState = useSelector((state) => state.handleWishList)
    const dispatch = useDispatch()
    console.log(myState.wishListDataRedux);
    const [wishBtn, setwishBtn] = useState(farHeart)
    useEffect(()=>{
        const isInWishList = myState.wishListDataRedux.find(product => product.item === item)
        if(isInWishList)
        {
            setwishBtn(fasHeart)
        }
        else
        {
            setwishBtn(farHeart)
        }
    },[wishBtn,setwishBtn,item,myState])
    const handleWishList = (e) => {
        if (wishBtn === farHeart) {
            setwishBtn(fasHeart)
            dispatch(addToWishList(props.data))
        }
        else {
            setwishBtn(farHeart)
            dispatch(removeFromWishList(item))
        }
        console.log(item);
    }
    // getting prop data
    const modifiedName = item.replace(/ /g, "_")
    //handling add to cart event
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
            <button className="wishlist-btn" title={`Add ${item} to wishlist`} value={item} onClick={handleWishList}><FontAwesomeIcon icon={wishBtn} /></button>
            <Link to={{
                pathname: `/detailed/${modifiedName}`,
                state: props.data
            }}>
                <img src={Image} alt="Product-pic" className="product-image" />
            </Link>

            <p className="discount">{discount}% off</p>
            <p className="new">New!</p>
            <Link to={{
                pathname: `/detailed/${modifiedName}`,
                state: props.data
            }}>
                <h3>{item}</h3>
            </Link>
            <p>{ingrediants}</p>
            <p>${Price}</p>

            <button className="add-cart-btn" onClick={handleAddToCart} value={item} title={`Add ${item} to Cart`}><FontAwesomeIcon icon={faCartPlus} />&nbsp;&nbsp;&nbsp;&nbsp;Add to cart</button>
        </div>

    );
}

export default Card;