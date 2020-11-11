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

                <p>In the past 3 years, I've assisted creative marketing teams, businesses, and startups with web development and design.</p>
                <p>Before 2016, I worked in the medical field assisting operating room teams save lives. I have a natural empathy towards people and want to have a positive impact anyway I can.</p>
                <p>Aside from work, I live for music, nature, animals, and family. I'm an INFJ - who are creative, gentle, and caring.</p>
                <p>Thanks for reading!</p>
            </section>

            <div className="quote">
                <p><em>"Simplicity is the ultimate sophistication"</em></p>
                <p>
                  <small>- Leonardo da Vinci</small>
                </p>
            </div>
        </div>
    )
}
