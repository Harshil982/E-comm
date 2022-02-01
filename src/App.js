import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from "./Components/About/About";
import NotFound from "./Components/Common Components/NotFound";
import DetailedProduct from "./Components/DetailedProduct";
import Home from "./Components/Home/Home";
import Product from "./Components/Product";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/detailed" element={<DetailedProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
