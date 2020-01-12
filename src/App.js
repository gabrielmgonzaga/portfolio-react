import React from 'react';
import './App.css';
import Nav from './component/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
          <Nav />

          <main>
            <Switch>    
                <Route path="/case-studies">
                  <CaseStudies />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
            </Switch>
          </main>
      </div>
    </Router>
  );
}

export default App;
