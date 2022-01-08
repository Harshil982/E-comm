//this component is for product categories
import React, { useState } from "react";
import './../Styles/Product_categories.css'
import Card from "./Card";
import CategoryProducts from './../Json/Category_products.json'
import { Link } from 'react-router-dom'

const ProductAndCategories = (props) => {
    //getting the filter value
    const [filter, setFilter] = useState("Recommended")
    const CategoryData = props.data

    const handleOnchange = (e) => {
        setFilter(e.target.value)
    }
    console.log(filter);
    console.log(props.data);
    console.log(CategoryProducts.slice(0, 1));
    console.log(CategoryProducts.slice(1, 2));
    console.log(CategoryProducts.slice(2, 3));
    console.log(CategoryProducts.slice(3));
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
                            CategoryData.map((item, index) => {
                                const Category = item.Category_name
                                return (
                                    <div className="category-and-items" key={index}>
                                        <h2 className="Category-name">{item.Category_name}</h2>
                                        <div className="category-products">
                                            {item.Products.map((item, ind) => {
                                                const productName = item.replace(/ /g, '_')
                                                return (
                                                    <Link to={`${Category}/${productName}`} key={ind}>{item}</Link>)
                                            })}
                                        </div>
                                    </div>)
                            })
                        }
                    </div>
                    <div className="right-side-container">
                        <div className="divider"></div>
                        <div className="main-products">
                            <div className="main-card">
                                <Card data={CategoryProducts.slice(0, 1)[0]} />
                            </div>
                            <div className="other-two-products">
                                <Card data={CategoryProducts.slice(1, 2)[0]} />
                                <Card data={CategoryProducts.slice(2, 3)[0]} />
                            </div>
                        </div>
                        <div className="right-side-flex-container">
                            {CategoryProducts.slice(3).map((item, i) => (
                                <Card data={item} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductAndCategories