import React from "react";
import Project from "../components/Project";
import projects from "../data/projects.json";

const ProjectsContainer = () => {
  const listStyle: React.CSSProperties = {
    listStyleType: "circle",
  };

  const projectsList = projects.map((project, index) => <Project {...project} key={"project-item-" + index} />);

  return (
    <ul style={listStyle}>
      {projectsList}
    </ul>
  );
}

export default ProjectsContainer;
