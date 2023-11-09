import React from "react";
import AboutMeItem from "../components/AboutMeItem";
import aboutmelist from "../data/aboutme.json";

const AboutMeContainer = () => {
  const listStyle: React.CSSProperties = {
    listStyleType: "circle",
  };

  const othersList = aboutmelist.map((entry, index) => (
    <AboutMeItem {...entry} key={"about-me-item-" + index} />
  ));

  return <ul style={listStyle}>{othersList}</ul>;
};

export default AboutMeContainer;
