import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Gabriel Gonzaga User Experience Portfolio" />
                <title>Gabriel Gonzaga - UX Portfolio</title>
            </Helmet>

            <h2>Hello  <span role="img" aria-label="high-five">👋</span></h2>
            <p>I'm Gabriel, a <a rel="noopener noreferrer" target="_blank" href="https://github.com/gabrielmgonzaga">Web Developer</a> and UI/UX Designer based in Irvine. 
                Lately, I've been focusing on User Experience Design Strategy and running <a rel="noopener noreferrer" target="_blank" href="https://pxlbypxl.com">Pxl By Pxl</a> development studio.
            </p> 
        </div>
    )
}