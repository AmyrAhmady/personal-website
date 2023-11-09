import React from "react";
import * as FIcon from "react-feather";

interface ISocialProps {
  label: string;
  isEmail: boolean;
  value: string;
  icon: string;
}

const Social = (props: ISocialProps) => {
  const link = props.isEmail ? `mailto:${props.value}` : props.value;

  // @ts-ignore
  const Icon = FIcon[props.icon];

  return (
    <a style={style} href={link}>
      <Icon size={18} />
      &nbsp;{props.label}
    </a>
  );
};

const style: React.CSSProperties = {
  textDecoration: "none",
  color: "#3173bb",
  margin: "0px",
  padding: "0px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

export default Social;
