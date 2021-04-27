import React, { useState } from 'react';
import { Switch, AppBar, CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import deepOrange from '@material-ui/core/colors/deepOrange';
import lightBlue from '@material-ui/core/colors/lightBlue';
import orange from '@material-ui/core/colors/orange';

import ResponsiveDrawer from './Drawer';

function Dashboard() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';
  const mainPrimaryColor = darkState ? orange[500] : deepPurple[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : lightBlue[500];

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      },
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2
    }
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <CssBaseline>
      <ThemeProvider theme={darkTheme}>
        <ResponsiveDrawer darkState={darkState} handleThemeChange={handleThemeChange} />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default Dashboard;
