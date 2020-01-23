import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Gabriel Gonzaga User Experience Portfolio" />
                <title>Home - Gabriel Gonzaga</title>
            </Helmet>

            <h2>Hello  <span role="img" aria-label="high-five">👋</span></h2>
            <p>I'm Gabriel, a <a rel="noopener noreferrer" target="_blank" href="https://github.com/gabrielmgonzaga">Web Developer</a> based in Irvine. 
                Lately, I've been focused on JavaScript Frontend Development, UX Strategy, and running <a rel="noopener noreferrer" target="_blank" href="https://pxlbypxl.com">Pxl By Pxl</a> design studio.
            </p> 
            <p>
                Please check out some of my <Link to="/work">work</Link> and profile links below. If you have any questions, <a href="mailto:gabrielmgonzaga@gmail.com">reach out</a> anytime. 
            </p>
        </div>
    )
}