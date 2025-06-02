import React from "react";
import HeroEmployee from "./HeroEmployee";
import EmployeeService from "./EmployeeService";
import EmployeeHiar from "./EmployeeHiar";
import HomeSkill from "../home/HomeSkill";
import EmployeeContact from "./EmployeeContact";
import EmployeeWorkforce from "./EmployeeWorkforce";

const EmployeePage = () => {
  return (
    <div className="min-h-screen">
      <HeroEmployee />
      <EmployeeService />
      <EmployeeHiar />
      <HomeSkill />
      <EmployeeContact />
      <EmployeeWorkforce />
    </div>
  );
};

export default EmployeePage;
