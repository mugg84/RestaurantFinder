import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Restaurant from "./Components/restaurants/Restaurant";

import RestState from "./Components/context/restaurant/RestState";
import AlertState from "./Components/context/alert/alertState";

import "./App.css";

const App = () => {
  return (
    <RestState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/restaurant/:id" component={Restaurant} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </RestState>
  );
};

export default App;
