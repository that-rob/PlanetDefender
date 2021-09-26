//import App from "./App.js"
import Setup from "./Setup.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Start() {
    return (
        <Router>
        <div>
          
            <button>
            <Link to="/Setup">Lets Go!</Link>
            </button>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/setup">
              <Setup />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }