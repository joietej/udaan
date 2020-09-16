import React from "react";
import {FormSelect} from 'shards-react';
import { SelectAirportStyle } from "./styles";

const SelectAirport = ({ Data, OnChange }) => {
  return (
      <FormSelect
        style={SelectAirportStyle()}
        onChange={(e) => OnChange(e.target.value)}
      >
        <option value="">SELECT AIRPORT</option>
        {Data.map((d, i) => (
          <option key={d.Code} value={d.Code}>
            {d.Name}
          </option>
        ))}
      </FormSelect>
  );
};

export default SelectAirport;
