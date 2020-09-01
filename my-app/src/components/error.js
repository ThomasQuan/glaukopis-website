import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-confirm-alert/src/react-confirm-alert.css";
import {  Grid } from "@material-ui/core";
import { ReactComponent as ErrorIllustration } from "../assets/svg/undraw_page_not_found_su7k.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'10vh 0 10vh 0',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
 
}));

const Error = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <ErrorIllustration />
    </Grid>
  );
};
export default Error;
