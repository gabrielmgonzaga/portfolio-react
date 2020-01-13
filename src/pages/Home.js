import React from 'react';
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <div className="home">
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Gabriel Gonzaga User Experience Portfolio" />
                <title>Gabriel Gonzaga - UX Portfolio</title>
            </Helmet>

            <h2>Hi, I'm Gabriel <span role="img" aria-label="high-five">👋</span></h2>
            <p>Just a solution driven UI/UX Designer and <a rel="noopener noreferrer" target="_blank" href="https://github.com/gabrielmgonzaga">Web Developer</a> based in Irvine. 
                I've currently been focused on User Experience design, strategy, and research. I have <a rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/gabriel-gonzaga">3 years experience</a> managing and developing digital content for the web.</p> 
        </div>
    )
}