// Home.tsx
import React from "react";
import Banner from "../components/Banner";
import ProductSection from "../components/ProductSection";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <ProductSection />
    </div>
  );
};

export default Home;
