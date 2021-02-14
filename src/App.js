import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import About from "./pages/About";
import Humans from "./pages/Humans";
import Events from "./pages/Events";
import Recruitment from "./pages/Recruitment";
import Home from "./pages/Home";
import "./App.css";

export default function App() {
  return (
      //TODO: create navigation bar
      <Router>
        <Route render={({location}) => (
            <TransitionGroup className={"main-app"}>
              <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
              >
                <Switch location={location}>
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
              </CSSTransition>
            </TransitionGroup>
        )} />
      </Router>
  );
}
