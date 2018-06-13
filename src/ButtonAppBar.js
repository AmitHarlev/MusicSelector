import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  padding: {
      margin: 10
  }
};

var ButtonAppBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            D.J
          </Typography>
          <Typography variant="display 1" color="inherit" className={classes.padding}>
          Hi Amit Harlev
          </Typography>
          {props.login ? <SignOutButton /> : <SignInButton />}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
