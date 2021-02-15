import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";
// import _ from "lodash/fp";

const AppFieldAutoComplete = ({
  name,
  label,
  control,
  options = [],
  required = false,
}) => {
  return (
    <Controller
      render={(props) => (
        <Autocomplete
          {...props}
          autoComplete={true}
          options={options}
          getOptionLabel={(option) => option.label}
          // getOptionSelected={(option, data) => data.value}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              style={{ margin: "0.7em 0" }}
              variant="outlined"
              fullWidth
              type="text"
              size="small"
              margin="dense"
            />
          )}
          onChange={(_, data) => {
            props.onChange(data);
          }}
        />
      )}
      rules={{ required }}
      name={name}
      control={control}
    />
  );
};

export default AppFieldAutoComplete;
