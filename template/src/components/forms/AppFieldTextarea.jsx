import React from "react";
import { TextField } from "@material-ui/core";

const AppFieldTextarea = ({ reg, ...props }) => {
  return (
    <TextField
      inputRef={reg}
      multiline
      fullWidth
      rows={5}
      rowsMax={20}
      defaultValue=""
      variant="outlined"
      {...props}
    />
  );
};

export default AppFieldTextarea;
