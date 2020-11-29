import React from 'react';
import card from '../Data/Work.js';
import  './Work.scss';
import { Helmet } from 'react-helmet';

export default function Work() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Gabriel Gonzaga User Experience Work" />
                <title>Work - Gabriel Gonzaga</title>
            </Helmet>

            <h2>Work <span role="img" aria-label="microscope">🔬</span></h2>
            <div className="work">
                {card.map(({
                  id,
                  link,
                  title,
                  role,
                  description,
                  cta}) =>
                    <div className="work-card" key={id}>
                        <a rel="noopener noreferrer" target="blank" href={link}>
                            <h3>{title}</h3>
                            <div>
                              <span>Role: {role}</span>
                            </div>
                            <p>{description}</p>
                            <small>{cta} →</small>
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
