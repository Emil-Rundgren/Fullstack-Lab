import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductBudget from "./pages/ProductBudget";
import ProductInfo from "./pages/ProductInfo";
import LogIn from "./pages/LogIn";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productBudget" element={<ProductBudget />} />
        <Route path="/productBudget/:id" element={<ProductInfo />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
