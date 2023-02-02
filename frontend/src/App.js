
import Home from './pages/home/Home';
import './App.css';
import MyMap from './pages/map/MyMap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
          <Home/> 
        </Route>
        <Route exact path="/map/:city">
           <MyMap/>
        </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
