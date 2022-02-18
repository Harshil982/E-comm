import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from "./Components/About/About";
// import NotFound from "./Components/Common Components/NotFound";
import DetailedProduct from "./Components/DetailedProduct";
import Home from "./Components/Home/Home";
import SearchResult from "./Components/Home/Search";
import userWishlist from "./Components/Home/userWishlist";
import Product from "./Components/Product";
function App() {
  return (
    <>
      <Router>
        <Route path="/home" component={Home} exact/>
        <Route path="/products" component={Product} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/search" component={SearchResult} exact/>
        <Route path="/wishlist" component={userWishlist} exact/>
        <Route path="/detailed/:product" component={DetailedProduct} exact/>
        <Route path="/" component={Home} exact/>
      </Router>
    </>
  );
}

export default App;
