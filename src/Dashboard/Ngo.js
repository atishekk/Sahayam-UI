import React from 'react';
import { Paper } from '@material-ui/core';

function Ngo() {
  return (
    <div>
      <Paper elevation={10} style={{ padding: '10px', margin: '30px' }}>
        <h3>NGO One</h3>
        <h5>Description</h5>
        <h5>NGO One</h5>
      </Paper>
      <Paper elevation={10} style={{ padding: '10px', margin: '30px' }}>
        <h3>NGO Two</h3>
        <h5>Description</h5>
        <h5>NGO Two</h5>
      </Paper>
      <Paper elevation={10} style={{ padding: '10px', margin: '30px' }}>
        <h3>NGO Three</h3>
        <h5>Description</h5>
        <h5>NGO Three</h5>
      </Paper>
    </div>
  );
}

export default Ngo;
