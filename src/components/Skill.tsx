import React from "react";
import { v4 as UUIDv4 } from "uuid";

interface ISkillProps {
  category: string;
  items: string[];
}

const Skill = (props: ISkillProps) => {
  const skillItems = props.items.map((name) => (
    <span style={{ marginTop: "5px" }} key={UUIDv4()}>
      <div style={skillItemStyle}>{name}</div>
      &nbsp;
    </span>
  ));

  return (
    <li style={listItemStyle}>
      <span style={skillTypeStyle}>{props.category}:&nbsp;</span>
      <span style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {skillItems}
      </span>
    </li>
  );
};

const listItemStyle: React.CSSProperties = {
  width: "100%",
};

const skillItemStyle: React.CSSProperties = {
  display: "inline",
  paddingTop: "3px",
  paddingRight: "10px",
  paddingBottom: "3px",
  paddingLeft: "10px",
  marginTop: "50x",
  marginRight: "5px",
  marginBottom: "0px",
  marginLeft: "0px",
  backgroundColor: "#222222",
  borderRadius: "3px",
  color: "#ffffff",
  fontSize: "0.8em",
  fontWeight: "lighter",
};

const skillTypeStyle: React.CSSProperties = {
  fontSize: "1.2em",
  fontWeight: "bolder",
};

export default Skill;
