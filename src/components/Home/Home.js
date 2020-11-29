import React from 'react';
import home from '../Data/Home.js';
import './Home.scss';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home animate fadeIn">
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Gabriel Gonzaga User Experience Portfolio" />
                <title>{home.name}</title>
            </Helmet>

            <div className="header">
              <img src={home.img.url} alt={home.img.alt} />
              <h1>{home.name}</h1>
            </div>

            <p>
              {home.one} Learn more <Link to="/about">about</Link> me.
              <br/><br/>
              {home.two}
            </p>
        </div>
    )
}
