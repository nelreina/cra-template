import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import AppField from "./AppField";
import SaveButton from "../layout/SaveButton";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  button: {
    backgroundColor: "#1F78B4",
    color: "white",
    "&:hover": {
      backgroundColor: "#7eb823",
      color: "white",
    },
  },
  error: {
    color: "#d32027",
    fontWeight: "bold",
  },
});

const LoginForm = ({ submit, error }) => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  return (
    <Card className={classes.root}>
      <form onSubmit={handleSubmit(submit)}>
        <CardContent>
          <Typography variant="h6">Vul uw gegevens in</Typography>
          <input type="hidden" name="id" ref={register} />
          <AppField
            reg={register({ required: true })}
            type="email"
            label="Email"
            name="identifier"
          />
          <AppField
            reg={register({ required: true })}
            type="password"
            label="Password"
            name="password"
          />

          {error && (
            <Typography className={classes.error} variant="subtitle1">
              {error}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <SaveButton label="Login" />
        </CardActions>
      </form>
    </Card>
  );
};

export default LoginForm;
