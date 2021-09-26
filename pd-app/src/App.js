import './App.css';
import Start from './Start.js';
import Setup from './Setup.js';
import Play from './Play.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Start</Link>
            </li>
            <li>
              <Link to="/setup">Setup</Link>
            </li>
            <li>
              <Link to="/play">Play</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/setup">
            <Setup />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

/*function nextPath(path) {
  //this.props.history.push(path);
  window.history.push(path);
}*/

export default App;
