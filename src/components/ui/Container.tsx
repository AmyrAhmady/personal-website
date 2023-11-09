import React from "react";

const Container = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={"container " + (props.className ? props.className : "")}
    >
      {props.children}
    </div>
  );
});

Container.displayName = "Container";

export default Container;
