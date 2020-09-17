import React from "react";
import { NativeSelect } from "@material-ui/core";

const SelectAirport = ({ Data, OnChange }) => {
  return (
    <div>
      <NativeSelect onChange={(e) => OnChange(e.target.value)}>
        <option value="">SELECT AIRPORT</option>
        {Data.map((d, i) => (
          <option key={d.Code} value={d.Code}>
            {d.Name}
          </option>
        ))}
      </NativeSelect>
    </div>
  );
};

export default SelectAirport;
