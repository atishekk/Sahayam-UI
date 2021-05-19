import React, { useEffect, useState } from 'react';
import { Grid, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSwitch } from '../contexts/switchContext';
import { Paper, CssBaseline, Typography } from '@material-ui/core';
import SideBar from '../SideBar/SideBar';
import Post from '../FeedContainer/Post';

import AppBar from '../AppBar/AppBar';
const darkPrimary = '#373e57';
let darkSecondary = '#151728';
const styles = {
  paperContainerDark: {
    backgroundColor: '#373e57',
    height: '100vh'
  },
  paperContainerLight: {
    backgroundColor: '#e6e7e8',
    height: '100vh'
  },
  paperElDark: {
    backgroundColor: darkSecondary,
    color: '#fff'
  },
  paperElLight: {
    backgroundColor: '#eee',
    color: '#111'
  },
  middleDark: {
    backgroundColor: darkPrimary,
    color: '#fff',
    overflow: 'hidden'
  },
  middleLight: { backgroundColor: '#e6e7e8', color: '#111' }
};
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: '-9px',
    margin: '0px',
    textAlign: 'center',
    height: '110%',
    overflow: 'hidden'
  },
  appBarRow: {
    margin: '10px 10px 0px 10px',
    height: '60px',
    zIndex: '999'
  },
  LeftCol: {
    padding: '0px 10px 15px 10px',
    height: '820px'
  },
  MiddleCol: { padding: '20px 10px 5px 10px', maxHeight: '820px' },
  RightCol: { padding: '0px 10px 15px 10px' }
});

function Dashboard() {
  const classes = useStyles();
  const { dark, setDark, setProfile } = useSwitch();
  // setDark(false);
  setProfile(true);
  return (
    <CssBaseline>
      <Paper style={dark ? styles.paperContainerDark : styles.paperContainerLight} square={true}>
        <Grid container spacing={0} style={{}}>
          <Grid item xs className={classes.appBarRow}>
            <Paper
              className={classes.paper}
              style={dark ? styles.paperElDark : styles.paperElLight}
            >
              <AppBar />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={0} style={{}}>
          <Grid item xs={2} className={classes.LeftCol}>
            <Paper
              className={classes.paper}
              style={dark ? styles.paperElDark : styles.paperElLight}
            ></Paper>
          </Grid>
          <Grid item xs={7} className={classes.MiddleCol}>
            <Paper className={classes.paper} style={dark ? styles.middleDark : styles.middleLight}>
              <div
                style={{ height: '100%', width: '100%', overflow: 'hidden', paddingRight: '10px' }}
              >
                <div
                  style={{
                    height: '99%',
                    width: '100%',
                    overflow: 'auto',
                    paddingRight: '0px'
                  }}
                >
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={3} className={classes.RightCol}>
            <Paper
              className={classes.paper}
              style={dark ? styles.paperElDark : styles.paperElLight}
            >
              {/* <SideBar /> */}
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </CssBaseline>
  );
}

export default Dashboard;
