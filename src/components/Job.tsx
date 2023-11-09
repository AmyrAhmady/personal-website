import React from "react";
import { v4 as UUIDv4 } from "uuid";

interface IJobProps {
  employer: {
    name: string;
    location: string;
    url: string;
  };
  position: string;
  duration: string;
  descriptions: string[];
}

const Job = (props: IJobProps) => {
  const descriptionsList = props.descriptions.map((item) => (
    <li key={UUIDv4()}>{item}</li>
  ));

  return (
    <li style={listItemStyle}>
      <span>
        <span style={nameStyle}>
          <a
            target="blank"
            rel="nofollow"
            href={props.employer.url}
            style={linkStyle}
          >
            {props.employer.name}
          </a>
        </span>
        ,&nbsp;
        <span>{props.employer.location}</span>
      </span>
      <br />
      <span>
        <span style={positionStyle}>{props.position}</span>
        <span style={durationStyle}>{props.duration}</span>
      </span>
      <br />
      <ul style={descriptionStyle}>{descriptionsList}</ul>
    </li>
  );
};

const listItemStyle: React.CSSProperties = {
  width: "100%",
};

const nameStyle: React.CSSProperties = {
  fontSize: "1.2em",
  fontWeight: "bolder",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#3173bb",
};

const positionStyle: React.CSSProperties = {
  fontStyle: "italic",
};

const durationStyle: React.CSSProperties = {
  float: "right",
  fontSize: "0.8em",
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

export default Job;
