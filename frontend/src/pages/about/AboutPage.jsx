import React from "react";
import HeroAbout from "./HeroAbout";
import AboutStory from "./AboutStory";
import Misstion from "./Misstion";
import OurProcess from "./OurProcess";
import OurTeam from "./OurTeam";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <HeroAbout />
      <AboutStory />
      <Misstion />
      <OurProcess />
      <OurTeam />
    </div>
  );
};

export default AboutPage;
