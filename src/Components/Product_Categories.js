import React, { useState } from "react";
import './../Styles/Product_categories.css'
import Card from "./Card";

const ProductAndCategories = (props) => {
    const [filter, setFilter] = useState("Recommended")
    const cardData = [
        {
            item: "FaceWash1",
            discount : 15,
            ingrediants: "All natural",
            Price: "21.99"
        },
        {
            item: "FaceWash2",
            discount : 15,
            ingrediants: "All natural",
            Price: "21.99"
        },
        {
            item: "FaceWash3",
            discount : 15,
            ingrediants: "All natural",
            Price: "21.99"
        },
        {
            item: "FaceWash4",
            discount : 15,
            ingrediants: "All natural",
            Price: "21.99"
        },
        {
            item: "FaceWash5",
            discount : 15,
            ingrediants: "All natural",
            Price: "21.99"
        },
        {
            item: "FaceWash6",
            discount : 15,
            ingrediants: "All natural",
            Price: "21.99"
        },
        {
            item: "FaceWash7",
            discount : 15,
            ingrediants: "All natural",
            Price: "21.99"
        },        {
            item: "FaceWash8",
            discount : 15,
            ingrediants: "All natural",
            Price: "21.99"
        },        {
            item: "FaceWash9",
            discount : 15,
            ingrediants: "All natural",
            Price: "21.99"
        },        {
            item: "FaceWash10",
            discount : 15,
            ingrediants: "All natural",
            Price: "21.99"
        },        {
            item: "FaceWash11",
            discount : 15,
            ingrediants: "All natural",
            Price: "21.99"
        },        {
            item: "FaceWash12",
            discount : 15,
            ingrediants: "All natural",
            Price: "21.99"
        },        {
            item: "FaceWash13",
            discount : 15,
            ingrediants: "All natural",
            Price: "21.99"
        },        {
            item: "FaceWash14",
            discount : 15,
            ingrediants: "All natural",
            Price: "21.99"
        },        {
            item: "FaceWash15",
            discount : 15,
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
                            CategoryData.map((item, index) => (
                                <div className="category-and-items" key={index}>
                                    <h2 className="Category-name">{item.Category_name}</h2>
                                    <div className="category-products">
                                        {item.Products.map((item, ind) => (
                                            <p key={ind}>{item}</p>
                                        ))}
                                    </div>
                                </div>
                            ))
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
        </>
    )
}

export default ProductAndCategories