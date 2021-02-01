import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from "./pages/About";
import Humans from "./pages/Humans";
import Events from "./pages/Events";
import Recruitment from "./pages/Recruitment";

export default function App() {
  return (
      //TODO: create navigation bar
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/humans">Humans</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/join">Join Us</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/humans">
              <Humans />
            </Route>
            <Route exact path="/events">
              <Events />
            </Route>
            <Route path="/join">
              <Recruitment />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
