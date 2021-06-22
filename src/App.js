import './App.scss';
import AuthUI from './Components/AuthUI/AuthUI';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddTask from './Components/TaskForm/AddTask';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/auth" component={AuthUI} />
          <Route path="/addtask" component={AddTask} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
