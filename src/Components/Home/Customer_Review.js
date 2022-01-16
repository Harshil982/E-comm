import React from 'react';
import './Styles/CustomerReview.css'
import dummyUser from './../../require-images/dummy_user1.jfif'
import StarRatings from 'react-star-ratings'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

function CustomerReview(props) {
    // const [rating,setRating] = useState(3)
    // const changeRatingC = (newRating,name) =>{
    //     setRating(newRating)
    //     console.log(newRating);
    // }
    return (
        <div className="customer-review">
            <img src={dummyUser} alt="userIMG" />
            <h2>JOHN SULLIVAN</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <StarRatings
                rating={4}
                starRatedColor="#547665"
                numberOfStars={5}
                name='rating'
                starDimension="1.5vw"
                // isAggregateRating={true}
                // changeRating={changeRatingC}
                starSpacing="0.4vw"
                // isSelectable = {true}
            />
        </div>
    );
}

export default CustomerReview;