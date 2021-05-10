import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSwitch } from "../contexts/switchContext";
import { Paper, CssBaseline, Typography } from "@material-ui/core";
import SideBar from "../SideBar/SideBar";
import Post from "../FeedContainer/Post";

const styles = {
  paperContainerDark: {
    backgroundColor: "#363636",
    height: "100vh",
  },
  paperContainerLight: {
    backgroundColor: "#fff",
    height: "100vh",
  },
};
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "-10px",
    margin: "0px",
    textAlign: "center",
    height: "110%",
  },
  appBarRow: {
    margin: "10px",
  },
  LeftCol: {
    padding: "10px",
  },
  MiddleCol: { padding: "10px" },
  RightCol: { padding: "10px" },
});

function Dashboard() {
  const classes = useStyles();
  const { dark, setDark } = useSwitch();
  // setDark(false);
  return (
    <CssBaseline>
      <Paper
        style={dark ? styles.paperContainerDark : styles.paperContainerLight}
        square={true}
      >
        <Grid container spacing={0}>
          <Grid item xs className={classes.appBarRow}>
            <Paper className={classes.paper}>Appbar</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={3} className={classes.LeftCol}>
            <Paper className={classes.paper}>Left</Paper>
          </Grid>
          <Grid item xs={6} className={classes.MiddleCol}>
            <Paper className={classes.paper}>
              Middle
              <Post />
            </Paper>
          </Grid>
          <Grid item xs={3} className={classes.RightCol}>
            <Paper className={classes.paper}>
              Right
              <SideBar />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </CssBaseline>
  );
}

export default Dashboard;
