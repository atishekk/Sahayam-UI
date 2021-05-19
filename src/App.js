import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './DashboardSample/Dashboard';
import { SwitchProvider } from './contexts/switchContext';
import SignUpPage from './AuthUI/SignUp';
import SignInPage from './AuthUI/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <SwitchProvider>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
      </SwitchProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
