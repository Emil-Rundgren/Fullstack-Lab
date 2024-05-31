import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductBudget from "./pages/ProductBudget";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productBudget" element={<ProductBudget />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
