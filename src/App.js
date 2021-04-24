import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard/Dashboard';

const App = () => {
  return (
    <Fragment>
      <Dashboard />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
