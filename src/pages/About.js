import React from 'react';
import { Helmet } from 'react-helmet';

export default function Blog() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Gabriel Gonzaga User Experience Profile" />
                <title>Gabriel Gonzaga - About</title>
            </Helmet>

            <section className="about">

                <h2>About</h2>

                <img src="https://gabegonzaga.io/assets/gabriel-bw.jpg" alt="Gabriel Gonzaga black and white" />

                <p>Hi, I'm Gabriel. I believe <em>technology and information</em> is a platform to give individuals power and knowledge to transcend and simplify lives. I'm driven to educate and provide easy to use products to have a positive impact for both information consumers, businesses, and startups.</p>

                <p>In the past 3 years, I have been very fortunate to use both my technical and creative abilities. I have helped marketing teams, businesses, and startups to provide users with simple effective information design to generate leads, internal growth, and revenue.</p>

                <p>Before learning web development in 2016, I worked in the medical field assisting operating room teams save lives. I have a natural empathy to have a positive impact anyway possible.</p>

                <p>Aside from work, I love music, airplanes, animals, and the pacific ocean. I'm currently based in Irvine and raised in Garden Grove, CA.</p>

                <p>Thanks for visiting.</p>

            </section>

            <div className="quote">
                <p><em>"Simplicity is the ultimate sophistication"</em></p>
                <p>- Leonardo da Vinci</p>
            </div>
        </div>
    )
}
