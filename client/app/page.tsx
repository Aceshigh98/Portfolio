import React from "react";
import HomeSection from "./components/common/HomeSection";
import AboutSection from "./components/common/AboutSection";
import PortfolioSection from "./components/common/PortfolioSection";
import ContactSection from "./components/common/ContactSection";
import SkillsSection from "./components/common/SkillsSection";

export default function Home() {
  return (
    <main className=" h-fit">
      <HomeSection id={"home"}/>
      <AboutSection id={"about"}/>
      <PortfolioSection id={"portfolio"}/>
      <SkillsSection id={"skills"}/>
      <ContactSection id={"contact"}/> 
    </main>
  );
}
