import React from "react";
import LandingNav from "../components/LandingNav";
import RecentlyAdded from "../components/RecentlyAdded";
import RecentReleases from "../components/RecentReleases";
import InProduction from "../components/InProduction";
import Updates from "../components/Updates";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="mb-[20px]">
      <LandingNav />
      <RecentlyAdded />
      <RecentReleases />
      <InProduction />
      <Updates />
      <Footer />
    </div>
  );
};

export default LandingPage;
