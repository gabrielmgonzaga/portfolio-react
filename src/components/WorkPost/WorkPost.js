import React from 'react';
import WorkCards from '../Data/WorkCards';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function Post({ match }) {
  const workCard = WorkCards.find(({ id }) => id == match.params.workId)

  return (
    <div className="post">
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Posts from Gabe Gonzaga" />
          <title>{workCard.title} - Gabe Gonzaga</title>
      </Helmet>

      <nav style={{ paddingTop: 15, paddingBottom: 15 }}>
        <div>
          <Link to="/">← Back</Link>
        </div>
      </nav>

      {workCard.intro.map(({
        img,
        postImg,
        duration,
        role,
        team,
        location }) =>
          <section className="intro animate fadeIn">
            <div className="header-intro">
              <span className={`${workCard.id} block`}></span>
              <h2>{workCard.title}</h2>
              <h4>{workCard.subtitle}</h4>
            </div>

            <div className="sub-intro">
              <div>
                <h3>Team</h3>
                { Array.isArray(team) ? team.map(team => <p>{team}</p>) : null }
              </div>

              <div>
                <h3>Role</h3>
                { Array.isArray(role) ? role.map(role => <p>{role}</p>) : null }
              </div>

              <div>
                <h3>Duration</h3>
                { duration === '' ? null : <p>{duration}</p> }
              </div>

              <div>
                <h3>Location</h3>
                { location === '' ? null : <p>{location}</p> }
              </div>
            </div>

            <div>
              { workCard.postImg === '' ? null :
                <div>
                  <img src={workCard.postImg.url} alt={workCard.postImg.alt} />
                  <small>{workCard.postImg.caption}</small>
                </div> }
            </div>
          </section>
      )}

      {workCard.content.map(({
        heading,
        paragraph,
        img,
        listHeading,
        list }) =>
          <section className="content animate fadeIn">
            { heading === '' ? null : <h2>{heading}</h2> }

            { Array.isArray(paragraph) ?
                paragraph.map(paragraph =>
                  <p>{paragraph}</p>) : null }

            { listHeading === '' ? null : <h2>{listHeading}</h2> }

            { Array.isArray(list) ?
              list.map(list =>
                <ul>
                  <li>
                    {list}
                  </li>
                </ul>) : null }

            { img.url === '' ? null :
              <div>
                <small>{img.caption}</small>
                <img src={img.url} alt={img.alt} />
              </div> }

            </section>
      )}

      <br/>

      <nav style={{ paddingTop: 15, paddingBottom: 15 }}>
        <div>
          <Link to="/">← Back</Link>
        </div>

        <div>
          <p>
            View website → <a className="button" href={workCard.link} target="_blank" rel="noopener noreferrer">{workCard.title}</a>
          </p>
        </div>
      </nav>

    </div>
  )
}
