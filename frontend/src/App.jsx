// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import EmployeePage from "./pages/employes/EmployeePage";
import NotFound from "./components/NotFound";
import PartnerPage from "./pages/partners/PartnerPage";
import JobPage from "./pages/jobs/JobPage";
import JobDetails from "./pages/jobs/JobDetails";
import SkillAndTrainingPage from "./pages/skill/SkillAndTrainingPage";
import SkillTrainingDetails from "./pages/skilltrainDetails/SkillTrainingDetails";
import LanguageTrainingDetails from "./pages/languagetraindetails/LanguageTrainingDetails";
import HallOfFreamPage from "./pages/halloffream/HallOfFreamPage";
import ContactPage from "./pages/contact/ContactPage";
import VisaRelocationPage from "./pages/visareloacation/VisaRelocationPage";
import CarrerPage from "./pages/carrer/CarrerPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/employer" element={<EmployeePage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/jobs" element={<JobPage />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route
            path="/skills-and-language-training"
            element={<SkillAndTrainingPage />}
          />
          <Route
            path="/skills-and-language-training/skill/:id"
            element={<SkillTrainingDetails />}
          />
          <Route
            path="/skills-and-language-training/language/:idl"
            element={<LanguageTrainingDetails />}
          />
          <Route path="/hall-of-fame" element={<HallOfFreamPage />} />
          <Route
            path="/visa-and-relocation-guidance"
            element={<VisaRelocationPage />}
          />
          <Route path="/career" element={<CarrerPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
