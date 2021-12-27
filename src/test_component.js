import React from "react";
import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid'
import ProductCard from "./Components/product_card";

// let paraStyle = {
//     backgroundColor : "red",
//     borderRadius : "2px",
//     color : "white",
//     padding : "5px",
//     textAlign : "center",
//     height : "10px"
// }
// let paraStyle2 = {
//     backgroundColor : "red",
//     borderRadius : "2px",
//     color : "white",
//     padding : "12px",
//     textAlign : "center",
//     height : "50px"
// }

const Test = () =>
{
    return(
        <>
            <h1>Test component</h1>
            <h1>Test component is working perfect</h1>
            <Button>Text Me</Button>
            {/* <Grid container columnSpacing={2}>
                <Grid item xs={12} sm={8} md={3}>
                    <p style={paraStyle2}>1</p>
                </Grid>
                <Grid item xs={12} sm={6} md={9} container direction="column">
                    <Grid item><p style={paraStyle}>1</p></Grid>
                    <Grid item><p style={paraStyle}>1</p></Grid>
                </Grid>
            </Grid> */}
            <ProductCard />
        </>
    )
}
export default Test