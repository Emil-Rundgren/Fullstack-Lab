import React from "react";
import Banner from "../components/Banner";
import CategorySection from "../components/CategorySection";
import PopularOffers from "../components/PopularOffers";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <CategorySection />
      <PopularOffers />
    </div>
  );
};

export default Home;
