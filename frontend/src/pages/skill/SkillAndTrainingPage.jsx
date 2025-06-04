import React from "react";
import HeroSkillAndTraining from "./HeroSkillAndTraining";
import WhySkill from "./WhySkill";
import BenefitSkill from "./BenefitSkill";
import SkillTraing from "./SkillTraing";
import LanguageTraining from "./LanguageTraining";
import SuccessTips from "./SuccessTips";
import RealStory from "./RealStory";

const SkillAndTrainingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSkillAndTraining />
      <WhySkill />
      <BenefitSkill />
      <SkillTraing />
      <LanguageTraining />
      <SuccessTips />
      <RealStory />
    </div>
  );
};

export default SkillAndTrainingPage;
