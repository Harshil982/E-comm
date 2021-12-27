import React from "react";
import AdImage from './../require-images/PRODUCT BC - 01.png'
// import Grid from '@mui/material/Grid'
import './../Styles/Advertisement_poster.css'

const AdvertisePoster = () => {
    return (
        <>
            {/* <Grid container spacing={0} direction="row">
                <Grid item lg={6} className="">
                    <h1>Clean products that deliver better solutuons</h1>
                    <p>A helthier you from the inside out. We're sourced the cleanest ingrediants to create a line of skin care treatments that leave you feeling your best.</p>
                    <button>Shop more</button>
                </Grid>
                <Grid item lg={6}>
                    <img src={AdImage} style={{height : "90%"}} alt="Natural product" />
                </Grid>
            </Grid> */}
            <div className="Poster-container">
                <div className="ad-content-container">
                    <div className="main-ad-content-cta">
                        <h1>Clean products that deliver better solutions</h1>
                        <p>A helthier you from the inside out. We're sourced the cleanest ingrediants to create a line of skin care treatments that leave you feeling your best.</p>
                        <button>Shop more</button>
                    </div>
                </div>
                <img src={AdImage} className="ad-image" alt="Natural product" />
            </div>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default AdvertisePoster