import React from 'react';
import  './Work.scss';
import { Helmet } from 'react-helmet';

const card = [
    {
        id: 0,
        link: 'https://gabegonzaga.io/addon',
        title: 'AddOn Networks',
        role: 'Frontend Development',
        description: 'AddOn Networks provides quality computer network upgrades and connectivity hardware upgrades. Initially, I was hired for a one month contract which extended close to two years.',
        cta: 'Read More'
    },
    {
        id: 1,
        link: 'https://gabegonzaga.io/edco',
        title: 'Edco',
        role: 'Frontend Development',
        description: 'Edco is a fundraising platform for K-12 schools. The platform allows parents to raise funds, create team pages, invite friends, and promote their fundraising activities.',
        cta: 'Read More'
    },
    {
        id: 2,
        link: 'https://prolineoptions.com',
        title: 'Proline Options',
        role: 'Frontend Development',
        description: 'Proline Options provides computer network hardware and is based out of Chicago. Their web application is built on a VueJS frontend and JavaScript tech stack.',
        cta: 'Visit Website'
    },
    {
        id: 3,
        link: 'https://smithandnoble.com',
        title: 'Smith & Noble',
        role: 'Frontend Development, Email Marketing',
        description: 'Smith & Noble provides custom window treatment design and is headquartered in Corona. Their frontend utilizes Smarty PHP template engine.',
        cta: 'Visit Website'
    },
    {
        id: 4,
        link: 'https://sourceability.com',
        imgSrc: '',
        imgAlt: '',
        title: 'Sourceability',
        role: 'Frontend Development',
        description: 'Sourceability provides computer network hardware products and is based out of Irvine. Their website is built on the Wordpress platform.',
        cta: 'Visit Website'
    },
    {
        id: 5,
        link: 'https://pixelmotion.com',
        title: 'Pixel Motion',
        role: 'Frontend Support & Maintenance',
        description: 'Pixel Motion is a digital web agency based out of Irvine. They provide marketing solutions for automotive dealerships and their clients use the Wordpress platform.',
        cta: 'Visit Website'
    },
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
        </div>
    )
}
