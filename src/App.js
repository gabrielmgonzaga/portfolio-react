import React from 'react';
import './App.css';
import {
  HashRouter,
  Route,
} from 'react-router-dom';

import Nav from './components/Nav';
import Work from './pages/Work';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <div className="main-wrapper">
          <Nav />

          <main>
              <Route path="/work">
                  <Work />
              </Route>
              <Route path="/about">
                  <About />
              </Route>
              <Route exact path="/">
                  <Home />
              </Route>
          </main>

          <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
