import React, { useState, useEffect } from 'react';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
  withStyles,
  MuiThemeProvider
} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useSwitch } from '../contexts/switchContext';
import help from '../../static/help.png';
import help2 from '../../static/help.jpg';

import {
  CssBaseline,
  Container,
  Grid,
  CardContent,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormLabel,
  FormControlLabel,
  Paper
} from '@material-ui/core';
import AppBar from '../AppBar/AppBar';
// import { Alert } from '@material-ui/lab';
const darkPrimary = '#373e57';
let darkSecondary = '#151728';
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#8a85ff'
    },

    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#8a85ff'
      }
    }
  }
})(TextField);

const ColorButton = withStyles((theme) => ({
  root: {
    color: '#fff',
    backgroundColor: 'rgb(138,133,255)',
    '&:hover': {
      backgroundColor: 'rgb(138,133,255,0.7)'
    }
  }
}))(Button);
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
  middleLight: { backgroundColor: '#e6e7e8', color: '#111' },
  darkTextField: {
    textColor: '#fff',
    color: '#fff'
  },
  lightTextField: {
    textColor: '#000',
    color: '#000'
  }
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
  dark: {
    textColor: '#fff'
  }
});
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});
const Lighttheme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

function SignUpPage() {
  const classes = useStyles();
  const { dark, setProfile } = useSwitch();

  const [role, setRole] = useState();

  setProfile(false);
  // setDark(false);
  return (
    <MuiThemeProvider theme={dark ? darkTheme : Lighttheme}>
      <CssBaseline>
        <Paper style={dark ? styles.paperContainerDark : styles.paperContainerLight} square={true}>
          <Grid container spacing={0}>
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
            <Grid item xs={12} className={classes.LeftCol}>
              <Paper
                className={classes.paper}
                style={dark ? styles.paperElDark : styles.paperElLight}
              >
                <Grid container spacing={0} style={{}}>
                  <Grid xs={6} item>
                    <Container
                      style={{
                        paddingTop: '20px',
                        maxWidth: '700px'
                      }}
                    >
                      <Typography
                        style={{
                          fontSize: '28px',
                          textAlign: 'left',
                          fontFamily: 'Lato light 400',
                          marginBottom: '20px',
                          marginTop: '25px'
                        }}
                      >
                        Sign Up
                      </Typography>
                      <CssTextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        style={{ marginBottom: '10px' }}
                      />
                      <CssTextField
                        label="Area"
                        variant="outlined"
                        style={{ width: '172px', marginRight: '16px' }}
                      />
                      <CssTextField label="Address" variant="outlined" style={{ width: '462px' }} />
                      <CssTextField
                        label="Number"
                        variant="outlined"
                        style={{ margin: '10px 0px' }}
                        fullWidth
                      />
                      <CssTextField
                        label="Email"
                        variant="outlined"
                        style={{ margin: '0px 0px 10px 0px' }}
                        fullWidth
                        type="email"
                      />
                      <CssTextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        style={{ marginBottom: '10px' }}
                        fullWidth
                      />
                      <CssTextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        style={{ marginBottom: '20px' }}
                        fullWidth
                      />
                      <FormControl
                        component="fieldset"
                        style={{ float: 'left', marginBottom: '10px' }}
                      >
                        <FormLabel
                          component="legend"
                          style={{
                            display: 'block',
                            float: 'left',
                            marginRight: '170px',
                            marginBottom: '5px'
                          }}
                        >
                          Role
                        </FormLabel>
                        <RadioGroup
                          aria-label="Role"
                          name="Role"
                          style={{ display: 'inline-block', float: 'left' }}
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        >
                          <FormControlLabel value="NGO worker" control={<Radio />} label="NGO" />
                          <FormControlLabel value="User" control={<Radio />} label="Volunteer" />
                        </RadioGroup>
                      </FormControl>
                      {role === 'NGO worker' ? (
                        <CssTextField
                          label="NGO name"
                          variant="outlined"
                          style={{ margin: '0px 0px 20px 0px' }}
                          fullWidth
                        />
                      ) : (
                        <></>
                      )}
                      <ColorButton fullWidth size="large">
                        Sign Up
                      </ColorButton>
                    </Container>
                  </Grid>
                  <Grid item xs={5}>
                    {/* <a href="https://www.freevector.com/aid-walking-elderly-man-30988"></a> */}
                    <Typography style={{ marginTop: '20px' }}>
                      <Typography
                        style={{ fontSize: '49px', fontWeight: '600', fontFamily: 'Lato light' }}
                      >
                        " Participate
                        <Typography
                          style={{ fontSize: '39px', fontWeight: '500', fontFamily: 'Lato light' }}
                        >
                          in changing the
                        </Typography>
                        <Typography
                          style={{ fontSize: '40px', fontWeight: '600', fontFamily: 'Lato light' }}
                        >
                          world."
                        </Typography>
                      </Typography>
                    </Typography>
                    {dark ? (
                      <img
                        src={help}
                        alt="help others"
                        style={{
                          height: '600px',
                          width: 'auto',
                          borderRadius: '100%',
                          marginTop: '100px'
                        }}
                      />
                    ) : (
                      <img
                        src={help2}
                        style={{ height: '700px', borderRadius: '100%', marginTop: '100px' }}
                      />
                    )}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default SignUpPage;
