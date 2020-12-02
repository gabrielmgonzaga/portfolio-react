import React from 'react';
import '../index.scss';
import { HashRouter, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Work from './Work/Work';
import WorkPost from './WorkPost/WorkPost';
import About from './About/About';
import Posts from './Posts/Posts';
import Post from './Post/Post';
import Home from './Home/Home';
import Footer from './Footer/Footer';

function App() {
  ReactGA.initialize('UA-99246177-2');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <HashRouter>
      <div className="main-wrapper">
          <main>
              <Route exact path="/work" component={Work} />
              <Route path={`/work/:workId`} component={WorkPost} />
              <Route path="/about" component={About} />
              <Route exact path="/posts" component={Posts} />
              <Route path={`/posts/:postId`} component={Post} />
              <Route exact path="/" component={Home} />
          </main>

          <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
