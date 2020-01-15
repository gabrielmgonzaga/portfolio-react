import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const card = [
    {
        id: 0,
        link: '/',
        imgSrc: 'https://via.placeholder.com/1000',
        imgAlt: 'Image Description 2',
        title: 'Case Study 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 1,
        link: '/',
        imgSrc: 'https://via.placeholder.com/1000',
        imgAlt: 'Image Description 2', 
        title: 'Case Study 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 2,
        link: '/',
        imgSrc: 'https://via.placeholder.com/1000',
        imgAlt: 'Image Description 2', 
        title: 'Case Study 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

export default function CaseStudies() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Gabriel Gonzaga User Experience Work" />
                <title>Gabriel Gonzaga - UX Work</title>
            </Helmet>

            <h2>Work</h2>
            <div className="work">
                {card.map(i => 
                    <div className="work-card" key={i.id}>
                        <Link to={i.link}>
                            <img src={i.imgSrc} alt={i.imgAlt}/>
                            <h3>{i.title}</h3>
                            <p>{i.description}</p>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
