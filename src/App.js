import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './DashboardSample/Dashboard';
import { SwitchProvider } from './contexts/switchContext';

const App = () => {
  return (
    <SwitchProvider>
      <Dashboard />
    </SwitchProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
