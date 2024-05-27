// Home.tsx
import React from "react";
import Banner from "../components/Banner";
import ProductSection from "../components/ProductSection";
import Slider from "../components/Slider";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <ProductSection />
      <Slider />
    </div>
  );
};

export default Home;
