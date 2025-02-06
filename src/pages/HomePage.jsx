import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import DomainSearch from "../components/DomainSearch";
import BenefitSection from "../components/BenefitSection";
import HostingPlans from "../components/HostingPlans";
import AboutUs from "../components/AboutUs";
import Features from "../components/Features";
import PerfectPlan from "../components/PerfectPlan";
import GetStartedSteps from "../components/GetStartedSteps";

const HomePage = () => {
  return (
    <div className="max-w-[1640px] m-auto">
      <NavBar />
      <HeroSection />
      <DomainSearch />
      <BenefitSection />
      <HostingPlans />
      <AboutUs />
      <Features />
      <PerfectPlan />
      <GetStartedSteps />
    </div>
  );
};

export default HomePage;
