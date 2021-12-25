import './App.scss';
import AuthUI from './Components/AuthUI/UserAuth';
import NGOauth from './Components/AuthUI/NGOauth';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddTask from './Components/TaskForm/AddTask';
import Home from './Components/LandingPage/Home';
import PrivateRoute from './Utils/PrivateRoute';
import NgoRoute from './Utils/NgoRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/auth/user" component={AuthUI} />
          <Route path="/auth/ngo" component={NGOauth} />
          <NgoRoute path="/addtask" component={AddTask} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
