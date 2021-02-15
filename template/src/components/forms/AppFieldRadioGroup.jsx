import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

const AppFieldRadioGroup = ({
  name,
  label,
  control,
  options = [],
  handleChange,
  required = false,
}) => {
  return (
    <>
      <FormLabel style={styles.root} component="legend">
        {label}
      </FormLabel>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        rules={{ required }}
        as={
          <RadioGroup onChangeCapture={handleChange}>
            <div style={{ display: "flex" }}>
              {options.length > 0 &&
                options.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                  />
                ))}
              {options.length === 0 && (
                <span>Please provide a options array</span>
              )}
            </div>
          </RadioGroup>
        }
      />
    </>
  );
};
export default AppFieldRadioGroup;

const styles = {
  root: {
    marginTop: "1em",
  },
};
