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

            <h1>Gabe Gonzaga</h1>

            <p>
              I'm a hybrid Web Designer/Developer with three years experience creating digital web content.
               Currently studying UX Design at UCLA extension. Focused on solving user and business problems with a human centered approach.
            </p>

            <br></br>

            <Link className="button" to="/work">See Work</Link>
        </div>
    )
}
