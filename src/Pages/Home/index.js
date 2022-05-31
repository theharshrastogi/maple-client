import React from "react";
import { Feature } from "./feature";
import { Introduction } from "./introduction";
import { LandingSection } from "./landingSection";
import "./Styles/landingSection.css";

export const Home = () => {
  return (
    <>
      <LandingSection />
      <Introduction />
      <Feature />
      {/* <Footer /> */}
    </>
  );
};
