import React from "react";
import { Controller } from "react-hook-form";
import { MenuItem } from "@material-ui/core";
import AppField from "./AppField";

const AppFieldSelect = ({
  name,
  label,
  options,
  control,
  disabled,
  reg,
  optionArrayOfString = true,
  required = false,
  ...props
}) => {
  return (
    <Controller
      as={
        <AppField select disabled={disabled} inputProps={props}>
          {optionArrayOfString
            ? options.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))
            : options.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
        </AppField>
      }
      name={name}
      label={label}
      control={control}
      rules={{ required }}
    />
  );
};

export default AppFieldSelect;
