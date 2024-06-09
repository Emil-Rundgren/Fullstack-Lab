import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductBudget from "./pages/ProductBudget";
import ProductMidRange from "./pages/ProductMidRange";
import ProductHighEnd from "./pages/ProductHighEnd";
import ProductInfo from "./pages/ProductInfo";
import LogIn from "./pages/LogIn";
import Cart from "./pages/Cart";
import CreateAccount from "./pages/CreateAccount";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productBudget" element={<ProductBudget />} />
        <Route path="/productMidRange" element={<ProductMidRange />} />
        <Route path="/productHighEnd" element={<ProductHighEnd />} />
        <Route path="/productBudget/:id" element={<ProductInfo />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
