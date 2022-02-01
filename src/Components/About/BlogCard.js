import React,{useEffect} from 'react';
import './BlogCard.css'
function BlogCard(props) {
    useEffect(()=>{
        document.title = "About Us"
    })
    return (
        <div className="blog-card">
            <img src={props.data.imgPath} alt="..."></img>
            <p className="blog-card-title">{props.data.blogCardTitle}</p>
            <p className="blog-card-content">{props.data.blogCardContent}</p>
            <a href="/">Read</a>
        </div>
    );
}

export default BlogCard;