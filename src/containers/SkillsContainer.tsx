import React from "react";
import Skill from "../components/Skill";
import skills from "../data/skills.json";

const SkillsContainer = () => {
  const listStyle: React.CSSProperties = {
    listStyleType: "circle",
  };

  const skillsList = skills.map((skill, index) => (
    <Skill {...skill} key={"skill-item-" + index} />
  ));

  return <ul style={listStyle}>{skillsList}</ul>;
};

export default SkillsContainer;
