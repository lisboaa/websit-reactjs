import React from 'react';

import './assets/css/global.css'

import Navbar from '../src/components/pages/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/HomePage/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
