import React from "react";

interface IAboutMeItemProps {
  title: string;
  description: string;
}

const AboutMeItem = (props: IAboutMeItemProps) => {
  return (
    <li style={listItemStyle}>
      <span>
        <span style={nameStyle}>{props.title}</span>
      </span>
      <br />
      <span>
        <span style={descriptionStyle}>{props.description}</span>
      </span>
    </li>
  );
}

const listItemStyle: React.CSSProperties = {
  width: "100%",
};

const nameStyle: React.CSSProperties = {
  fontSize: "1em",
  fontWeight: "bold",
};

const descriptionStyle: React.CSSProperties = {
  listStyleType: "disc",
  color: "#444444",
  paddingTop: "4px",
  paddingRight: "0px",
  paddingBottom: "4px",
  fontWeight: "lighter",
  fontSize: "0.9em",
};

export default AboutMeItem;
