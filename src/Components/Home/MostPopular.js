import React from 'react';
import Card from '../Card';
import './Styles/MostPopular.css'

function TopRated(props) {
    const cardData = [
        {
            item: "Vitamin C Night Serum",
            ingrediants: "All Natural Ingrediants",
            Price: 24.99,
            discount: 18
        },
        {
            item: "Hyaluronic Acid",
            ingrediants: "All Natural Ingrediants",
            Price: 24.99,
            discount: 18
        },
        {
            item: "Sun Damage & Dark Circle Corrector",
            ingrediants: "All Natural Ingrediants",
            Price: 24.99,
            discount: 18
        },
        {
            item: "Sunburn Ointment",
            ingrediants: "All Natural Ingrediants",
            Price: 24.99,
            discount: 18
        }
    ]
    return (
        <>
            <div className="most-popular">
                <p>Most Popular</p>
                <p>Shop all Products</p>
            </div>
            <div className="home-most-popular-container" data-aos="fade-up">
                {cardData.map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>
        </>
    );
}

export default TopRated;