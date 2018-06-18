import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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
            <a href='app' style={{textDecoration:'none', color:'inherit'}}>
            D.J
            </a>
          </Typography>
          {(props.name && props.login) ? <Typography color="inherit" className={classes.padding}>
          Hi {props.name}
          </Typography> : null}
          {props.login ? <SignOutButton /> : <SignInButton />}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
