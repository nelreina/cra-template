import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#253c7e",
    marginBottom: "1em",
    borderColor: "#253c7e",
    "&:hover": {
      color: "white",
      backgroundColor: "#253c7e",
      filter: "brightness(90%)",
    },
  },
}));

const BackButton = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Button
      className={classes.root}
      variant="outlined"
      onClick={() => navigate(-1)}
    >
      &lt; back
    </Button>
  );
};

export default BackButton;
