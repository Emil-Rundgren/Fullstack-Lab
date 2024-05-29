// Home.tsx
import React from "react";
import Banner from "../components/Banner";
import ProductSection from "../components/ProductSection";
import PopularOffers from "../components/PopularOffers";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <ProductSection />
      <PopularOffers />
    </div>
  );
};

export default Home;
