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
                <title>Home - Gabriel Gonzaga</title>
            </Helmet>

            <h3>Under Construction <span role="img" aria-label="high-five">🚧</span></h3>

        </div>
    )
}
