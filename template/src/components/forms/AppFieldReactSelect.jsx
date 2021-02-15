import { FormLabel } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

const AppFieldReactSelect = ({
  name,
  label,
  options,
  control,
  isMulti,
  vraag,
  optionArrayOfString = true,
}) => {
  return (
    <>
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        as={<Select options={options} isMulti={isMulti} />}
        name={name}
        label={label}
        control={control}
      />
    </>
  );
};

export default AppFieldReactSelect;
