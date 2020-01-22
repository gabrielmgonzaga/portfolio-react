import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const card = [
    {
        id: 0,
        link: 'https://gabegonzaga.io/writing/addon.html',
        imgSrc: '',
        imgAlt: '',
        title: 'AddOn Networks',
        description: 'Provides computer network upgrades and connectivity hardware. Initially, I was brought on board on a one month contract which extended to 18 months.'
    },
    {
        id: 1,
        link: 'https://gabegonzaga.io/writing/edco.html',
        imgSrc: '',
        imgAlt: '', 
        title: 'Edco',
        description: 'Fundraising platform for K-12 schools. The platform allows parents to raise funds, create team pages, invite members, and promote their fundraising activities.'
    },
]

export default function CaseStudies() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Gabriel Gonzaga User Experience Work" />
                <title>Gabriel Gonzaga - Work</title>
            </Helmet>

            <h2>Work</h2>
            <div className="work">
                {card.map(i => 
                    <div className="work-card" key={i.id}>
                        <a href={i.link}>
                            <h3>{i.title}</h3>
                            <p>{i.description}</p>
                            <small>Read More...</small>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
