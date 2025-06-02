import React from "react";
import HeroPartner from "./HeroPartner";
import PartnerFetured from "./PartnerFetured";
import PartnerProcess from "./PartnerProcess";
import PartnerConatct from "./PartnerConatct";
import PartnerReady from "./PartnerReady";

const PartnerPage = () => {
  return (
    <div className="min-h-screen">
      <HeroPartner />
      <PartnerFetured />
      <PartnerProcess />
      <PartnerConatct />
      <PartnerReady />
    </div>
  );
};

export default PartnerPage;
