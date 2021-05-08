import React, { useState } from 'react';
import { Paper, CssBaseline, Typography } from '@material-ui/core';
import { useSwitch } from '../contexts/switchContext';

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

function Dashboard() {
  const { dark, setDark } = useSwitch();
  setDark(false);
  return (
    <CssBaseline>
      <Paper style={dark ? styles.paperContainerLight : styles.paperContainerDark} square={true}>
        <Typography style={{ color: '#84C9FB' }}>Dashboard</Typography>
      </Paper>
    </CssBaseline>
  );
}

export default Dashboard;
