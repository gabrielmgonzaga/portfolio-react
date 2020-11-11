import React from 'react';
import './Home.scss';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Gabriel Gonzaga User Experience Portfolio" />
                <title>Home - Gabe Gonzaga</title>
            </Helmet>

            <h1>Hi, I'm Gabe <span role="img" aria-label="high-five">🤙</span></h1>

            <p>
              I have three years experience developing, designing, and creating digital content for web and social media. I'm a solution driven Web Designer working out of Irvine, CA.
            </p>
        </div>
    )
}
