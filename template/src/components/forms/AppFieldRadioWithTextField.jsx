import React, { useState } from "react";
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { Controller } from "react-hook-form";

const AppFieldRadioWithTextField = ({
  control,
  name,
  vraag,
  required = false,
  setValue = () => {},
}) => {
  const [showTextField, setShowTextField] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [touched, setTouched] = useState(false);
  const handleChange = ({ target }) => {
    setTouched(() => true);
    setRadioValue(target.value);
    if (target && target.value === "weetniet") {
      setValue(name, target.value);
      setShowTextField(() => false);
    } else {
      setShowTextField(() => true);
    }
  };

  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{ required }}
        render={(props) => (
          <>
            <FormLabel style={styles.root} component="legend">
              {vraag}
            </FormLabel>
            <RadioGroup onChangeCapture={handleChange}>
              <div style={{ display: "flex" }}>
                <FormControlLabel
                  value={"stf"}
                  control={
                    <Radio checked={touched && radioValue !== "weetniet"} />
                  }
                  label="Antwoord"
                />
                <FormControlLabel
                  value={"weetniet"}
                  control={
                    <Radio checked={touched && radioValue === "weetniet"} />
                  }
                  label="Weet niet/kan niet herinneren"
                />
              </div>
            </RadioGroup>
            {showTextField && (
              <TextField
                {...props}
                multiline
                fullWidth
                rows={5}
                rowsMax={20}
                defaultValue=""
                variant="outlined"
              />
            )}
          </>
        )}
      />
    </>
  );
};

export default AppFieldRadioWithTextField;

const styles = {
  root: {
    marginTop: "1em",
  },
};
