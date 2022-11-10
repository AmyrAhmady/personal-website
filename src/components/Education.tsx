import React from "react";

interface IEducationProps {
  name: string;
  location: string;
  duration: string;
  degree?: string;
}

const Education = (props: IEducationProps) => {
  return (
    <li style={listItemStyle}>
      <span>
        <span style={nameStyle}>{props.name}</span>
        ,&nbsp;
        <span>{props.location}</span>
      </span>
      <span style={durationStyle}>{props.duration}</span>
      <br />
      <span>{props.degree}</span>
    </li>
  );
}

const listItemStyle: React.CSSProperties = {
  width: "100%",
};

const nameStyle: React.CSSProperties = {
  fontSize: "1.2em",
  fontWeight: "bolder",
};

const durationStyle: React.CSSProperties = {
  float: "right",
  fontSize: "0.8em",
  fontWeight: 'bold'
};

export default Education;
