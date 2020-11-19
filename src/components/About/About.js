import React from 'react';
import './About.scss';
import { Helmet } from 'react-helmet';

export default function Blog() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Gabriel Gonzaga User Experience Profile" />
                <title>About - Gabriel Gonzaga</title>
            </Helmet>

            <section className="about">
                <h2>About <span role="img" aria-label="globe">🌎</span></h2>

                <p>In the past 3 years, I assisted creative marketing teams, businesses, and stakeholders with web design and development.</p>
                <p>Before, I worked at UC Irvine medical center assisting operating room teams save lives. I have a natural empathy towards people and aim to be a positive influence to those around me.</p>
                <p>Aside from work, I live for music, nature, animals, and family.</p>
                <p>Thanks for reading!</p>
            </section>
        </div>
    )
}
