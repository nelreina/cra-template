import React from "react";
import { TextField, FormLabel } from "@material-ui/core";
import { Controller } from "react-hook-form";

const AppFieldDate = ({ reg, vraag, control, name, required = false }) => {
  return (
    <>
      <FormLabel style={styles.root} component="legend">
        {vraag}
      </FormLabel>
      <Controller
        rules={{ required }}
        control={control}
        name={name}
        defaultValue=""
        render={(props) => (
          <TextField
            {...props}
            style={{ margin: "0.7em 0" }}
            variant="outlined"
            fullWidth
            type="date"
            size="small"
            margin="dense"
            InputProps={{ inputProps: { max: new Date() } }}
          />
        )}
      />
    </>
  );
};

export default AppFieldDate;

const styles = {
  root: {
    marginTop: "1em",
  },
};
