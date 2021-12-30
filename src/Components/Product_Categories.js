import React, { useState } from "react";
import './../Styles/Product_categories.css'
import Card from "./Card";

const ProductAndCategories = (props) => {
    const [filter, setFilter] = useState("Recommended")
    const cardData = [
        {
            item : "FaceWash",
            ingrediants : "All natural",
            Price : "21.99"
        },
        {
            item : "FaceWash",
            ingrediants : "All natural",
            Price : "21.99"
        },
        {
            item : "FaceWash",
            ingrediants : "All natural",
            Price : "21.99"
        }
    ]
    const CategoryData = props.data

    const handleOnchange = (e) => {
        setFilter(e.target.value)
    }
    console.log(filter);
    console.log(props.data);
    return (
        <>
            <div className="Product-categories">
                <div className="menu">
                    <select className="select-menu" id="select-menu" value={filter} onChange={handleOnchange}>
                        <option value="Recommended">Sort By : Recommended</option>
                        <option value="Price Low to high">Sort By : Price Low to high</option>
                        <option value="Price High to low">Sort By : Price High to low</option>
                        <option value="Most Purchased">Sort By : Most Purchased</option>
                    </select>
                </div>
                <div className="main-category-container">
                    <div className="left-side-container">
                        {
                            CategoryData.map((item,index) => (
                                <div className="category-and-items" key={index}>
                                    <h2 className="Category-name">{item.Category_name}</h2>
                                    <div className="category-products">
                                        {item.Products.map((item,ind)=>(
                                            <p key={ind}>{item}</p>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="right-side-container">
                        {cardData.map((item,i)=>(
                            <Card data={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductAndCategories