import React from "react";
import Job from "../components/Job";
import jobs from "../data/jobs.json";

const JobsContainer = () => {
  const listStyle: React.CSSProperties = {
    listStyleType: "circle",
  };

  const jobsList = jobs.map((job, index) => (
    <Job {...job} key={"job-item-" + index} />
  ));

  return <ul style={listStyle}>{jobsList}</ul>;
};

export default JobsContainer;
