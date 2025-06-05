import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import HeroContact from "./HeroContact";
import ContactUsForm from "./ContactUsForm";
import OurOffice from "./OurOffice";
const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <HeroContact />
      <ContactUsForm />
      <OurOffice />
    </div>
  );
};

export default ContactPage;
