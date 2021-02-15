import React from "react";
import { TextField } from "@material-ui/core";

const AppField = ({ reg, ...props }) => {
  return (
    <TextField
      inputRef={reg}
      style={{ margin: "0.7em 0" }}
      variant="outlined"
      fullWidth
      type="text"
      size="small"
      margin="dense"
      {...props}
    />
  );
};

export default AppField;
