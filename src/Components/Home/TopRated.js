import React from 'react';
import Card from '../Card';
import './Styles/TopRated.css'

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
            <div className="top-rated">
                <p>Top rated</p>
                <p>Shop all Products</p>
            </div>
            <div className="home-top-rated-container" data-aos="fade-right">
                {cardData.map((item, index) => (
                    <Card key={index} data={item} />
                ))}
                {cardData.map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>
        </>
    );
}

export default TopRated;