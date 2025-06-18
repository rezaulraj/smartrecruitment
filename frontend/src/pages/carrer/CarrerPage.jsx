import React from "react";
import HeroCarrer from "./HeroCarrer";
import CarrerSub from "./CarrerSub";
import CurrentOpening from "./CurrentOpening";
import CareerRady from "./CareerRady";

const CarrerPage = () => {
  return (
    <div className="min-h-screen">
      <HeroCarrer />
      <CarrerSub />
      <CurrentOpening />
      <CareerRady />
    </div>
  );
};

export default CarrerPage;
