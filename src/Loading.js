import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  root: {
    textAlign:"center",
  }
};

var Loading = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} size={100} />
    </div>
  );
}

export default withStyles(styles)(Loading);
