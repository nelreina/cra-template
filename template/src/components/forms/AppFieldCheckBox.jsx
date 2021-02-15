import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const AppFieldCheckBox = ({ name, label, register }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          inputRef={register}
          name={name}
          color="primary"
          defaultValue={false}
        />
      }
      label={label}
      fullWidth
    />
  );
};

export default AppFieldCheckBox;
