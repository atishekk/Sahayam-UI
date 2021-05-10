import React from 'react';
import { useSwitch } from '../contexts/switchContext';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { Icon } from '@material-ui/core';

function AppBar() {
  const { dark, setDark } = useSwitch();
  return (
    <div>
      Sahayam
      <Icon onClick={() => setDark(!dark)}>{dark ? <Brightness7Icon /> : <Brightness2Icon />}</Icon>
    </div>
  );
}

export default AppBar;
