import React from 'react';
import './About.scss';
import Nav from '../Nav/Nav'
import Blog from '../Posts/Posts'
import { Helmet } from 'react-helmet';

export default function About() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="About Gabe Gonzaga" />
                <title>About - Gabe Gonzaga</title>
            </Helmet>

            <Nav />

            <section className="about animate fadeIn">
                <div>
                  <h2>About <span role="img" aria-label="globe">🌏</span></h2>
                  <div>
                    <p>In the past 3 years, I've assisted creative marketing teams, businesses, and stakeholders with web design and development.</p>
                    <p>Before, I worked at UC Irvine medical center assisting operating room teams save lives. I have a natural empathy towards people and aim to be a positive influence in the world.</p>
                    <p>I live to work for music, nature, animals, and family.</p>
                    <p>Thanks for reading!</p>
                  </div>
                </div>

                <div className="quote">
                  <p><em>"Simplicity is the ultimate sophistication"</em></p>
                  <small>- Leonardo da Vinci</small>
                </div>
            </section>

            <br/>

            <div className="animate fadeIn">
              <Blog />
            </div>

            <br/>
        </div>
    )
}
