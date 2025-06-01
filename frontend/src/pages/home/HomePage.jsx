import React from "react";
import parson from "../../assets/image/parson1.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import HeroPage from "./HeroPage";
import Features from "./Features";
import Stats from "./Stats";
import HomeAbout from "./HomeAbout";
import Companys from "./Companys";
import HomeService from "./HomeService";
import HomeJobFair from "./HomeJobFair";
import HomeTabs from "./HomeTabs";
import HomeSkill from "./HomeSkill";
import HomeCliend from "./HomeCliend";
import HomeFaqs from "./HomeFaqs";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <HeroPage />
      <Features />
      <Stats />
      <HomeAbout />
      <Companys />
      <HomeService />
      <HomeJobFair />
      <HomeTabs />
      <HomeSkill />
      <HomeCliend />
      <HomeFaqs />
    </div>
  );
};

export default HomePage;
