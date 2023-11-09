import React from "react";
import Social from "../components/Social";
import socials from "../data/socials.json";

const SocialsContainer = () => {
  const socialsList = socials.map((social, index) => (
    <span style={itemContainerStyle} key={"social-link-" + index}>
      <Social {...social} />
    </span>
  ));

  return <>{socialsList}</>;
};

const itemContainerStyle: React.CSSProperties = {
  marginRight: "1rem",
  display: "inline-block !important",
};

export default SocialsContainer;
