import React from "react";
import Education from "../components/Education";
import educations from "../data/educations.json";

const EducationContainer = () => {
  const listStyle: React.CSSProperties = {
    listStyleType: "circle",
  };

  const educationsList = educations.map((education, index) => (
    <Education {...education} key={"education-item-" + index} />
  ));

  return <ul style={listStyle}>{educationsList}</ul>;
};

export default EducationContainer;
