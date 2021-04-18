import React, { useState, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/global.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RaiseFund from "./pages/RaiseFund";
import FormFund from "./pages/FormFund";
import Profile from "./pages/Profile";
import DetailDonate from "./components/DetailDonate";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/RaiseFund" component={RaiseFund} />
          <Route exact path="/FormFund" component={FormFund} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/detail/:id" component={DetailDonate} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
