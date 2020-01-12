import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './components/Nav';
import Work from './pages/Work';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
          <Nav />

          <main>
            <Switch>    
                <Route path="/work">
                  <Work />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
            </Switch>
          </main>

          <Footer />
      </div>
    </Router>
  );
}

export default App;
