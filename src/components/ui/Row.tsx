import React from "react";

const Row = (props: JSX.IntrinsicElements["div"]) => {
  return (
    <div {...props} className={"row " + (props.className ? props.className : '')}>
      {props.children}
    </div>
  );
}

export default Row;
