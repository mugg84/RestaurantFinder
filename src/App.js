import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import RestaurantInfo from "./Components/restaurants/RestaurantInfo";
import RestState from "./Components/context/restaurant/RestState";
import AlertState from "./Components/context/alert/alertState";

import "./App.css";

const App = () => {
  return (
    <RestState>
      <AlertState>
        <Router>
          <main className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/restaurant/:id" component={RestaurantInfo} />
            </Switch>
          </main>
        </Router>
      </AlertState>
    </RestState>
  );
};

export default App;
