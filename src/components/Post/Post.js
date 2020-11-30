import React from 'react';
import './Post.scss';
import Blog from '../Data/Blog.js';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function Post({ match }) {
  const blog = Blog.find(({ id }) => id == match.params.postId)

  return (
    <div className="post">
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Posts from Gabe Gonzaga" />
          <title>{blog.title} - Gabe Gonzaga</title>
      </Helmet>

      <nav style={{ paddingTop: 15, paddingBottom: 15 }}>
        <div>
          <Link to="/posts">← Back</Link>
        </div>
      </nav>
      <div>
        { blog.img === '' ? null : <img src={blog.img.url} alt={blog.img.alt} /> }
      </div>

      {blog.intro.map(({
        img,
        duration,
        skills,
        team }) =>
          <section className="intro">
            <div className="header-intro">
              <h2>{blog.title}</h2>
              <p>{blog.subtitle}</p>
            </div>

            <div className="sub-intro">
              <div>
                <h3>Duration</h3>
                { duration === '' ? null : <p>{duration}</p> }
              </div>

              <div>
              <h3>Team</h3>
              { Array.isArray(team) ? team.map(team => <p>{team}</p>) : null }
              </div>

              <div>
                <h3>Skills</h3>
                { Array.isArray(skills) ? skills.map(skills => <p>{skills}</p>) : null }
              </div>

            </div>
          </section>
      )}

      {blog.content.map(({
        heading,
        paragraph,
        img,
        list }) =>
          <section className="content">
            { heading === '' ? null : <h2>{heading}</h2> }

            { img.url === '' ? null : <img src={img.url} alt={img.alt} /> }

            { Array.isArray(paragraph) ?
                paragraph.map(paragraph =>
                  <p>{paragraph}</p>) : null }

            { Array.isArray(list) ?
              list.map(list =>
                <ul>
                  <li>
                    {list}
                  </li>
                </ul>) : null }

            </section>
      )}
    </div>
  )
}
