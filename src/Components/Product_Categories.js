import React, { useState } from "react";
import './../Styles/Product_categories.css'

const ProductAndCategories = () => {
    const [filter, setFilter] = useState("Recommended")

    const handleOnchange = (e) => {
        setFilter(e.target.value)
    }
    console.log(filter);
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
            </div>
        </>
    )
}

export default ProductAndCategories