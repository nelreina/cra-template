import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1em",
    backgroundColor: "#1F78B4",
    color: "white",
    "&:hover": {
      backgroundColor: "#7eb823",
      color: "white",
    },
  },
}));

const SaveButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      type="submit"
      fullWidth
      variant="contained"
      {...props}
    >
      {props.label ? props.label : "Save"}
    </Button>
  );
};

export default SaveButton;
