import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import Nav from "./pages/Nav";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Home/Detail/Detail";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recipe-detail" component={Detail} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
