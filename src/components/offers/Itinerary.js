import React from "react";
import Segment from "./Segment";

const Itinerary = ({ Data }) => {
  return (
    <>
      {Data.segments.map((s) => (
        <Segment Data={s} />
      ))}
    </>
  );
};

export default Itinerary;
