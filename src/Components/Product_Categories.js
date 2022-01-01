import React, { useState } from "react";
import './../Styles/Product_categories.css'
import Card from "./Card";
import { Link, BrowserRouter as Router } from 'react-router-dom'

const ProductAndCategories = (props) => {
    const [filter, setFilter] = useState("Recommended")
    const cardData = [
        {
            item: "Cream1",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        },
        {
            item: "Cream2",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        },
        {
            item: "Cream3",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        },
        {
            item: "Cream4",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        },
        {
            item: "Cream5",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        },
        {
            item: "Cream6",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        },
        {
            item: "Cream7",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        }, {
            item: "Cream8",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        }, {
            item: "Cream9",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        }, {
            item: "Cream10",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        }, {
            item: "Cream11",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        }, {
            item: "Cream12",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        }, {
            item: "Cream13",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        }, {
            item: "Cream14",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        }, {
            item: "Cream15",
            discount: 15,
            ingrediants: "All natural",
            Price: "21.99"
        },
    ]
    const CategoryData = props.data

    const handleOnchange = (e) => {
        setFilter(e.target.value)
    }
    console.log(filter);
    console.log(props.data);
    return (
        <>
            <Router>
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
                                                    const productName = item.replace(/ /g,'_')
                                                    return(
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
                                    <Card data={cardData[0]} />
                                </div>
                                <div className="other-two-products">
                                    <Card data={cardData[1]} />
                                    <Card data={cardData[2]} />
                                </div>
                            </div>
                            <div className="right-side-flex-container">
                                {cardData.map((item, i) => (
                                    <Card data={item} key={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default ProductAndCategories