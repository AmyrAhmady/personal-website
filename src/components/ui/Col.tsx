import React from "react";

const Col = (props: JSX.IntrinsicElements["div"]) => {
  const baseStyle: React.CSSProperties = {
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: "100%",
    position: "relative",
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
  };

  return (
    <div {...props} style={{ ...baseStyle, ...props.style }}>
      {props.children}
    </div>
  );
};

export default Col;
