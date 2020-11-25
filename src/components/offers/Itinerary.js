import React from "react";
import Segment from "./Segment";

const Itinerary = ({ Data }) => {
  return (
    <>
      {Data.segments.map((s,i) => (
        <Segment key={`segments_${i}`} Data={s} />
      ))}
    </>
  );
};

export default Itinerary;
