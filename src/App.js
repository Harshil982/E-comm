import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from "./Components/Common Components/NotFound";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
