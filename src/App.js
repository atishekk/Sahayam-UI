import './App.scss';
import AuthUI from './Components/AuthUI/AuthUI';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/auth" component={AuthUI} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
