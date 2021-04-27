import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Button } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import BusinessIcon from '@material-ui/icons/Business';
import PersonIcon from '@material-ui/icons/Person';

import Brightness6Icon from '@material-ui/icons/Brightness6';
import Profile from './Profile';
import Jobs from './Jobs';
import NGOs from './Ngo';

import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    borderRadius: '0px 0px 10px 10px'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function ClippedDrawer({ handleThemeChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap>
            Sahayam
          </Typography>
          <Button>
            <Brightness6Icon onClick={() => handleThemeChange()} />
          </Button>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <ListItem button component={Link} to={'/Jobs'} key="Jobs">
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Jobs" />
              </ListItem>
              <ListItem button component={Link} to={'/NGOs'} key="NGOs">
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary="NGOs" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button component={Link} to={'Profile'} key="Profile">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" render={() => <div>Home Page</div>} />
            <Route path="/Jobs" render={() => <Jobs />} />
            <Route path="/NGOs" render={() => <NGOs />} />
            <Route path="/Profile" render={() => <Profile />} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}
