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

            <h1>{home.name}</h1>

            <p>
              {home.one} <br />
              {home.two} 
            </p>

            <br />

            <Link className="button" to="/work">See Work</Link>
        </div>
    )
}
