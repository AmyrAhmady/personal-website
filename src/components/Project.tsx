import React from "react";

interface IProjectProps {
  title: string;
  description: string;
  url?: string;
}

const Project = (props: IProjectProps) => {

  if (props.url) {
    return (
      <li style={listItemStyle}>
        <span>
          <span style={nameStyle}>
            <a
              target="blank"
              rel="nofollow"
              href={props.url}
              style={linkStyle}
            >
              {props.title}
            </a>
          </span>
        </span>
        <br />
        <span>
          <span style={descriptionStyle}>{props.description}</span>
        </span>
      </li>
    );
  }

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
  fontSize: "1.2em",
  fontWeight: "bolder",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#3173bb",
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

export default Project;
