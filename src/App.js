import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import Nav from './pages/Nav';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import {BrowserRouter as Router, Switch, Route }  from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
 

   return (
     <Router>
           <div className="App">
      <Nav />
 
    <Switch>
    <Route exact path="/" component = {Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component ={Contact} />    
    </Switch>
    </div>
    </Router>
  );
}



export default App;
