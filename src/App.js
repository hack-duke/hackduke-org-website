import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./pages/About";
import Humans from "./pages/Humans";
import Events from "./pages/Events";
import Recruitment from "./pages/Recruitment";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
      //TODO: create navigation bar
      <Router>
        <div className={"main-app"}>
          <Navbar/>

          {/*switching between routes*/}
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
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
              <Home/>
            </Route>
          </Switch>

        </div>
      </Router>
  );
}
