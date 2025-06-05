import React from "react";
import HeroLanguage from "./HeroLanguage";
import TrainingLangeuageAproce from "./TrainingLangeuageAproce";
import LanguageCourseDescription from "./LanguageCourseDescription";
import LanguageInstructor from "./LanguageInstactor";

const LanguageTrainingDetails = () => {
  return (
    <div className="min-h-screen">
      <HeroLanguage />
      <TrainingLangeuageAproce />
      <LanguageCourseDescription />
      <LanguageInstructor />
    </div>
  );
};

export default LanguageTrainingDetails;
