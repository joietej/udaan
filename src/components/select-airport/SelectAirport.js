import React from "react";

const SelectAirport = ({ Data, OnChange }) => {
  return (
    <div>
      <select
        style={{ fontSize: "large" }}
        onChange={(e) => OnChange(e.target.value)}
      >
        <option value="">SELECT AIRPORT</option>
        {Data.map((d, i) => (
          <option key={d.Code} value={d.Code}>
            {d.Name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectAirport;
