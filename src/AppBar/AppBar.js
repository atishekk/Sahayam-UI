import React from 'react';
import { useSwitch } from '../contexts/switchContext';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { Icon, Toolbar, Typography, Avatar } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const styles = {
  titleDark: {
    color: '#77acf1',
    textTransform: 'uppercase',
    fontSize: '35px',
    fontFamily: 'Lato light',
    textShadow: '2px 2px 8px #77acf1',
    marginLeft: '30px',
    marginBottom: '-5px'
  },
  titleLight: {
    color: '#5390d9',
    textTransform: 'uppercase',
    fontSize: '35px',
    fontFamily: 'Lato light',
    textShadow: '2px 2px 8px #77acf1',
    marginLeft: '30px',
    marginBottom: '-5px'
  },
  avatar: {
    marginLeft: '10px'
  }
};

function AppBar() {
  const { dark, setDark } = useSwitch();
  return (
    <Toolbar style={{ alignItems: 'flex', justifyContent: 'space-between' }}>
      <Typography variant={3} style={dark ? styles.titleDark : styles.titleLight}>
        sahayam
      </Typography>
      <div style={{ display: 'flex', float: 'right', height: '100%', marginBottom: '-10px' }}>
        <div
          style={{
            backgroundColor: 'rgb(170,170,170,0.3)',
            borderRadius: '100%',
            height: '35px',
            width: '35px',
            boxSizing: 'border-box',
            padding: '4px 1px 0px 1px'
          }}
        >
          <Icon onClick={() => setDark(!dark)} style={{ cursor: 'pointer', paddingTop: '2px' }}>
            {!dark ? <Brightness7Icon /> : <Brightness2Icon />}
          </Icon>
        </div>
        <Avatar style={styles.avatar}>
          <AccountCircleIcon />
        </Avatar>
      </div>
    </Toolbar>
  );
}

export default AppBar;
