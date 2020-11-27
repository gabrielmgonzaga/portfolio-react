import React from 'react';
import  './Work.scss';
import { Helmet } from 'react-helmet';

const card = [
    {
        id: 0,
        link: 'https://gabegonzaga.io/addon',
        title: 'AddOn Networks',
        role: 'Frontend Development',
        description: 'At AddOn, I supported the marketing department by managing and coordinating a dev team from Kazakhstan. We developed features for internal sales flow tracking, and created web media for partner companies. Initially, I was hired for a one month contract.',
        cta: 'Read More'
    },
    {
        id: 1,
        link: 'https://gabegonzaga.io/edco',
        title: 'Edco',
        role: 'Frontend Development',
        description: 'Edco is a fundraising platform for K-12 schools. I worked closely with a project manager to update, cleanup, and debug CSS Bootstrap code. I restyled landing pages, forms, and content to brand guidelines and assisted with the Edco platform launch, September 2019.',
        cta: 'Read More'
    },
    {
        id: 2,
        link: 'https://prolineoptions.com',
        title: 'Proline Options',
        role: 'Frontend Development',
        description: 'Proline Options is a partner company of AddOn Networks. I coordinated and assisted their marketing team and managed the website launch. I developed frontend landing pages, widgets, tabs, and web media.',
        cta: 'Visit Website'
    },
    {
        id: 3,
        link: 'https://smithandnoble.com',
        title: 'Smith & Noble',
        role: 'Frontend Development, Email Marketing',
        description: 'Smith & Noble provides custom window design and is based in Corona, CA. I worked with the marketing team developing landing pages, analyzing A/B tests, conversions, and supported creative email campaigns.',
        cta: 'Visit Website'
    }
]

export default function CaseStudies() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Gabriel Gonzaga User Experience Work" />
                <title>Work - Gabriel Gonzaga</title>
            </Helmet>

            <h2>Work <span role="img" aria-label="microscope">🔬</span></h2>
            <div className="work">
                {card.map(i =>
                    <div className="work-card" key={i.id}>
                        <a rel="noopener noreferrer" target="blank" href={i.link}>
                            <h3>{i.title}</h3>
                            <div><span>Role: {i.role}</span></div>
                            <p>{i.description}</p>
                            <small>{i.cta} →</small>
                        </a>
                    </div>
                )}
            </div>
            <div className="moreProjects">
              <a className="button" href="https://github.com/gabrielmgonzaga" target="blank">See Github Projects →</a>
            </div>
        </div>
    )
}