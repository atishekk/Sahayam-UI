import React, { useState } from 'react';
import { Paper, CssBaseline, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSwitch } from '../contexts/switchContext';

import AppBar from '../AppBar/AppBar';

const styles = {
  paperContainerDark: {
    backgroundColor: '#363636',
    height: '100vh'
  },
  paperContainerLight: {
    backgroundColor: '#fff',
    height: '100vh'
  }
};
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: '-10px',
    margin: '0px',
    textAlign: 'center',
    height: '110%',
    backgroundColor: '#eee'
  },
  appBarRow: {
    margin: '10px'
  },
  LeftCol: {
    padding: '10px'
  },
  MiddleCol: { padding: '10px' },
  RightCol: { padding: '10px' }
});

function Dashboard() {
  const classes = useStyles();
  const { dark, setDark } = useSwitch();
  // setDark(false);
  return (
    <CssBaseline>
      <Paper style={dark ? styles.paperContainerDark : styles.paperContainerLight} square={true}>
        <Grid container spacing={0} style={{ height: '5vh' }}>
          <Grid item xs className={classes.appBarRow}>
            <Paper className={classes.paper}>
              <AppBar />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={0} style={{ height: '85vh' }}>
          <Grid item xs={2} className={classes.LeftCol}>
            <Paper className={classes.paper}>Left</Paper>
          </Grid>
          <Grid item xs={7} className={classes.MiddleCol}>
            <Paper className={classes.paper}>Middle</Paper>
          </Grid>
          <Grid item xs={3} className={classes.RightCol}>
            <Paper className={classes.paper}>Right</Paper>
          </Grid>
        </Grid>
      </Paper>
    </CssBaseline>
  );
}

export default Dashboard;
