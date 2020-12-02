import React from 'react';
import workCard from '../Data/WorkCards';
import  './Work.scss';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function Work() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Gabriel Gonzaga User Experience Work" />
                <title>Work - Gabriel Gonzaga</title>
            </Helmet>

            <div className="work">
                {workCard.map(({
                  id,
                  link,
                  title,
                  role,
                  img,
                  cta }) =>
                    <div className="work-card animate fadeIn" key={id}>
                      <Link to={`/work/${id}`}>
                        <img src={img.url} alt={img.alt} />
                        <div className={`${id} work-description`}>
                          <h3>{title}</h3>
                          <span>Role: {role}</span>
                          <small>{cta} →</small>
                        </div>
                      </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
