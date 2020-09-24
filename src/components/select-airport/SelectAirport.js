import React from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useDispatch } from "react-redux";

const SelectAirport = ({ Data, OnChange, Token, Selected }) => {
  const [value, setValue] = React.useState(Selected || null);
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (Token && inputValue.length > 2 && !inputValue.includes(",")) {
      dispatch({
        type: "APP_LOAD_LOCATIONS",
        data: { keyword: inputValue, token: Token },
      });
    }
  }, [inputValue, dispatch, Token]);

  const onValueChange = (e, newValue) => {
    setValue(newValue);
    OnChange(newValue);
  };

  return (
    <Autocomplete
      freeSolo
      value={value}
      disableClearable
      getOptionLabel={option => option.name}
      options={Data}
      onChange={onValueChange}
      onInputChange={(e, newValue) => setInputValue(newValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Departure City (US | India | Spain | Germany)"
          margin="normal"
          variant="outlined"
          InputProps={{ ...params.InputProps, type: "search" }}
        />
      )}
    />
  );
};

export default SelectAirport;
