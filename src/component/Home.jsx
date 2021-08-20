import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#1976D2" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Demo
          </Typography>
          <Link to="signin" style={{ textDecoration: "none", color: "#fff" }}>
            <Button variant="outlined" color="inherit">
              Demo Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Home;
